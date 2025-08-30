const express = require("express");
const router = express.Router();

const authenticate = require("../middlewares/authenticate");
const authorizeRole = require("../middlewares/authorizeRole");

const {
  getAllColor,
  getAllColorActive,
  getColorByCode,
  getColorById,
  createColor,
  updateColor,
  softDeleteColor,
} = require("../controllers/color.controller");

// const PATH = "/catalog-control/color";

const roleManagement = ["ADMIN", "PERSONNEL"];

router.get(`/`, getAllColor);
router.get(`/active`, getAllColorActive);
router.get(`/code/:code`, getColorByCode);
router.get(`/:id`, getColorById);
router.post(`/`, authenticate, authorizeRole(...roleManagement), createColor);
router.put(`/:id`, authenticate, authorizeRole(...roleManagement), updateColor);
router.patch(
  `/delete/:id`,
  authenticate,
  authorizeRole(...roleManagement),
  softDeleteColor
);

module.exports = router;
