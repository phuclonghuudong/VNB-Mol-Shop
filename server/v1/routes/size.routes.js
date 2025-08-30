const express = require("express");
const router = express.Router();

const authenticate = require("../middlewares/authenticate");
const authorizeRole = require("../middlewares/authorizeRole");

const {
  getAllSize,
  getAllSizeActive,
  getSizeByCode,
  getSizeById,
  createSize,
  updateSize,
  softDeleteSize,
} = require("../controllers/size.controller");

// const PATH = "/catalog-control/size";

const roleManagement = ["ADMIN", "PERSONNEL"];

router.get(`/`, getAllSize);
router.get(`/active`, getAllSizeActive);
router.get(`/code/:code`, getSizeByCode);
router.get(`/:id`, getSizeById);
router.post(`/`, authenticate, authorizeRole(...roleManagement), createSize);
router.put(`/:id`, authenticate, authorizeRole(...roleManagement), updateSize);
router.patch(
  `/delete/:id`,
  authenticate,
  authorizeRole(...roleManagement),
  softDeleteSize
);

module.exports = router;
