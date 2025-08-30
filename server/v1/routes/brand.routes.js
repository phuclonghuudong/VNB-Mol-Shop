const express = require("express");
const router = express.Router();

const authenticate = require("../middlewares/authenticate");
const authorizeRole = require("../middlewares/authorizeRole");

const {
  getAllBrand,
  getAllBrandActive,
  getBrandById,
  getBrandBySlug,
  createBrand,
  updateBrand,
  softDeleteBrand,
} = require("../controllers/brand.controller");

// const PATH = "/catalog-control/brand";

const roleManagement = ["ADMIN", "PERSONNEL"];

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
