const express = require("express");
const router = express.Router();
const {
  signUpCustomer,
  verifyEmailForgotPasswordCustomer,
  signInCustomer,
} = require("../controllers/auth.controller");

// const PATH = "/auth";

router.post(`/customer/sign-up`, signUpCustomer);
router.post(`/customer/sign-in`, signInCustomer);
router.post(
  `/customer/verify-email-forgot-password`,
  verifyEmailForgotPasswordCustomer
);

module.exports = router;
