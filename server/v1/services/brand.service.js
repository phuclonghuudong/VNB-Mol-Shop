const BrandDAO = require("../repositories/brand.repository");
const { ConflictError, NotFoundError } = require("../utils/errors");

class BrandBUS {
  async getAllBrand() {
    const result = await BrandDAO.findAll();

    if (!result || result.length === 0)
      throw new NotFoundError("CHƯA CÓ DỮ LIỆU");

    return result;
  }

  async getBrandById(id) {
    const result = await BrandDAO.findById(Number(id));
    if (!result) throw new NotFoundError("KHÔNG TỒN TẠI DỮ LIỆU");

    return result;
  }

  async getBrandBySlug(value) {
    const result = await BrandDAO.findBySlug(value);
    if (!result) throw new NotFoundError("KHÔNG TỒN TẠI DỮ LIỆU");

    return result;
  }

  async getBrandByName(value) {
    const result = await BrandDAO.findByName(Number(value));
    if (!result) throw new NotFoundError("KHÔNG TỒN TẠI DỮ LIỆU");

    return result;
  }

  async validateForCreate(slug, name) {
    const [existingBySlug, existingByName] = await Promise.all([
      BrandDAO.findBySlug(slug),
      BrandDAO.findByName(name),
    ]);

    if (existingBySlug) throw new ConflictError("TÊN ĐỊNH DANH ĐÃ TỒN TẠI");
    if (existingByName) throw new ConflictError("TÊN THƯƠNG HIỆU ĐÃ TỒN TẠI");
  }

  async validateForUpdate(slug, name, excludeId) {
    const [existingBySlug, existingByName] = await Promise.all([
      BrandDAO.findBySlug(slug),
      BrandDAO.findByName(name),
    ]);

    if (existingBySlug && Number(existingBySlug.brand_id) !== Number(excludeId))
      throw new ConflictError("TÊN ĐỊNH DANH ĐÃ TỒN TẠI Ở DANH MỤC KHÁC");

    if (existingByName && Number(existingByName.brand_id) !== Number(excludeId))
      throw new ConflictError("TÊN THƯƠNG HIỆU ĐÃ TỒN TẠI Ở DANH MỤC KHÁC");
  }

  async createBrand(data) {
    await this.validateForCreate(data.slug, data.name);

    return await BrandDAO.create(data);
  }

  async updateBrand(id, data) {
    const oldBrand = await this.getBrandById(id);

    await this.validateForUpdate(data.slug, data.name, id);

    const isUnchanged =
      oldBrand.brand_slug === data.slug &&
      oldBrand.brand_name === data.name &&
      oldBrand.description === data.description &&
      oldBrand.image_url === data.imageUrl &&
      Number(oldBrand.status) === Number(data.status);

    if (isUnchanged) throw new ConflictError("KHÔNG CÓ GÌ THAY ĐỔI");

    return await BrandDAO.update(Number(id), data);
  }

  async deleteBrand(id) {
    await this.getBrandById(id);

    await BrandDAO.delete(Number(id));
  }
}

module.exports = new BrandBUS();
