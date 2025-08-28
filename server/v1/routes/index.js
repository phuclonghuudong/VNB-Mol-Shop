const express = require("express");
const router = express.Router();

const AuthUser = require("./authUser.routes");
const AccessControl = require("./accessControl.routes");

const BASE_PATH = "/api/v1";

router.use(`${BASE_PATH}/auth`, AuthUser);
router.use(`${BASE_PATH}/access-control`, AccessControl);

module.exports = router;
