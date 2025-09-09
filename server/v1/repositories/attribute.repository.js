const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const AttributeDTO = require("../models/attribute.model");

class AttributeDAO {
  async findAllAttributes() {
    const result = await prisma.attribute.findMany();
    return result.map((x) => new AttributeDTO(x));
  }

  async findActiveAttributes(status = 1) {
    const result = await prisma.attribute.findMany({
      where: { status },
    });
    return result.map((x) => new AttributeDTO(x));
  }

  async findAvailableAttributes() {
    const result = await prisma.attribute.findMany({
      where: { status: { not: -1 } },
    });
    return result.map((x) => new AttributeDTO(x));
  }

  async findAttributeById(id) {
    const result = await prisma.attribute.findUnique({
      where: { attribute_id: Number(id) },
    });
    return result ? new AttributeDTO(result) : null;
  }

  async findAttributeByName(value) {
    const result = await prisma.attribute.findUnique({
      where: { attribute_name: value },
    });
    return result ? new AttributeDTO(result) : null;
  }

  async findAttributeBySlug(value) {
    const result = await prisma.attribute.findUnique({
      where: { attribute_slug: value },
    });
    return result ? new AttributeDTO(result) : null;
  }

  async findAttributeByStatus(value) {
    const result = await prisma.attribute.findMany({
      where: { status: Number(value) },
    });
    return result.map((x) => new AttributeDTO(x));
  }

  async create(data) {
    const result = await prisma.attribute.create({
      data: {
        attribute_name: data.name,
        attribute_slug: data.slug,
        attribute_type: data.type,
        is_custom: data.isCustom || false,
        status: Number(data.status) || 1,
      },
    });
    return new AttributeDTO(result);
  }

  async update(id, data) {
    const result = await prisma.attribute.update({
      where: { attribute_id: Number(id) },
      data: {
        attribute_name: data.name,
        attribute_slug: data.slug,
        attribute_type: data.type,
        is_custom: Number(data.isCustom),
        status: Number(data.status),
      },
    });
    return new AttributeDTO(result);
  }

  async softDeleteAttribute(id) {
    const result = await prisma.attribute.update({
      where: { attribute_id: Number(id) },
      data: { status: -1 },
    });
    return new AttributeDTO(result);
  }

  async hardDeleteAttribute(id) {
    const result = await prisma.attribute.delete({
      where: { attribute_id: Number(id) },
    });
    return new AttributeDTO(result);
  }
}

module.exports = new AttributeDAO();
