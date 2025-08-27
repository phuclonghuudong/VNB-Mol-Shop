const ProductVariantDTO = require("../models/productVariant.model");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class ProductVariantDAO {
  async findById(id) {
    const res = await prisma.productVariant.findUnique({
      where: { variant_id: Number(id) },
    });

    return res ? new ProductVariantDTO(res) : null;
  }

  async findByProductId(id) {
    const res = await prisma.productVariant.findUnique({
      where: { product_id: Number(id) },
    });

    return res ? new ProductVariantDTO(res) : null;
  }

  async findByColorId(id) {
    const res = await prisma.productVariant.findUnique({
      where: { color_id: Number(id) },
    });

    return res ? new ProductVariantDTO(res) : null;
  }

  async findBySizeId(id) {
    const res = await prisma.productVariant.findUnique({
      where: { size_id: Number(id) },
    });

    return res ? new ProductVariantDTO(res) : null;
  }

  async findBySku(value) {
    const res = await prisma.productVariant.findUnique({
      where: { sku: value },
    });

    return res ? new ProductVariantDTO(res) : null;
  }

  async findByProductAndColorAndSize(product, color, size) {
    const res = await prisma.productVariant.findFirst({
      where: {
        product_id: Number(product),
        size_id: Number(size),
        color_id: Number(color),
      },
    });
    return res ? new ProductVariantDTO(res) : null;
  }

  async create(data) {
    const res = await prisma.productVariant.create({
      data: {
        product_id: Number(data.productId),
        size_id: Number(data.sizeId),
        color_id: Number(data.colorId),
        sku: data.sku,
        description: data.description,
        avg_cost: data.avgCost,
        price_sell: data.priceSell,
        price_original: data.priceOriginal,
        is_default: data.isDefault,
        status: Number(data.status),
      },
    });
    return res ? new ProductVariantDTO(res) : null;
  }

  async update(id, data) {
    const res = await prisma.productVariant.update({
      where: { variant_id: Number(id) },
      data: {
        product_id: Number(data.productId),
        size_id: Number(data.sizeId),
        color_id: Number(data.colorId),
        sku: data.sku,
        description: data.description || null,
        avg_cost: !Number.isInteger(data.avgCost),
        price_sell: !Number.isInteger(data.priceSell),
        price_original: !Number.isInteger(data.priceOriginal),
        is_default: data.isDefault,
        status: Number(data.status),
      },
    });
    return res ? new ProductVariantDTO(res) : null;
  }
}

module.exports = new ProductVariantDAO();
