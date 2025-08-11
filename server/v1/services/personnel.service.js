const PersonnelDAO = require("../repositories/personnel.repository");
const { NotFoundError, ConflictError } = require("../utils/errors");

class CustomerBUS {
  async getAllPersonnel() {
    const result = await PersonnelDAO.findAll();
    if (!result || result.length === 0)
      throw new NotFoundError("CHƯA CÓ DỮ LIỆU");

    return result.map((x) => x.toJSON?.() ?? x);
  }

  async getPersonnelById(id) {
    const result = await PersonnelDAO.findById(Number(id));
    if (!result || result.length === 0)
      throw new NotFoundError("KHÔNG TỒN TẠI DỮ LIỆU");

    return result.toJSON?.() ?? result;
  }

  async createPersonnel(data) {
    const result = await PersonnelDAO.create(data);
    return result.toJSON?.() ?? result;
  }

  async updatePersonnel(id, data) {
    const oldData = await this.getPersonnelById(id);

    const isUnchanged =
      oldData.fullname === data.fullname &&
      oldData.gender === data.gender &&
      oldData.cccd === data.cccd &&
      oldData.birthday === data.birthday &&
      oldData.address === data.address &&
      oldData.avatar === data.avatar &&
      Number(oldData.personnel_id) === Number(data.id);

    if (isUnchanged) throw new ConflictError("KHÔNG CÓ GÌ THAY ĐỔI");

    const result = await PersonnelDAO.update(Number(id), data);
    return result.toJSON?.() ?? result;
  }
  async deletePersonnel(id) {
    await this.getPersonnelById(id);
    await PersonnelDAO.delete(Number(id));
  }
}

module.exports = new CustomerBUS();
