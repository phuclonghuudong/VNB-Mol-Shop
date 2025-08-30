const express = require("express");
const router = express.Router();

const authenticate = require("../middlewares/authenticate");
const authorizeRole = require("../middlewares/authorizeRole");

const {
  getAllGroups,
  getGroupById,
  createGroup,
  updateGroup,
  softDeleteGroup,
  getAllGroupActive,
} = require("../controllers/customerGroup.controller");

// const PATH = "/access-control/customer-group";

const roleManagement = ["ADMIN", "PERSONNEL"];

// CustomerGroup - Nhóm khách hàng
router.get(`/`, getAllGroups);
router.get(`/active`, getAllGroupActive);
router.get(`/:id`, getGroupById);
router.post(`/`, authenticate, authorizeRole(...roleManagement), createGroup);
router.put(`/:id`, authenticate, authorizeRole(...roleManagement), updateGroup);
router.patch(
  `/delete/:id`,
  authenticate,
  authorizeRole(...roleManagement),
  softDeleteGroup
);

module.exports = router;
