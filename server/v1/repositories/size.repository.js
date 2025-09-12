const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const SizeDTO = require("../models/size.model");

class SizeDAO {
  async findAllSize(data) {
    const { page = 1, limit = 10, status, keyword } = data;

    const skip = (page - 1) * limit;

    const where = {
      ...(status !== undefined && { status }),
      ...(keyword && {
        OR: [
          { size_name: { contains: keyword } },
          { size_code: { contains: keyword } },
          { size_type: { contains: keyword } },
        ],
      }),
    };

    const [total, result] = await Promise.all([
      prisma.size.count({ where }),
      prisma.size.findMany({
        where,
        skip,
        take: limit,
        orderBy: { status: "desc" },
      }),
    ]);

    return {
      data: result.map((x) => new SizeDTO(x)),
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async findActiveSize(status = 1) {
    const result = await prisma.size.findMany({
      where: { status },
    });
    return result.map((c) => new SizeDTO(c));
  }

  async findAvailableSize() {
    const result = await prisma.size.findMany({
      where: { status: { not: -1 } },
    });
    return result.map((c) => new SizeDTO(c));
  }

  async findSizeByStatus(status = 1) {
    const result = await prisma.size.findMany({
      where: { status },
    });
    return result.map((c) => new SizeDTO(c));
  }

  async findSizeById(id) {
    const result = await prisma.size.findUnique({
      where: { size_id: Number(id) },
    });
    return result ? new SizeDTO(result) : result;
  }

  async findSizeByName(name) {
    const result = await prisma.size.findUnique({
      where: { size_name: name },
    });
    return result ? new SizeDTO(result) : result;
  }

  async findSizeByCode(code) {
    const result = await prisma.size.findUnique({
      where: { size_code: code },
    });
    return result ? new SizeDTO(result) : result;
  }

  async create(data) {
    const result = await prisma.size.create({
      data: {
        size_name: data.name,
        size_code: data.code,
        size_type: data.type,
        display_order: Number(data.displayOrder) ?? 1,
        status: Number(data.status) ?? 1,
      },
    });
    return new SizeDTO(result);
  }

  async update(id, data) {
    const result = await prisma.size.update({
      where: { size_id: Number(id) },
      data: {
        size_name: data.name,
        size_code: data.code,
        size_type: data.type,
        display_order: Number(data.displayOrder),
        status: Number(data.status) ?? 1,
      },
    });
    return new SizeDTO(result);
  }

  async softDeleteSize(id) {
    const result = await prisma.size.update({
      where: { size_id: Number(id) },
      data: { status: -1 },
    });
    return new SizeDTO(result);
  }

  async hardDeleteSize(id) {
    const result = await prisma.size.delete({
      where: { size_id: Number(id) },
    });
    return new SizeDTO(result);
  }
}

module.exports = new SizeDAO();
