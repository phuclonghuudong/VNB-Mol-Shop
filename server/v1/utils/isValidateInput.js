const bcrypt = require("bcryptjs");
const saltRounds = 10;

const validEmailInput = async (value) => {
  const reg = /^(\w+([.]\w+)*@\w+([.]\w+)*\.\w+([.]\w+)*)$/;
  const isCheckEmail = reg.test(value);
  return isCheckEmail;
};

const validPhoneInput = (value) => {
  const reg = /^(0|\+84)(\d{9})$/;
  return reg.test(value.trim());
};

const hashPassword = async (password) => {
  const hashPass = await bcrypt.hash(password, saltRounds);
  return hashPass;
};

const comparePassword = async (txtPassword, password) => {
  const pass = await bcrypt.compare(txtPassword, password);
  return pass;
};

module.exports = {
  validEmailInput,
  validPhoneInput,
  hashPassword,
  comparePassword,
};
