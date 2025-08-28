const express = require("express");
const router = express.Router();

const authenticate = require("../middlewares/authenticate");
const authorizeRole = require("../middlewares/authorizeRole");

const {
  RegisterCustomer,
  LogInUser,
} = require("../controllers/authUser.controller");

// const PATH = "/auth";

router.post(`/sign-in`, LogInUser);
router.post(`/sign-up`, RegisterCustomer);

module.exports = router;
