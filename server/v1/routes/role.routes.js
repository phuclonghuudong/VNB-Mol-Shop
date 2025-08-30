const express = require("express");
const router = express.Router();

const authenticate = require("../middlewares/authenticate");
const authorizeRole = require("../middlewares/authorizeRole");

const {
  getAllRoles,
  getRoleById,
  getRoleBySlug,
  createRole,
  updateRole,
  softDeleteRole,
  getAllRoleActive,
} = require("../controllers/role.controller");

// const PATH = "/access-control/role";

const roleManagement = ["ADMIN", "PERSONNEL"];

// Role - Vai trò
router.get(`/`, getAllRoles);
router.get(`/active`, getAllRoleActive);
router.get(`/slug/:slug`, getRoleBySlug);
router.get(`/:id`, getRoleById);
router.post(`/`, authenticate, authorizeRole(...roleManagement), createRole);
router.put(`/:id`, authenticate, authorizeRole(...roleManagement), updateRole);
router.patch(
  `/delete/:id`,
  authenticate,
  authorizeRole(...roleManagement),
  softDeleteRole
);

module.exports = router;
