const sendEmail = require("../configs/sendMail");
const AccountBUS = require("../services/account.service");
const CustomerBUS = require("../services/customer.service");
const { BadRequestError } = require("../utils/errors");
const generateOtp = require("../utils/generateOtp");
const {
  comparePassword,
  validEmailInput,
} = require("../utils/isValidateInput");
const verifyEmailTemplate = require("../utils/verifyEmailTemplate");

class AuthBUS {
  async customerAccountInformation(account, customer) {
    return {
      customerId: customer.id,
      accountId: account.id,
      roleId: account.roleId,
      username: account.username,
      phone: account.phone,
      email: account.email,
      fullname: customer.fullname,
      status: account.status,
    };
  }

  async signUpCustomer(data) {
    const createAccount = await AccountBUS.createAccount({
      ...data,
      role: "KHACHHANG",
    });

    const createCustomer = await CustomerBUS.createCustomer({
      ...data,
      accountId: createAccount?.id,
      groupId: 1,
    });

    const result = await this.customerAccountInformation(
      createAccount,
      createCustomer
    );

    return result;
  }

  async signInCustomer(data) {
    const { username, password } = data;
    const checkAccount = await AccountBUS.getAccountByIdentifier(username);

    const isValidPassword = await comparePassword(
      password,
      checkAccount.password
    );
    if (!isValidPassword)
      throw new BadRequestError("TÀI KHOẢN HOẶC MẬT KHẨU KHÔNG CHÍNH XÁC");

    const accountId = checkAccount?.id;
    const findCustomer = await CustomerBUS.getCustomerByAccountId(accountId);

    const result = await this.customerAccountInformation(
      checkAccount,
      findCustomer
    );

    return result;
  }

  async verifyEmailForgotPasswordCustomer(email) {
    const isValidEmail = await validEmailInput(email);
    if (!isValidEmail) throw new BadRequestError("EMAIL KHÔNG ĐÚNG ĐỊNH DẠNG");

    const result = await AccountBUS.updateVerifyEmailForgotPassword(email);

    await sendEmail({
      sendTo: email,
      subject: "Forgot password from MolXiPi SHOP",
      html: verifyEmailTemplate({
        name: result?.username,
        otp: result?.verifyOtp,
      }),
    });

    return result;
  }
}

module.exports = new AuthBUS();
