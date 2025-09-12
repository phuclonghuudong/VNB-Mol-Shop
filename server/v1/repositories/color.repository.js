const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const ColorDTO = require("../models/color.model");

class ColorDAO {
  async findAllColors(data) {
    const { page = 1, limit = 10, status, keyword } = data;

    const skip = (page - 1) * limit;

    const where = {
      ...(status !== undefined && { status }),
      ...(keyword && {
        OR: [
          { color_name: { contains: keyword } },
          { color_code: { contains: keyword } },
        ],
      }),
    };

    const [total, result] = await Promise.all([
      prisma.color.count({ where }),
      prisma.color.findMany({
        where,
        skip,
        take: limit,
        orderBy: { status: "desc" },
      }),
    ]);

    return {
      data: result.map((x) => new ColorDTO(x)),
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async findActiveColors(status = 1) {
    const result = await prisma.color.findMany({
      where: { status },
    });
    return result.map((c) => new ColorDTO(c));
  }

  async findAvailableColors() {
    const result = await prisma.color.findMany({
      where: { status: { not: -1 } },
    });
    return result.map((c) => new ColorDTO(c));
  }

  async findColorByStatus(status = 1) {
    const result = await prisma.color.findMany({
      where: { status },
    });
    return result.map((c) => new ColorDTO(c));
  }

  async findColorById(id) {
    const result = await prisma.color.findUnique({
      where: { color_id: Number(id) },
    });
    return result ? new ColorDTO(result) : result;
  }

  async findColorByName(name) {
    const result = await prisma.color.findUnique({
      where: { color_name: name },
    });
    return result ? new ColorDTO(result) : result;
  }

  async findColorByCode(code) {
    const result = await prisma.color.findUnique({
      where: { color_code: code },
    });
    return result ? new ColorDTO(result) : result;
  }

  async create(data) {
    const result = await prisma.color.create({
      data: {
        color_name: data.name,
        color_code: data.code,
        display_order: Number(data.displayOrder),
        status: Number(data.status) ?? 1,
      },
    });
    return new ColorDTO(result);
  }

  async update(id, data) {
    const result = await prisma.color.update({
      where: { color_id: Number(id) },
      data: {
        color_name: data.name,
        color_code: data.code,
        display_order: Number(data.displayOrder) ?? 1,
        status: Number(data.status),
      },
    });
    return new ColorDTO(result);
  }

  async softDeleteColor(id) {
    const result = await prisma.color.update({
      where: { color_id: Number(id) },
      data: { status: -1 },
    });
    return new ColorDTO(result);
  }

  async hardDeleteColor(id) {
    const result = await prisma.color.delete({
      where: { color_id: Number(id) },
    });
    return new ColorDTO(result);
  }
}

module.exports = new ColorDAO();
