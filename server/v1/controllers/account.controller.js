const AccountBUS = require("../services/account.service");
const { BadRequestError } = require("../utils/errors");
const responseHandler = require("../utils/responseHandler");

const getAllAccounts = async (req, res, next) => {
  try {
    const result = await AccountBUS.getAllAccounts();

    const mappedResult = result.map((x) => x.toJSON?.() ?? x);

    responseHandler(res, 200, "DANH SÁCH", mappedResult);
  } catch (error) {
    next(error);
  }
};

const getAccountById = async (req, res, next) => {
  const { id } = req.params;
  if (!id) throw new BadRequestError("VUI LÒNG CUNG CẤP ĐẦY ĐỦ THÔNG TIN");

  try {
    const result = await AccountBUS.getAccountById(id);

    const mappedResult = result.toJSON?.() ?? result;

    responseHandler(res, 200, "THÔNG TIN ", mappedResult);
  } catch (error) {
    next(error);
  }
};

const createAccount = async (req, res, next) => {
  const { username, phone, email, password } = req.body;
  if (!username.trim() || !phone.trim() || !email.trim() || !password.trim())
    throw new BadRequestError("VUI LÒNG NHẬP ĐẦY ĐỦ THÔNG TIN");

  try {
    const result = await AccountBUS.createAccount(req.body);
    responseHandler(res, 201, "THÊM THÀNH CÔNG", result);
  } catch (error) {
    next(error);
  }
};

const updateAccount = async (req, res, next) => {
  const { username, phone, email, password } = req.body;
  if (!username.trim() || !phone.trim() || !email.trim() || !password.trim())
    throw new BadRequestError("VUI LÒNG NHẬP ĐẦY ĐỦ THÔNG TIN");

  try {
    const result = await AccountBUS.updateAccount(req.body);
    responseHandler(res, 200, "CẬP NHẬT THÀNH CÔNG", result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllAccounts,
  getAccountById,
  createAccount,
  updateAccount,
};
