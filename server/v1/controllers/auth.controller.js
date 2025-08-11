const { BadRequestError } = require("../utils/errors");
const AuthBUS = require("../services/auth.service");
const responseHandler = require("../utils/responseHandler");
const { generateAndSetToken } = require("../utils/generateToken");

const payloadToken = async (data) => {
  const payload = {
    account: data?.accountId,
    customer: data?.customerId,
    role: data?.roleId,
    username: data?.username,
  };
  return payload;
};

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
    const valueInput = req.body;
    const result = await AuthBUS.signUpCustomer(valueInput);

    const payload = await payloadToken(result);

    const { accessToken } = await generateAndSetToken(res, payload);

    responseHandler(res, 200, "ĐĂNG KÝ NGƯỜI DÙNG THÀNH CÔNG", {
      USER: result,
      TOKEN: accessToken,
    });
  } catch (error) {
    next(error);
  }
};

const signInCustomer = async (req, res, next) => {
  const { username, password } = req.body;
  if (!username.trim() || !password.trim())
    throw new BadRequestError("VUI LÒNG NHẬP ĐẦY ĐỦ THÔNG TIN");

  try {
    const validInput = req.body;
    const result = await AuthBUS.signInCustomer(validInput);

    const payload = await payloadToken(result);

    const { accessToken } = await generateAndSetToken(res, payload);

    responseHandler(res, 200, "ĐĂNG NHẬP THÀNH CÔNG", {
      USER: result,
      TOKEN: accessToken,
    });
  } catch (error) {
    next(error);
  }
};

const verifyEmailForgotPasswordCustomer = async (req, res, next) => {
  const { email } = req.body;
  if (!email) throw new BadRequestError("VUI LÒNG NHẬP ĐẦY ĐỦ THÔNG TIN");

  try {
    const result = await AuthBUS.verifyEmailForgotPasswordCustomer(email);

    responseHandler(res, 200, "VUI LÒNG XEM HỘP THƯ CỦA BẠN");
  } catch (error) {
    next(error);
  }
};
module.exports = {
  signUpCustomer,
  signInCustomer,
  verifyEmailForgotPasswordCustomer,
};
