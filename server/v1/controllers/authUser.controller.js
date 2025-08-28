const { LoginUser } = require("../services/authUser.service");
const { BadRequestError } = require("../utils/errors");
const responseHandler = require("../utils/responseHandler");
const { generateAndSetToken } = require("../utils/token.util");

const payloadToken = async (data) => {
  const payload = {
    account: data?.accountId,
    user: data?.customerId,
    role: data?.role,
    username: data?.username,
    fullname: data?.fullname,
  };
  return payload;
};

const RegisterCustomer = async (req, res, next) => {
  const { fullname, username, email, phone, password, confirmPassword } =
    req.body || {};
  if (
    !fullname?.trim() ||
    !username?.trim() ||
    !email?.trim() ||
    !phone?.trim() ||
    !password?.trim() ||
    !confirmPassword?.trim()
  )
    throw new BadRequestError("VUI LÒNG NHẬP ĐẦY ĐỦ THÔNG TIN");

  try {
  } catch (error) {
    next(error);
  }
};

const LogInUser = async (req, res, next) => {
  const { username, password } = req.body || {};
  if (!username?.trim() || !password?.trim())
    throw new BadRequestError("VUI LÒNG NHẬP ĐẦY ĐỦ THÔNG TIN");

  try {
    const validInput = req.boy;
    const result = await LoginUser(validInput);

    const payload = await payloadToken(result);

    const { accessToken, refreshToken } = await generateAndSetToken(
      res,
      payload
    );

    responseHandler(res, 200, "ĐĂNG NHẬP THÀNH CÔNG", {});
  } catch (error) {
    next(error);
  }
};

module.exports = {
  RegisterCustomer,
  LogInUser,
};
