const AccountDAO = require("../repositories/account.repository");
const { NotFoundError, BadRequestError } = require("../utils/errors");
const {
  validEmailInput,
  validPhoneInput,
} = require("../utils/isValidateInput");

class AccountBUS {
  async getAllAccounts() {
    const result = await AccountDAO.findAll();
    if (!result || result.length === 0)
      throw new NotFoundError("CHƯA CÓ DỮ LIỆU");

    return result;
  }

  async getAccountById(id) {
    const result = await AccountDAO.findById(id);
    if (!result) throw new NotFoundError("KHÔNG TỒN TẠI DỮ LIỆU");
    return result;
  }

  async getAccountByUsername(value) {
    const result = await AccountDAO.findByUsername(value);
    if (!result) throw new NotFoundError("TÀI KHOẢN KHÔNG TỒN TẠI");
    return result;
  }

  async getAccountByEmail(value) {
    const result = await AccountDAO.findByEmail(value);
    if (!result) throw new NotFoundError("EMAIL KHÔNG TỒN TẠI");
    return result;
  }

  async getAccountByPhone(value) {
    const result = await AccountDAO.findByPhone(value);
    if (!result) throw new NotFoundError("SỐ ĐIỆN THOẠI KHÔNG TỒN TẠI");
    return result;
  }

  async validateForCreate(data) {
    const { username, phone, email } = data;

    const isValidEmail = validEmailInput(email);
    const isValidPhone = validPhoneInput(phone);

    if (!isValidEmail) throw new BadRequestError("EMAIL KHÔNG ĐÚNG ĐỊNH DẠNG");
    if (!isValidPhone)
      throw new BadRequestError("SỐ ĐIỆN THOẠI KHÔNG ĐÚNG ĐỊNH DẠNG");

    const [existingUsername, existingPhone, existingEmail] = await Promise.all([
      AccountDAO.findByUsername(username),
      AccountDAO.findByPhone(phone),
      AccountDAO.findByEmail(email),
    ]);

    if (existingUsername) throw new ConflictError("TÀI KHOẢN ĐÃ TỒN TẠI");
    if (existingPhone) throw new ConflictError("SỐ ĐIỆN THOẠI ĐÃ TỒN TẠI");
    if (existingEmail) throw new ConflictError("EMAIL ĐÃ TỒN TẠI");
  }

  async validateForUpdate(id, data) {
    const { username, phone, email } = data;

    const [existingUsername, existingPhone, existingEmail] = await Promise.all([
      AccountDAO.findByUsername(username),
      AccountDAO.findByPhone(phone),
      AccountDAO.findByEmail(email),
    ]);

    if (existingUsername && Number(existingUsername.account_id) !== Number(id))
      throw new ConflictError("TÀI KHOẢN ĐÃ TỒN TẠI");
    if (existingPhone && Number(existingPhone.account_id) !== Number(id))
      throw new ConflictError("SỐ ĐIỆN THOẠI ĐÃ TỒN TẠI");
    if (existingEmail && Number(existingEmail.account_id) !== Number(id))
      throw new ConflictError("EMAIL ĐÃ TỒN TẠI");
  }

  async createAccount(data) {
    await this.validateForCreate(data);

    return await AccountDAO.create(data);
  }

  async updateAccount(id, data) {
    const oldData = await this.getAccountById(id);

    const isChanged = Object.keys(data).some((key) => {
      if (!(key in oldData)) return false;

      return data[key] !== oldData[key];
    });
    if (!isChanged) throw new ConflictError("DỮ LIỆU KHÔNG CÓ GÌ THAY ĐỔI");

    await this.validateForUpdate(id, data);

    return await AccountDAO.update(id, data);
  }

  async deleteAccount(id) {
    await this.getAccountById(id);

    await AccountDAO.delete(id);
  }
}

module.exports = new AccountBUS();
