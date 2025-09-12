const CategoryProductBUS = require("../services/categoryProduct.service");
const { BadRequestError } = require("../utils/errors");
const responseHandler = require("../utils/responseHandler");

const getAllCategoryProduct = async (req, res, next) => {
  const { page = 1, limit = 10, keyword = "", status } = req.query || {};

  const pageNumber = parseInt(page) || 1;
  const limitNumber = parseInt(limit) || 10;
  const statusNumber = req.query.status ? parseInt(status) : undefined;

  try {
    const payload = {
      page: pageNumber,
      limit: limitNumber,
      status: statusNumber,
      keyword,
    };
    const result = await CategoryProductBUS.getAllCategoryProduct(payload);
    responseHandler(res, 200, "DANH SÁCH", result);
  } catch (error) {
    next(error);
  }
};

const getAllCategoryProductActive = async (req, res, next) => {
  try {
    const result = await CategoryProductBUS.getAllCategoryProductActive();
    responseHandler(res, 200, "DANH SÁCH", result);
  } catch (error) {
    next(error);
  }
};

const getCategoryProductById = async (req, res, next) => {
  const id = Number(req.params.id);

  if (!id || isNaN(id)) {
    throw new BadRequestError(
      "ID KHÔNG HỢP LỆ, VUI LÒNG CUNG CẤP ĐẦY ĐỦ THÔNG TIN"
    );
  }

  try {
    const result = await CategoryProductBUS.getCategoryProductById(id);
    responseHandler(res, 200, "DANH SÁCH", result);
  } catch (error) {
    next(error);
  }
};

const getCategoryProductBySlug = async (req, res, next) => {
  const slug = req.params.slug;

  if (!slug) {
    throw new BadRequestError(
      "ĐỊNH DANH KHÔNG HỢP LỆ, VUI LÒNG CUNG CẤP ĐẦY ĐỦ THÔNG TIN"
    );
  }

  try {
    const result = await CategoryProductBUS.getCategoryProductBySlug(slug);
    responseHandler(res, 200, "DANH SÁCH", result);
  } catch (error) {
    next(error);
  }
};

const createCategoryProduct = async (req, res, next) => {
  const { slug, name, description, imageUrl, status, categoryId } =
    req.body || {};
  if (!slug?.trim() || !name?.trim() || !categoryId)
    throw new BadRequestError("VUI LÒNG NHẬP ĐẦY ĐỦ THÔNG TIN");
  try {
    const validInput = req.body;
    const result = await CategoryProductBUS.createCategoryProduct(validInput);

    responseHandler(res, 201, "THÊM THÀNH CÔNG", result);
  } catch (error) {
    next(error);
  }
};

const updateCategoryProduct = async (req, res, next) => {
  const { slug, name, description, imageUrl, status, categoryId } =
    req.body || {};
  const id = Number(req.params.id);

  if (id <= 0 || isNaN(id)) {
    throw new BadRequestError(
      "ID KHÔNG HỢP LỆ, VUI LÒNG CUNG CẤP ĐẦY ĐỦ THÔNG TIN"
    );
  }
  if (!slug?.trim() || !name?.trim() || !categoryId)
    throw new BadRequestError("VUI LÒNG NHẬP ĐẦY ĐỦ THÔNG TIN");

  try {
    const validInput = req.body;
    const result = await CategoryProductBUS.updateCategoryProduct(
      id,
      validInput
    );

    responseHandler(res, 200, "CẬP NHẬT THÀNH CÔNG", result);
  } catch (error) {
    next(error);
  }
};

const softDeleteCategoryProduct = async (req, res, next) => {
  const id = Number(req.params.id);

  if (id <= 0 || isNaN(id)) {
    throw new BadRequestError(
      "ID KHÔNG HỢP LỆ, VUI LÒNG CUNG CẤP ĐẦY ĐỦ THÔNG TIN"
    );
  }

  try {
    const result = await CategoryProductBUS.softDeleteCategoryProduct(id);

    responseHandler(res, 200, "XÓA DỮ LIỆU THÀNH CÔNG");
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllCategoryProduct,
  getAllCategoryProductActive,
  getCategoryProductById,
  getCategoryProductBySlug,
  createCategoryProduct,
  updateCategoryProduct,
  softDeleteCategoryProduct,
};
