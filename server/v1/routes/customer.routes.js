const express = require("express");
const router = express.Router();

const authenticate = require("../middlewares/authenticate");
const authorizeRole = require("../middlewares/authorizeRole");

const {
  getAllAddress,
  getAllAddressActive,
  getAddressById,
  createAddress,
  updateAddress,
  softDeleteAddress,
} = require("../controllers/address.controller");

// const PATH = "/customer";

const roleManagement = ["CUSTOMER"];

router.get(`/`, getAllBrand);
router.get(`/active`, getAllBrandActive);
router.get(`/slug/:slug`, getBrandBySlug);
router.get(`/:id`, getBrandById);
router.post(`/`, authenticate, authorizeRole(...roleManagement), createBrand);
router.put(`/:id`, authenticate, authorizeRole(...roleManagement), updateBrand);
router.patch(
  `/delete/:id`,
  authenticate,
  authorizeRole(...roleManagement),
  softDeleteBrand
);

module.exports = router;
