const ProductBUS = require("./product.service");
const ColorBUS = require("./color.service");
const SizeBUS = require("./size.service");
const ProductVariantDAO = require("../repositories/productVariant.repository");
const {
  BadRequestError,
  ConflictError,
  NotFoundError,
} = require("../utils/errors");

class ProductVariantBUS {
  async getById(id) {
    const result = await ProductVariantDAO.findById(id);
    if (!result) throw new NotFoundError("BIẾN THỂ KHÔNG TỒN TẠI");

    return result.toJSON?.() ?? result;
  }

  async validateForCreate(data) {
    const { sku, avgCost, priceSell, priceOriginal, isDefault } = data;

    const existingBySku = await ProductVariantDAO.findBySku(sku);
    if (existingBySku) throw new ConflictError("SKU ĐÃ TỒN TẠI");
  }

  async validateForUpdate(id, data) {
    const { sku, avgCost, priceSell, priceOriginal, isDefault } = data;

    const existingBySku = await ProductVariantDAO.findBySku(sku);
    if (existingBySku && Number(existingBySku?.variant_id) !== Number(id))
      throw new ConflictError("SKU ĐÃ TỒN TẠI");
  }

  async checkExistProductVariant(data) {
    const { productId, colorId, sizeId } = data;
    const result = await ProductVariantDAO.findByProductAndColorAndSize(
      productId,
      colorId,
      sizeId
    );
    if (result) throw new ConflictError("BIẾN THỂ ĐÃ TỒN TẠI");
    return true;
  }

  async createProductVariant(data) {
    const { productId, colorId, sizeId } = data;
    await ProductBUS.getProductById(productId);
    await ColorBUS.getColorById(colorId);
    await SizeBUS.getSizeById(sizeId);

    await this.checkExistProductVariant(data);

    await this.validateForCreate(data);

    const result = await ProductVariantDAO.create(data);

    if (!result || result.length === 0)
      throw new BadRequestError("THAO TÁC KHÔNG THÀNH CÔNG, VUI LÒNG THỬ LẠI");

    return result.toJSON?.() ?? result;
  }

  async updateProductVariant(id, data) {
    const { productId, colorId, sizeId } = data;
    await this.getById(id);

    await ProductBUS.getProductById(productId);
    await ColorBUS.getColorById(colorId);
    await SizeBUS.getSizeById(sizeId);

    await this.checkExistProductVariant(data);

    await this.validateForCreate(data);

    const result = await ProductVariantDAO.create(data);

    if (!result || result.length === 0)
      throw new BadRequestError("THAO TÁC KHÔNG THÀNH CÔNG, VUI LÒNG THỬ LẠI");

    return result.toJSON?.() ?? result;
  }
}

module.exports = new ProductVariantBUS();
