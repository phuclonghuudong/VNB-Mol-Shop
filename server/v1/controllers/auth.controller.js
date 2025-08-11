const { BadRequestError } = require("../utils/errors");
const AuthBUS = require("../services/auth.service");
const responseHandler = require("../utils/responseHandler");

const signUpCustomer = async (req, res, next) => {
  const { fullname, username, phone, email, password } = req.body;
  if (
    !fullname.trim() ||
    !username.trim() ||
    !phone.trim() ||
    !email.trim() ||
    !password.trim()
  )
    throw new BadRequestError("VUI LÒNG NHẬP ĐẦY ĐỦ THÔNG TIN");

  try {
    const payload = req.body;
    const result = await AuthBUS.signUpCustomer(payload);

    responseHandler(res, 200, "ĐĂNG KÝ NGƯỜI DÙNG THÀNH CÔNG", result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  signUpCustomer,
};
