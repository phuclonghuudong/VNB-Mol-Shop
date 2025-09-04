import axiosClient from "../axiosClient";

const pathApi = "/api/v1";

const NewsAPI = {
  // Danh sách danh mục
  get_All_News: () => axiosClient.get(`${pathApi}/news/active`),
};

export default NewsAPI;
