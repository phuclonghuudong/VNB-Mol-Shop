const CategoryDAO = require("../repositories/category.repository");
const { NotFoundError, ConflictError } = require("../utils/errors");

class CategoryBUS {
  async getAllCategories() {
    const result = await CategoryDAO.findAll();

    if (!result || result.length === 0)
      throw new NotFoundError("CHƯA CÓ DỮ LIỆU");

    return result;
  }

  async getCategoryById(id) {
    const category = await CategoryDAO.findById(Number(id));
    if (!category) throw new NotFoundError("KHÔNG TỒN TẠI DỮ LIỆU");

    return category;
  }

  async getCategoryBySlug(slug) {
    const category = await CategoryDAO.findBySlug(slug);
    if (!category) throw new NotFoundError("KHÔNG TỒN TẠI DỮ LIỆU");

    return category;
  }

  async validateForCreate(slug, name) {
    const [existingBySlug, existingByName] = await Promise.all([
      CategoryDAO.findBySlug(slug),
      CategoryDAO.findByName(name),
    ]);

    if (existingBySlug) throw new ConflictError("TÊN ĐỊNH DANH ĐÃ TỒN TẠI!");
    if (existingByName) throw new ConflictError("TÊN LOẠI ĐÃ TỒN TẠI!");
  }

  async validateForUpdate(slug, name, excludeId) {
    const [existingBySlug, existingByName] = await Promise.all([
      CategoryDAO.findBySlug(slug),
      CategoryDAO.findByName(name),
    ]);

    if (
      existingBySlug &&
      Number(existingBySlug.category_id) !== Number(excludeId)
    ) {
      throw new ConflictError("TÊN ĐỊNH DANH ĐÃ TỒN TẠI Ở DANH MỤC KHÁC!");
    }

    if (
      existingByName &&
      Number(existingByName.category_id) !== Number(excludeId)
    ) {
      throw new ConflictError("TÊN LOẠI ĐÃ TỒN TẠI Ở DANH MỤC KHÁC!");
    }
  }

  async createCategory(data) {
    await this.validateForCreate(data.slug, data.name);

    return await CategoryDAO.create(data);
  }

  async updateCategory(id, data) {
    const oldCategory = await this.getCategoryById(id);

    await this.validateForUpdate(data.slug, data.name, id);

    const isUnchanged =
      oldCategory.category_slug === data.slug &&
      oldCategory.category_name === data.name &&
      oldCategory.description === data.description &&
      oldCategory.image_url === data.imageUrl &&
      Number(oldCategory.status) === Number(data.status);

    if (isUnchanged) throw new ConflictError("KHÔNG CÓ GÌ THAY ĐỔI!");

    return await CategoryDAO.update(Number(id), data);
  }

  async deleteCategory(id) {
    await this.getCategoryById(id);

    await CategoryDAO.delete(Number(id));
  }
}

module.exports = new CategoryBUS();
