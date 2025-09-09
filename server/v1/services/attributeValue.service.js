const AttributeValueDAO = require("../repositories/attributeValue.repository");
const AttributeBUS = require("./attribute.service");
const {
  NotFoundError,
  ConflictError,
  BadRequestError,
} = require("../utils/errors");
const { isValidSlugInput } = require("../utils/isValidateInput");

class AttributeValueBUS {
  async getAllAttributeValue() {
    const result = await AttributeValueDAO.findAllAttributeValue();
    if (!result || result.length === 0)
      throw new NotFoundError("CHƯA CÓ DỮ LIỆU");

    return result.map((c) => c.toJSON?.() ?? c);
  }

  async getAllAttributeValueActive() {
    const result = await AttributeValueDAO.findActiveAttributeValue();
    if (!result || result.length === 0)
      throw new NotFoundError("CHƯA CÓ DỮ LIỆU");

    return result.map((c) => c.toJSON?.() ?? c);
  }

  async getAttributeValueById(id) {
    const result = await AttributeValueDAO.findAttributeValueById(id);
    if (!result) throw new NotFoundError("GIÁ TRỊ THUỘC TÍNH KHÔNG TỒN TẠI");

    return result.toJSON?.() ?? result;
  }

  async createAttributeValue(data) {
    const { value, displayOrder, status, attributeId } = data;

    await AttributeBUS.getAttributeById(attributeId);

    const result = await AttributeValueDAO.create(data);
    if (!result || result.length === 0)
      throw new BadRequestError("THAO TÁC KHÔNG THÀNH CÔNG, VUI LÒNG THỬ LẠI");

    return result.toJSON?.() ?? result;
  }

  async updateAttributeValue(id, data) {
    const { value, displayOrder, status, attributeId } = data;
    const oldData = await this.getAttributeValueById(id);

    await AttributeBUS.getAttributeById(attributeId);

    await this.validateForUpdate(id, data);

    const isUnchanged =
      oldData.value === value &&
      Number(oldData.displayOrder) === Number(displayOrder) &&
      Number(oldData.attributeId) === Number(attributeId) &&
      Number(oldData.status) === Number(status);

    if (isUnchanged) throw new ConflictError("KHÔNG CÓ GÌ THAY ĐỔI");

    const result = await AttributeValueDAO.update(id, data);

    if (!result || result.length === 0)
      throw new BadRequestError("THAO TÁC KHÔNG THÀNH CÔNG, VUI LÒNG THỬ LẠI");

    return result.toJSON?.() ?? result;
  }
}

module.exports = new AttributeValueBUS();
