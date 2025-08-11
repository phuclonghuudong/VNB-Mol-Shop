const jwt = require("jsonwebtoken");
const configKey = require("../configs/config");

const generateAccessToken = async (payload) => {
  const token = await jwt.sign(payload, configKey.SECRET_KEY_ACCESS_TOKEN, {
    expiresIn: "1h",
  });

  return token;
};

const generateRefreshToken = async (payload) => {
  const token = await jwt.sign(payload, configKey.SECRET_KEY_REFRESH_TOKEN, {
    expiresIn: "7d",
  });

  return token;
};

const generateAndSetToken = async (res, payload) => {
  const cookiesOption = {
    httpOnly: true,
    secure: true,
    sameSite: "None",
  };

  const accessToken = await generateAccessToken(payload);
  const refreshToken = await generateRefreshToken(payload);

  res.cookie("accessToken", accessToken, cookiesOption);
  res.cookie("refreshToken", refreshToken, cookiesOption);

  return { accessToken, refreshToken };
};

module.exports = {
  generateAccessToken,
  generateRefreshToken,
  generateAndSetToken,
};
