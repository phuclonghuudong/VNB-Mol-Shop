const express = require("express");
const router = express.Router();
const Category = require("./category.route");

const BASE_PATH = "/api/v1";

router.use(`${BASE_PATH}/category`, Category);

module.exports = router;
