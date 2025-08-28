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
} = require("../controllers/role.controller");
const {
  getAllGroups,
  getGroupById,
  createGroup,
  updateGroup,
  softDeleteGroup,
  getAllGroupActive,
} = require("../controllers/customerGroup.controller");

// const PATH = "/access-control";

const roleManagement = ["ADMIN", "PERSONNEL"];

// Role - Vai trò
router.get(`/role`, getAllRoles);
router.get(`/role/:id`, getRoleById);
router.get(`/role/slug/:slug`, getRoleBySlug);
router.post(
  `/role`,
  authenticate,
  authorizeRole(...roleManagement),
  createRole
);
router.put(
  `/role/:id`,
  authenticate,
  authorizeRole(...roleManagement),
  updateRole
);
router.patch(
  `/role/delete/:id`,
  authenticate,
  authorizeRole(...roleManagement),
  softDeleteRole
);

// CustomerGroup - Nhóm khách hàng
router.get(`/group`, getAllGroups);
router.get(`/group/active`, getAllGroupActive);
router.get(`/group/:id`, getGroupById);
router.post(`/group`, createGroup);
router.put(`/group/:id`, updateGroup);
router.patch(`/group/delete/:id`, softDeleteGroup);

module.exports = router;
