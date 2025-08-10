const { PrismaClient } = require("@prisma/client");
const AccountDTO = require("../models/account.model");
const prisma = new PrismaClient();

class AccountDAO {
  async findAll() {
    const result = await prisma.account.findMany();
    return result.map((x) => new AccountDTO(x));
  }

  async findById(id) {
    const result = await prisma.account.findUnique({
      where: { account_id: id },
    });
    return result ? new AccountDTO(result) : result;
  }

  async findByUsername(value) {
    const result = await prisma.account.findUnique({
      where: { username: value },
    });
    return result ? new AccountDTO(result) : result;
  }

  async findByEmail(value) {
    const result = await prisma.account.findUnique({
      where: { email: value },
    });
    return result ? new AccountDTO(result) : result;
  }

  async findByPhone(value) {
    const result = await prisma.account.findUnique({
      where: { phone: value },
    });
    return result ? new AccountDTO(result) : result;
  }

  async create(data) {
    const result = await prisma.account.create({
      role_id: data.roleId,
      username: data.username,
      password: data.password,
      phone: data.phone,
      email: data.email,
      verify_email: data.verifyEmail || "",
      verify_otp: data.verifyOtp || "",
      expired_otp: data.expiredOtp || "",
      refresh_token: data.refreshToken || "",
      status: data.status,
    });
    return new AccountDTO(result);
  }

  async update(id, data) {
    const result = await prisma.account.create({
      where: { account_id: id },
      data: {
        role_id: data.roleId,
        username: data.username,
        password: data.password,
        phone: data.phone,
        email: data.email,
        verify_email: data.verifyEmail || "",
        verify_otp: data.verifyOtp || "",
        expired_otp: data.expiredOtp || "",
        refresh_token: data.refreshToken || "",
        status: data.status,
      },
    });
    return new AccountDTO(result);
  }

  async delete(id) {
    await prisma.account.delete({
      where: { account_id: id },
    });
  }
}

module.exports = new AccountDAO();
