const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const CategoryDTO = require("../models/category.model");

class CategoryDAO {
  async findAllCategories(data) {
    const { page = 1, limit = 10, status, keyword } = data;

    const skip = (page - 1) * limit;

    const where = {
      ...(status !== undefined && { status }),
      ...(keyword && {
        OR: [
          { category_name: { contains: keyword } },
          { category_slug: { contains: keyword } },
        ],
      }),
    };

    const [total, result] = await Promise.all([
      prisma.category.count({ where }),
      prisma.category.findMany({
        where,
        skip,
        take: limit,
        orderBy: { status: "desc" },
      }),
    ]);

    return {
      data: result.map((x) => new CategoryDTO(x)),
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async findActiveCategories(status = 1) {
    const result = await prisma.category.findMany({
      where: { status },
    });
    return result.map((c) => new CategoryDTO(c));
  }

  async findAvailableCategories() {
    const result = await prisma.category.findMany({
      where: { status: { not: -1 } },
    });
    return result.map((c) => new CategoryDTO(c));
  }

  async findCategoryByStatus(status = 1) {
    const result = await prisma.category.findMany({
      where: { status },
    });
    return result.map((c) => new CategoryDTO(c));
  }

  async findCategoryById(id) {
    const result = await prisma.category.findUnique({
      where: { category_id: Number(id) },
    });
    return result ? new CategoryDTO(result) : result;
  }

  async findCategoryByName(name) {
    const result = await prisma.category.findUnique({
      where: { category_name: name },
    });
    return result ? new CategoryDTO(result) : result;
  }

  async findCategoryBySlug(slug) {
    const result = await prisma.category.findUnique({
      where: { category_slug: slug },
    });
    return result ? new CategoryDTO(result) : result;
  }

  async create(data) {
    const result = await prisma.category.create({
      data: {
        category_name: data.name,
        category_slug: data.slug,
        description: data.description || null,
        image_url: data.imageUrl || null,
        status: Number(data.status) ?? 1,
      },
    });
    return new CategoryDTO(result);
  }

  async update(id, data) {
    const result = await prisma.category.update({
      where: { category_id: Number(id) },
      data: {
        category_name: data.name,
        category_slug: data.slug,
        description: data.description || null,
        image_url: data.imageUrl || null,
        status: Number(data.status),
      },
    });
    return new CategoryDTO(result);
  }

  async softDeleteCategory(id) {
    const result = await prisma.category.update({
      where: { category_id: Number(id) },
      data: { status: -1 },
    });
    return new CategoryDTO(result);
  }

  async hardDeleteCategory(id) {
    const result = await prisma.category.delete({
      where: { category_id: Number(id) },
    });
    return new CategoryDTO(result);
  }
}
module.exports = new CategoryDAO();
