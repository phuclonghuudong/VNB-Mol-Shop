class CustomerDTO {
  constructor({
    customer_id,
    account_id,
    fullname,
    gender,
    birthday,
    points,
    address,
    avatar,
    status,
    createdAt,
    updatedAt,
  }) {
    this.customer_id = customer_id;
    this.account_id = account_id;
    this.fullname = fullname;
    this.gender = gender;
    this.birthday = birthday;
    this.points = points;
    this.address = address;
    this.avatar = avatar;
    this.status = status;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  toJSON() {
    return {
      id: this.customer_id,
      accountId: this.account_id,
      fullname,
      gender,
      birthday,
      points,
      address,
      avatar,
      status,
      createdAt,
      updatedAt,
    };
  }
}

module.exports = CustomerDTO;
