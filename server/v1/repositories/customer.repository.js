const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const CustomerDTO = require("../models/customer.model");

class CustomerDAO {
  async findAll() {
    const result = await prisma.customer.findMany();
    return result.map((x) => new CustomerDTO(x));
  }

  async findById(id) {
    const result = await prisma.customer.findUnique({
      where: { customer_id: id },
    });
    return result ? new CustomerDTO(result) : null;
  }

  async create(data) {
    const result = await prisma.customer.create({
      fullname: data.fullname,
      gender: data.gender || "",
      birthday: data.birthday || "",
      points: 0,
      address: data.address || "",
      avatar: data.address || "",
      status: data.status || 1,
    });
    return new CustomerDTO(result);
  }

  async update(id, data) {
    const result = await prisma.customer.update({
      where: { customer_id: id },
      data: {
        fullname: data.fullname,
        gender: data.gender || "",
        birthday: data.birthday || "",
        points: 0,
        address: data.address || "",
        avatar: data.address || "",
        status: data.status || 1,
      },
    });
    return new CustomerDTO(result);
  }

  async delete(id) {
    await prisma.customer.delete({
      where: { customer_id: id },
    });
  }
}

module.exports = new CustomerDAO();
