class Category {
  constructor({
    category_id,
    category_name,
    category_slug,
    description,
    image_url,
  }) {
    this.category_id = category_id;
    this.category_name = category_name;
    this.category_slug = category_slug;
    this.description = description;
    this.image_url = image_url;
  }
}

module.exports = Category;
