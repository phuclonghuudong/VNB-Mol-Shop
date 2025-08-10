// config/index.js
const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  PORT: process.env.PORT || 1999,
  SERVER_URL: process.env.SERVER_URL || "http://localhost:",
  FRONTEND_URL: process.env.FRONTEND_URL || "*",
};
