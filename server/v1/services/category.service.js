const CategoryDAO = require("../repositories/category.repository");
const { NotFoundError, ConflictError } = require("../utils/errors");

class CategoryBUS {
  async getAllCategories() {
    return await CategoryDAO.findAll();
  }

  async getCategoryById(id) {
    const category = await CategoryDAO.findById(id);
    if (!category) throw new NotFoundError("Category not found");

    return category;
  }

  async getCategoryBySlug(slug) {
    const category = await CategoryDAO.findBySlug(slug);
    if (!category) throw new NotFoundError("Category not found");

    return category;
  }

  async createCategory(data) {
    const existingCategory = await CategoryDAO.findBySlug(data.slug);
    if (existingCategory) {
      throw new ConflictError("Category with this slug already exists");
    }

    return await CategoryDAO.create(data);
  }

  async updateCategory(id, data) {
    await this.getCategoryById(id);

    if (data.slug) {
      const existingCategory = await CategoryDAO.findBySlug(data.slug);
      if (existingCategory && existingCategory.category_id !== id) {
        throw new ConflictError("Category with this slug already exists");
      }
    }

    return await CategoryDAO.update(id, data);
  }

  async deleteCategory(id) {
    await this.getCategoryById(id);
    await CategoryDAO.delete(id);
  }
}

module.exports = new CategoryBUS();
