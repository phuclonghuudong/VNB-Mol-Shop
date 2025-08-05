const CategoryBUS = require("../services/category.service");
const { NotFoundError } = require("../utils/errors");
const responseHandler = require("../utils/responseHandler"); // nếu bạn có custom handler

const getAllCategory = async (req, res, next) => {
  try {
    const result = await CategoryBUS.getAllCategories();

    if (!result || result.length === 0) {
      throw new NotFoundError("KHÔNG TÌM THẤY LOẠI SẢN PHẨM");
    }

    const mappedResult = result.map((c) => c.toJSON?.() ?? c);

    responseHandler(res, 200, "DANH SÁCH LOẠI SẢN PHẨM", mappedResult);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllCategory,
};
