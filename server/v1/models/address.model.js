class AddressDTO {
  constructor({
    address_id,
    customer_id,
    fullname,
    phone,
    address,
    is_main,
    status,
    createdAt,
    updatedAt,
  }) {
    this.address_id = address_id;
    this.customer_id = customer_id;
    this.fullname = fullname;
    this.phone = phone;
    this.address = address;
    this.is_main = is_main;
    this.status = status;
    thí.createdAt = createdAt;
    thí.updatedAt = updatedAt;
  }

  toJSON() {
    return {
      id: this.address_id,
      customerId: this.customer_id,
      fullname,
      phone,
      address,
      isMain: this.is_main,
      status,
      createdAt,
      updatedAt,
    };
  }
}

module.exports = AddressDTO;
