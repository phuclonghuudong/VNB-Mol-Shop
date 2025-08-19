class ContactDTO {
  constructor({
    contact_id,
    personnel_id,
    customer_id,
    fullname,
    email,
    phone,
    subject,
    message,
    contact_type,
    response,
    response_at,
    is_featured,
    status,
    createdAt,
    updatedAt,
  }) {
    this.contact_id = contact_id;
    this.personnel_id = personnel_id;
    this.customer_id = customer_id;
    this.fullname = fullname;
    this.email = email;
    this.phone = phone;
    this.subject = subject;
    this.message = message;
    this.contact_type = contact_type;
    this.response = response;
    this.response_at = response_at;
    this.is_featured = is_featured;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  toJSON() {
    return {
      id: this.contact_id,
      personnelId: this.personnel_id,
      customerId: this.customer_id,
      fullname,
      email,
      phone,
      subject,
      message,
      contactType: this.contact_type,
      response,
      responseAt: this.response_at,
      isFeatured: this.is_featured,
      status,
      createdAt,
      updatedAt,
    };
  }
}

module.exports = ContactDTO;
