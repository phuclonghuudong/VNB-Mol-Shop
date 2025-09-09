const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const AttributeValueDTO = require("../models/attributeValue.model");

class AttributeValueDAO {
  async findAllAttributeValue() {
    const result = await prisma.attributeValue.findMany();
    return result.map((x) => new AttributeValueDTO(x));
  }

  async findActiveAttributeValue() {
    const result = await prisma.attributeValue.findMany({
      where: {
        status: 1,
      },
    });
    return result.map((x) => new AttributeValueDTO(x));
  }

  async findActiveAttributeValue() {
    const result = await prisma.attributeValue.findMany({
      where: {
        status: { not: -1 },
      },
    });
    return result.map((x) => new AttributeValueDTO(x));
  }

  async findAttributeValueById(value) {
    const result = await prisma.attributeValue.findUnique({
      where: { value_id: value },
    });
    return result ? new AttributeValueDTO(result) : null;
  }

  async create(data) {
    const result = await prisma.attributeValue.create({
      data: {
        attribute_id: Number(data.attributeId),
        value: data.value,
        display_order: Number(data.displayOrder),
        status: Number(data.status) ?? 1,
      },
    });
    return new AttributeValueDTO(result);
  }

  async update(id, data) {
    const result = await prisma.attributeValue.update({
      where: { value_id: Number(id) },
      data: {
        attribute_id: Number(data.attributeId),
        value: data.value,
        display_order: Number(data.displayOrder),
        status: Number(data.status) ?? 1,
      },
    });
    return new AttributeValueDTO(result);
  }

  async softDeleteAttributeValue(id) {
    const result = await prisma.attributeValue.update({
      where: { value_id: Number(id) },
      data: { status: -1 },
    });
    return new AttributeValueDTO(result);
  }

  async hardDeleteAttributeValue(id) {
    const result = await prisma.attributeValue.delete({
      where: { value_id: Number(id) },
    });
    return new AttributeValueDTO(result);
  }
}

module.exports = new AttributeValueDAO();
