class PermissionDTO {
  constructor({
    permission_id,
    permission_name,
    description,
    status,
    createdAt,
    updatedAt,
  }) {
    this.permission_id = permission_id;
    this.permission_name = permission_name;
    this.description = description;
    this.status = status;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  toJSON() {
    return {
      id: this.permission_id,
      name: this.permission_name,
      status,
      createdAt,
      updatedAt,
    };
  }
}

module.exports = PermissionDTO;
