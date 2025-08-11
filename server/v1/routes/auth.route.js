const express = require("express");
const router = express.Router();
const { signUpCustomer } = require("../controllers/auth.controller");

// const PATH = "/auth";

router.get(`/customer/sign-up`, signUpCustomer);

module.exports = router;
