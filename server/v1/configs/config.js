const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  PORT: process.env.PORT || 1999,
  SERVER_URL: process.env.SERVER_URL || "http://localhost:",
  FRONTEND_URL: process.env.FRONTEND_URL || "*",

  SECRET_KEY_ACCESS_TOKEN:
    process.env.SECRET_KEY_ACCESS_TOKEN || "secret key access token",
  SECRET_KEY_REFRESH_TOKEN:
    process.env.SECRET_KEY_REFRESH_TOKEN || "secret key refresh token",
};
