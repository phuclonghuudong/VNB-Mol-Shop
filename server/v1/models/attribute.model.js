class AttributeDTO {
  constructor({
    attribute_id,
    attribute_name,
    attribute_slug,
    attribute_type,
    is_custom,
    status,
    createdAt,
    updatedAt,
  }) {
    this.attribute_id = attribute_id;
    this.attribute_name = attribute_name;
    this.attribute_slug = attribute_slug;
    this.attribute_type = attribute_type;
    this.is_custom = is_custom;
    this.status = status;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  toJSON() {
    return {
      id: this.attribute_id,
      name: this.attribute_name,
      slug: this.attribute_slug,
      type: this.attribute_type,
      status: this.status,
      createdAt: this.createdAt,
      updatedAt: this.createdAt,
    };
  }
}

module.exports = AttributeDTO;
