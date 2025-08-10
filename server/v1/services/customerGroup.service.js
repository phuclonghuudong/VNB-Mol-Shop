const CustomerGroupDAO = require("../repositories/customerGroup.repository");
const { NotFoundError, ConflictError } = require("../utils/errors");

class CustomerGroupBUS {
  async getAllGroups() {
    const result = await CustomerGroupDAO.findAll();
    if (!result || result.length === 0)
      throw new NotFoundError("CHƯA CÓ DỮ LIỆU");

    return result;
  }

  async getCustomerGroupById(id) {
    const result = await CustomerGroupDAO.findById(Number(id));
    if (!result || result.length === 0)
      throw new NotFoundError("KHÔNG TỒN TẠI DỮ LIỆU");

    return result;
  }

  async validateForCreate(value) {
    const existingName = await CustomerGroupDAO.findByName(value);

    if (existingName) throw new ConflictError("TÊN NHÓM ĐÃ TỒN TẠI");
  }

  async validateForUpdate(value, id) {
    const existingName = await CustomerGroupDAO.findByName(value);

    if (existingName && Number(existingName.group_id) !== Number(id))
      throw new ConflictError("TÊN NHÓM ĐÃ TỒN TẠI Ở DANH MỤC KHÁC");
  }

  async createCustomerGroup(data) {
    await this.validateForCreate(data.name);

    return await CustomerGroupDAO.create(data);
  }

  async updateCustomerGroup(id, data) {
    const oldData = await this.getCustomerGroupById(id);

    await this.validateForUpdate(data.name, id);

    const isUnchanged =
      oldData.group_name === data.name &&
      oldData.description === data.description &&
      Number(oldData.status) === Number(data.status);

    if (isUnchanged) throw new ConflictError("KHÔNG CÓ GÌ THAY ĐỔI");

    return await CustomerGroupDAO.update(Number(id), data);
  }

  async deleteCustomerGroup(id) {
    await this.getCustomerGroupById(id);

    await CustomerGroupDAO.delete(Number(id));
  }
}

module.exports = new CustomerGroupBUS();
