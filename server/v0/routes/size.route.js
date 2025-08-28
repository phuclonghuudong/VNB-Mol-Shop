const express = require("express");
const router = express.Router();
const {
  getAllSize,
  getAllSizeActive,
  getSizeById,
  getSizeByCode,
  createSize,
  updateSize,
} = require("../controllers/size.controller");

// const PATH = "/size";

router.get(`/all`, getAllSize); // Lấy tất cả size
router.get(`/active`, getAllSizeActive); // Lấy tất cả size đang hoạt động
router.get(`/detail/:code`, getSizeByCode);
router.get(`/:id`, getSizeById);
router.post(`/`, createSize);
router.put(`/:id`, updateSize);

module.exports = router;
