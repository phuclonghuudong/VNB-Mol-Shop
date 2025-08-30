const express = require("express");
const router = express.Router();

const authenticate = require("../middlewares/authenticate");
const authorizeRole = require("../middlewares/authorizeRole");

const {
  getAllCategorySize,
  getAllCategorySizeActive,
  getCategorySizeById,
  createCategorySize,
  updateCategorySize,
  softDeleteCategorySize,
} = require("../controllers/categorySize.controller");

// const PATH = "/catalog-control/category-size";

const roleManagement = ["ADMIN", "PERSONNEL"];

router.get(`/`, getAllCategorySize);
router.get(`/active`, getAllCategorySizeActive);
router.get(`/:id`, getCategorySizeById);
router.post(
  `/`,
  authenticate,
  authorizeRole(...roleManagement),
  createCategorySize
);
router.put(
  `/:id`,
  authenticate,
  authorizeRole(...roleManagement),
  updateCategorySize
);
router.patch(
  `/delete/:id`,
  authenticate,
  authorizeRole(...roleManagement),
  softDeleteCategorySize
);

module.exports = router;
