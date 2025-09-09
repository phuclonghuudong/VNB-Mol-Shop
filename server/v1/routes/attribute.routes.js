const express = require("express");
const router = express.Router();

const authenticate = require("../middlewares/authenticate");
const authorizeRole = require("../middlewares/authorizeRole");

const {
  getAllAttribute,
  getAllAttributeActive,
  getAttributeById,
  createAttribute,
  updateAttribute,
  softDeleteAttribute,
} = require("../controllers/attribute.controller");

// const PATH = "/catalog-control/category";

const roleManagement = ["ADMIN", "PERSONNEL"];

router.get(`/`, getAllAttribute);
router.get(`/active`, getAllAttributeActive);
router.get(`/:id`, getAttributeById);

router.use(authenticate, authorizeRole(...roleManagement));

router.post(`/`, createAttribute);
router.put(`/:id`, updateAttribute);
router.patch(`/delete/:id`, softDeleteAttribute);

module.exports = router;
