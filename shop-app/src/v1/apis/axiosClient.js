import axios from "axios";
import { localDataNames } from "../configs/appInfo";
import configENV from "../configs/configENV";

const Axios = axios.create({
  baseURL: configENV.BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

Axios.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem(localDataNames.tokenData);
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

Axios.interceptors.response.use(
  (response) => response.data,
  async (error) => {
    const originRequest = error.config;

    // if (
    //   error.response &&
    //   error.response.status === 401 &&
    //   !originRequest._retry &&
    //   !originRequest.url.includes("/refresh-token")
    // ) {
    //   originRequest._retry = true;

    //   try {
    //     const newAccessToken = await refreshToken();
    //     if (newAccessToken) {
    //       originRequest.headers.Authorization = `Bearer ${newAccessToken}`;
    //       return axiosClient(originRequest);
    //     }
    //   } catch (err) {
    //     return Promise.reject(err);
    //   }
    // }

    return Promise.reject(error);
  }
);

// const refreshToken = async () => {
//   try {
//     const res = await accountAPI.refreshToken_User;

//     const accessToken = res?.DATA?.TOKEN;
//     if (accessToken) {
//       localStorage.setItem(localDataNames.tokenData, accessToken);
//     }
//     return accessToken;
//   } catch (error) {
//     console.error("Refresh token failed:", error);
//     throw error;
//   }
// };

export default Axios;
