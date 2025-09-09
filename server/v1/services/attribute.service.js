const AttributeDAO = require("../repositories/attribute.repository");
const {
  NotFoundError,
  ConflictError,
  BadRequestError,
} = require("../utils/errors");
const { isValidSlugInput } = require("../utils/isValidateInput");

class AttributeBUS {
  async getAllAttribute() {
    const result = await AttributeDAO.findAllAttributes();
    if (!result || result.length === 0)
      throw new NotFoundError("CHƯA CÓ DỮ LIỆU");

    return result.map((c) => c.toJSON?.() ?? c);
  }

  async getAllAttributeActive() {
    const result = await AttributeDAO.findActiveAttributes();
    if (!result || result.length === 0)
      throw new NotFoundError("CHƯA CÓ DỮ LIỆU");

    return result.map((c) => c.toJSON?.() ?? c);
  }

  async getAttributeById(id) {
    const result = await AttributeDAO.findAttributeById(id);
    if (!result) throw new NotFoundError("THUỘC TÍNH KHÔNG TỒN TẠI");

    return result.toJSON?.() ?? result;
  }

  async getAttributeByName(value) {
    const result = await AttributeDAO.findAttributeByName(value);
    if (!result) throw new NotFoundError("TÊN THUỘC TÍNH KHÔNG TỒN TẠI");

    return result.toJSON?.() ?? result;
  }

  async getAttributeBySlug(value) {
    const result = await AttributeDAO.findAttributeBySlug(value);
    if (!result) throw new NotFoundError("TÊN ĐỊNH DANH KHÔNG TỒN TẠI");

    return result.toJSON?.() ?? result;
  }

  async validateForCreate(data) {
    const { slug, name } = data;

    const isValidSlug = await isValidSlugInput(slug);
    if (!isValidSlug)
      throw new BadRequestError(
        "ĐỊNH DANH KHÔNG ĐÚNG ĐỊNH DẠNG (VD: thuc-the)"
      );

    const [existingBySlug, existingByName] = await Promise.all([
      AttributeDAO.findAttributeBySlug(slug),
      AttributeDAO.findAttributeByName(name),
    ]);

    if (existingBySlug) throw new ConflictError("TÊN ĐỊNH DANH ĐÃ TỒN TẠI");
    if (existingByName) throw new ConflictError("TÊN THUỘC TÍNH ĐÃ TỒN TẠI");
  }

  async validateForUpdate(id, data) {
    const { slug, name } = data;
    const isValidSlug = await isValidSlugInput(slug);
    if (!isValidSlug)
      throw new BadRequestError(
        "ĐỊNH DANH KHÔNG ĐÚNG ĐỊNH DẠNG (VD: thuc-the)"
      );

    const [existingBySlug, existingByName] = await Promise.all([
      AttributeDAO.findAttributeBySlug(slug),
      AttributeDAO.findAttributeByName(name),
    ]);

    if (existingBySlug && Number(existingBySlug.attribute_id) !== Number(id))
      throw new ConflictError("TÊN ĐỊNH DANH ĐÃ TỒN TẠI ");
    if (existingByName && Number(existingByName.attribute_id) !== Number(id))
      throw new ConflictError("TÊN THUỘC TÍNH ĐÃ TỒN TẠI ");
  }

  async createAttribute(data) {
    await this.validateForCreate(data);

    const result = await AttributeDAO.create(data);
    if (!result || result.length === 0)
      throw new BadRequestError("THAO TÁC KHÔNG THÀNH CÔNG, VUI LÒNG THỬ LẠI");

    return result.toJSON?.() ?? result;
  }

  async updateAttribute(id, data) {
    const { name, slug, type, isCustom, status } = data;
    const oldData = await this.getAttributeById(id);

    await this.validateForUpdate(id, data);

    const isUnchanged =
      oldData.name === name &&
      oldData.slug === slug &&
      oldData.type === type &&
      oldData.isCustom === isCustom &&
      Number(oldData.status) === Number(status);

    if (isUnchanged) throw new ConflictError("KHÔNG CÓ GÌ THAY ĐỔI");

    const result = await AttributeDAO.update(Number(id), data);

    if (!result || result.length === 0)
      throw new BadRequestError("THAO TÁC KHÔNG THÀNH CÔNG, VUI LÒNG THỬ LẠI");

    return result.toJSON?.() ?? result;
  }

  async softDeleteAttribute(id) {
    const checkId = await this.getAttributeById(id);

    if (Number(checkId.status) === -1)
      throw new BadRequestError("THAO TÁC KHÔNG THÀNH CÔNG, DỮ LIỆU ĐÃ BỊ XÓA");

    const result = await AttributeDAO.softDeleteAttribute(id);
    if (!result || result.length === 0)
      throw new BadRequestError("THAO TÁC KHÔNG THÀNH CÔNG, VUI LÒNG THỬ LẠI");

    return result.toJSON?.() ?? result;
  }
}

module.exports = new AttributeBUS();
