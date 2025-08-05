const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const Category = require("../models/category.model");

class CategoryRepository {
  async findAll() {
    const categories = await prisma.category.findMany();
    return categories.map((x) => new Category(x));
  }

  async findById(id) {
    const category = await prisma.category.findUnique({ where: { id } });
    return category ? new Category(category) : null;
  }

  async create(createData) {
    const newCreate = await prisma.category.create({ data: createData });
    return new Product(newCreate);
  }
}

module.exports = new CategoryRepository();
