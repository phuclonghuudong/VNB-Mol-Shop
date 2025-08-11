const AccountBUS = require("../services/account.service");
const CustomerBUS = require("../services/customer.service");

class AuthBUS {
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
    const {
      password,
      verifyEmail,
      verifyOtp,
      expiredOtp,
      refreshToken,
      createdAt,
      updatedAt,
      ...accountSafe
    } = createAccount;

    const {
      createdAt: cCreatedAt,
      updatedAt: cUpdatedAt,
      id,
      ...customerSafe
    } = createCustomer;

    return {
      account: accountSafe,
      customer: customerSafe,
    };
  }
}

module.exports = new AuthBUS();
