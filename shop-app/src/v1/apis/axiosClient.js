import axios from "axios";
import configENV from "../configs/configENV";

const axiosClient = axios.create({
  baseURL: configENV.BASE_URl,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosClient.interceptors.response.use(
  (response) => response.data, // Trả về data trực tiếp
  (error) => {
    let message = "Đã xảy ra lỗi";

    if (error.response) {
      // Backend trả lỗi
      message = error.response.data?.message || error.response.statusText;
      if (error.response.status === 401) {
        console.error("Unauthorized! Token có thể đã hết hạn.");
        // Có thể logout hoặc refresh token ở đây
      }
    } else if (error.request) {
      // Request gửi đi nhưng không nhận được phản hồi
      message = "Không thể kết nối đến server";
    } else {
      // Lỗi khác khi setup request

      message = error.message;
    }

    // Hiển thị toast
    // toast.error(message);

    return Promise.reject({ ...error, message });
  }
);

export default axiosClient;
