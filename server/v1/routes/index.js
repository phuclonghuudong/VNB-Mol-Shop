const express = require("express");
const router = express.Router();
const Category = require("./category.route");
const Brand = require("./brand.route");
const Role = require("./role.route");
const CustomerGroup = require("./customerGroup.route");
const Account = require("./account.route");

const BASE_PATH = "/api/v1";

router.use(`${BASE_PATH}/category`, Category);
router.use(`${BASE_PATH}/brand`, Brand);
router.use(`${BASE_PATH}/role`, Role);
router.use(`${BASE_PATH}/group`, CustomerGroup);
router.use(`${BASE_PATH}/account`, Account);

module.exports = router;
