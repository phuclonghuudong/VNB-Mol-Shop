import axiosClient from "./axiosClient";

const pathApi = "/api/v1/auth";

const accountAPI = {
  // Đăng nhập
  logIn_Customer: (data) => axiosClient.post(`${pathApi}/sign-in`, data),

  //   Đăng ký
  signUp_Customer: (data) => axiosClient.post(`${pathApi}/sign-up`, data),

  // Xác nhận Email
  verifyEmailForgotPassword_Customer: (data) =>
    axiosClient.put(`${pathApi}/send-forgot-password-email`, data),

  //   Xác thực OTP
  verifyOtpForgotPassword_Customer: (data) =>
    axiosClient.put(`${pathApi}/verify-otp-by-email`, data),

  //   Đổi mật khẩu
  resetPassword_Customer: (data) =>
    axiosClient.put(`${pathApi}/reset-password`, data),

  //   Cập nhật Token
  refreshToken_User: () => axiosClient.put(`${pathApi}/user/refresh-token`),

  //   Thông tin người dùng
  profile_Customer: () => axiosClient.get(`${pathApi}/user/profile`),
};

export default accountAPI;
