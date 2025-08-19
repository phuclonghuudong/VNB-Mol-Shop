class CategoryDTO {
  constructor({
    category_id,
    category_name,
    category_slug,
    description,
    image_url,
    status,
    createdAt,
    updatedAt,
    attributes = [],
  }) {
    this.category_id = category_id;
    this.category_name = category_name;
    this.category_slug = category_slug;
    this.description = description;
    this.image_url = image_url;
    this.status = status;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.attributes = attributes;
  }

  toJSON() {
    return {
      id: this.category_id,
      name: this.category_name,
      slug: this.category_slug,
      description,
      imageUrl: this.image_url,
      status,
      createdAt,
      updatedAt,
      attributes,
    };
  }
}

module.exports = CategoryDTO;
