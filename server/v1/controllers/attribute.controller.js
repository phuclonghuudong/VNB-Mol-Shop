const AttributeBUS = require("../services/attribute.service");
const { BadRequestError } = require("../utils/errors");
const responseHandler = require("../utils/responseHandler");

const getAllAttribute = async (req, res, next) => {
  try {
    const result = await AttributeBUS.getAllAttribute();
    responseHandler(res, 200, "DANH SÁCH", result);
  } catch (error) {
    next(error);
  }
};

const getAllAttributeActive = async (req, res, next) => {
  try {
    const result = await AttributeBUS.getAllAttributeActive();
    responseHandler(res, 200, "DANH SÁCH", result);
  } catch (error) {
    next(error);
  }
};

const getAttributeById = async (req, res, next) => {
  const id = Number(req.params.id);

  if (!id || isNaN(id)) {
    throw new BadRequestError(
      "ID KHÔNG HỢP LỆ, VUI LÒNG CUNG CẤP ĐẦY ĐỦ THÔNG TIN"
    );
  }
  try {
    const result = await AttributeBUS.getAttributeById(id);
    responseHandler(res, 200, "THÔNG TIN", result);
  } catch (error) {
    next(error);
  }
};

const createAttribute = async (req, res, next) => {
  const { name, slug, type, isCustom, status } = req.body || {};
  if (!slug?.trim() || !name?.trim() || !type?.trim())
    throw new BadRequestError("VUI LÒNG NHẬP ĐẦY ĐỦ THÔNG TIN");
  try {
    const validInput = req.body;
    const result = await AttributeBUS.createAttribute(validInput);

    responseHandler(res, 201, "THÊM THÀNH CÔNG", result);
  } catch (error) {
    next(error);
  }
};

const updateAttribute = async (req, res, next) => {
  const id = Number(req.params.id);
  if (!id || isNaN(id)) {
    throw new BadRequestError(
      "ID KHÔNG HỢP LỆ, VUI LÒNG CUNG CẤP ĐẦY ĐỦ THÔNG TIN"
    );
  }

  const { name, slug, type, isCustom, status } = req.body || {};
  if (!slug?.trim() || !name?.trim() || !type?.trim())
    throw new BadRequestError("VUI LÒNG NHẬP ĐẦY ĐỦ THÔNG TIN");
  try {
    const validInput = req.body;
    const result = await AttributeBUS.updateAttribute(id, validInput);

    responseHandler(res, 201, "THÊM THÀNH CÔNG", result);
  } catch (error) {
    next(error);
  }
};

const softDeleteAttribute = async (req, res, next) => {
  const id = Number(req.params.id);
  if (id <= 0 || isNaN(id)) {
    throw new BadRequestError(
      "ID KHÔNG HỢP LỆ, VUI LÒNG CUNG CẤP ĐẦY ĐỦ THÔNG TIN"
    );
  }

  try {
    const result = await AttributeBUS.softDeleteAttribute(id);
    responseHandler(res, 200, "XÓA DỮ LIỆU THÀNH CÔNG");
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllAttribute,
  getAllAttributeActive,
  getAttributeById,
  createAttribute,
  updateAttribute,
  softDeleteAttribute,
};
