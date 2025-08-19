class AccountDTO {
  constructor({
    account_id,
    role_id,
    username,
    password,
    phone,
    email,
    verify_email,
    verify_otp,
    expired_otp,
    refresh_token,
    status,
    createdAt,
    updatedAt,
    customer = [],
    personnel = [],
  }) {
    this.account_id = account_id;
    this.role_id = role_id;
    this.username = username;
    this.password = password;
    this.phone = phone;
    this.email = email;
    this.verify_email = verify_email;
    this.verify_otp = verify_otp;
    this.expired_otp = expired_otp;
    this.refresh_token = refresh_token;
    this.status = status;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.customer = customer;
    this.personnel = personnel;
  }

  toJSON() {
    return {
      id: this.account_id,
      roleId: this.role_id,
      username,
      password,
      phone,
      email,
      verifyEmail: this.verify_email,
      verifyOtp: this.verify_otp,
      expiredOtp: this.expired_otp,
      refreshToken: this.refresh_token,
      status,
      createdAt,
      updatedAt,
      customer,
      personnel,
    };
  }
}

module.exports = AccountDTO;
