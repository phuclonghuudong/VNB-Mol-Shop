const express = require("express");
const router = express.Router();
const {
  getAllAccounts,
  getAccountById,
  createAccount,
} = require("../controllers/account.controller");

// const PATH = "/account";

router.get(`/`, getAllAccounts);
router.get(`/:id`, getAccountById);
router.post(`/`, createAccount);

module.exports = router;
