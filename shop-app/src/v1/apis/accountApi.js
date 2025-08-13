import axiosClient from "./axiosClient";

const pathApi = "/api/v1/auth";

const accountAPI = {
  // Đăng nhập
  logIn_Customer: (data) =>
    axiosClient.post(`${pathApi}/customer/sign-in`, data),

  //   Đăng ký
  signUp_Customer: (data) =>
    axiosClient.post(`${pathApi}/customer/sign-up`, data),

  // Xác nhận Email
  verifyEmailForgotPassword_Customer: (data) =>
    axiosClient.post(`${pathApi}/customer/verify-email-forgot-password`, data),

  //   Xác thực OTP
  verifyOtpForgotPassword_Customer: (data) =>
    axiosClient.put(`${pathApi}/customer/verify-otp`, data),

  //   Đổi mật khẩu
  resetPassword_Customer: (data) =>
    axiosClient.put(`${pathApi}/customer/reset-password`, data),

  //   Cập nhật Token
  refreshToken_Customer: () =>
    axiosClient.put(`${pathApi}/customer/refresh-token`),

  //   Thông tin người dùng
  profile_Customer: () => axiosClient.get(`${pathApi}/customer/profile`),
};

export default accountAPI;
