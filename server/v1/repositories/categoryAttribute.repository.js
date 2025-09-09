const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const CategoryAttributeDTO = require("../models/categoryAttribute.model");

class CategoryAttributeDAO {
  async findAllCategoryAndAttributes() {
    const result = await prisma.categoryAttribute.findMany();
    return result.map((x) => new CategoryAttributeDTO(x));
  }

  async findByCategoryAndAttributes(a, b) {
    const result = await prisma.categoryAttribute.findFirst({
      where: {
        category_id: Number(a),
        attribute_id: Number(b),
      },
    });
    return result ? new CategoryAttributeDTO(result) : null;
  }

  async findActiveCategoryAttributes(status = 1) {
    const result = await prisma.categoryAttribute.findMany({
      where: { status },
    });
    return result.map((x) => new CategoryAttributeDTO(x));
  }

  async findAvailableCategoryAttributes() {
    const result = await prisma.categoryAttribute.findMany({
      where: { status: { not: -1 } },
    });
    return result.map((x) => new CategoryAttributeDTO(x));
  }

  async findCategoryAttributeById(id) {
    const result = await prisma.categoryAttribute.findUnique({
      where: { id: Number(id) },
    });
    return result ? new CategoryAttributeDTO(result) : null;
  }

  async create(data) {
    const result = await prisma.categoryAttribute.create({
      data: {
        category_id: Number(data.categoryId),
        attribute_id: Number(data.attributeId),
        description: data.description,
        status: Number(data.status) ?? 1,
      },
    });
    return new CategoryAttributeDTO(result);
  }

  async update(id, data) {
    const result = await prisma.categoryAttribute.update({
      where: { id: Number(id) },
      data: {
        category_id: Number(data.categoryId),
        attribute_id: Number(data.attributeId),
        description: data.description,
        status: Number(data.status),
      },
    });
    return new CategoryAttributeDTO(result);
  }

  async updateStatus(id, data) {
    const result = await prisma.categoryAttribute.update({
      where: { id: Number(id) },
      data: {
        status: Number(data.status),
      },
    });
    return new CategoryAttributeDTO(result);
  }

  async softDeleteCategoryAttribute(id) {
    const result = await prisma.categoryAttribute.update({
      where: { id: Number(id) },
      data: { status: -1 },
    });
    return new CategoryAttributeDTO(result);
  }

  async hardDeleteCategoryAttribute(id) {
    const result = await prisma.categoryAttribute.delete({
      where: { id: Number(id) },
    });
    return new CategoryAttributeDTO(result);
  }
}

module.exports = new CategoryAttributeDAO();
