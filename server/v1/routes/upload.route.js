const express = require("express");
const router = express.Router();
const {
  uploadImageAvatar,
  uploadImageProduct,
} = require("../controllers/uploadImage.controller");
const upload = require("../middlewares/multer");
const authenticate = require("../middlewares/authenticate");
const authorizeRole = require("../middlewares/authorizeRole");

// const PATH = "/upload";

router.post(
  `/user/avatar`,
  authenticate,
  upload.single("image"),
  uploadImageAvatar
);

const role = ["ADMIN", "PERSONNEL"];
router.post(
  `/product/upload-image`,
  authenticate,
  authorizeRole(...role),
  upload.single("image"),
  uploadImageProduct
);

module.exports = router;
