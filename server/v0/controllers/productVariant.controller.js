const ProductVariantBUS = require("../services/productVariant.service");
const { BadRequestError } = require("../utils/errors");
const responseHandler = require("../utils/responseHandler");

const createProductVariant = async (req, res, next) => {
  const {
    productId,
    sizeId,
    colorId,
    sku,
    description,
    avgCost,
    priceSell,
    priceOriginal,
    isDefault,
    status,
  } = req.body;

  if (
    !productId?.trim() ||
    !sizeId?.trim() ||
    !colorId?.trim() ||
    !sku?.trim() ||
    !avgCost?.trim() ||
    !priceSell?.trim() ||
    !priceOriginal?.trim()
  ) {
    throw new BadRequestError("VUI LÒNG NHẬP ĐẦY ĐỦ THÔNG TIN");
  }

  try {
    const result = await ProductVariantBUS.createProductVariant(req.body);
    responseHandler(res, 201, "THÊM THÀNH CÔNG", result);
  } catch (error) {
    next(error);
  }
};

const updateProductVariant = async (req, res, next) => {
  const { id } = req.params;
  if (!id) throw new BadRequestError("VUI LÒNG CUNG CẤP ĐẦY ĐỦ THÔNG TIN");
  const {
    productId,
    sizeId,
    colorId,
    sku,
    description,
    avgCost,
    priceSell,
    priceOriginal,
    isDefault,
    status,
  } = req.body;
  if (
    !productId?.trim() ||
    !sizeId?.trim() ||
    !colorId?.trim() ||
    !sku?.trim() ||
    !avgCost?.trim() ||
    !priceSell?.trim() ||
    !priceOriginal?.trim()
  ) {
    throw new BadRequestError("VUI LÒNG NHẬP ĐẦY ĐỦ THÔNG TIN");
  }

  try {
    const result = await ProductVariantBUS.updateProductVariant(id, req.body);
    responseHandler(res, 200, "CẬP NHẬT THÀNH CÔNG", result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createProductVariant,
  updateProductVariant,
};
