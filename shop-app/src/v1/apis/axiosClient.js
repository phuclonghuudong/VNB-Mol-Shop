import axios from "axios";
import configENV from "../configs/configENV";

// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const axiosClient = axios.create({
  baseURL: configENV.BASE_URL,
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
    // config.metadata = { startTime: Date.now() };
    return config;
  },
  (error) => Promise.reject(error)
);

axiosClient.interceptors.response.use(
  async (response) => {
    // const MIN_WAIT = 20000;
    // const startTime = response.config.metadata?.startTime || Date.now();
    // const elapsed = Date.now() - startTime;

    // if (elapsed < MIN_WAIT) {
    //   await delay(MIN_WAIT - elapsed);
    // }

    return response.data;
  },
  (error) => {
    let message = "Đã xảy ra lỗi";

    if (error.response) {
      message = error.response.data?.message || error.response.statusText;
      if (error.response.status === 401) {
        console.error("Unauthorized! Token có thể đã hết hạn.");
      }
    } else if (error.request) {
      message = "Không thể kết nối đến server";
    } else {
      message = error.message;
    }

    // toast.error(message);

    return Promise.reject({ ...error, message });
  }
);

export default axiosClient;
