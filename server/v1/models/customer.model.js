class PersonnelDTO {
  constructor({
    personnel_id,
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
    this.personnel_id = personnel_id;
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
      fullname: this.fullname,
      gender: this.gender,
      birthday: this.birthday,
      points: this.points,
      address: this.address,
      avatar: this.avatar,
      status: this.status,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}

module.exports = PersonnelDTO;
