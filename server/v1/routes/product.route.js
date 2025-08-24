const express = require("express");
const router = express.Router();
const {
  getAllProduct,
  getAllProductActive,
  getProductById,
  getProductBySlug,
  getProductBySku,
  createProduct,
  updateProduct,
} = require("../controllers/product.controller");

// const PATH = "/product";

router.get(`/all`, getAllProduct);
router.get(`/active`, getAllProductActive);
router.get(`/:id`, getProductById);
router.get(`/slug/:slug`, getProductBySlug);
router.get(`/sku/:sku`, getProductBySku);
router.post(`/`, createProduct);
router.put(`/:id`, updateProduct);

module.exports = router;
