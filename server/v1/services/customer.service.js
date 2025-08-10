const CustomerDAO = require("../repositories/customer.repository");
const { NotFoundError, ConflictError } = require("../utils/errors");

class CustomerBUS {
  async getAllCustomer() {
    const result = await CustomerDAO.findAll();
    if (!result || result.length === 0)
      throw new NotFoundError("CHƯA CÓ DỮ LIỆU");

    return result;
  }

  async getCustomerById(id) {
    const result = await CustomerDAO.findById(Number(id));
    if (!result || result.length === 0)
      throw new NotFoundError("KHÔNG TỒN TẠI DỮ LIỆU");

    return result;
  }

  async createCustomer(data) {
    return await CustomerDAO.create(data);
  }

  async updateCustomer(id, data) {
    const oldCustomer = await this.getCustomerById(id);

    const isUnchanged =
      oldCustomer.fullname === data.fullname &&
      oldCustomer.gender === data.gender &&
      oldCustomer.birthday === data.birthday &&
      oldCustomer.address === data.address &&
      oldCustomer.avatar === data.avatar &&
      Number(oldCustomer.customer_id) === Number(data.id);
    // const isUnchanged = Object.keys(data).every(
    //   (key) => oldCustomer[key] === data[key]
    // );

    if (isUnchanged) throw new ConflictError("KHÔNG CÓ GÌ THAY ĐỔI");

    return await CustomerDAO.update(Number(id), data);
  }
  async deleteCustomer(id) {
    await this.getCustomerById(id);
    await CustomerDAO.delete(Number(id));
  }
}

module.exports = new CustomerBUS();
