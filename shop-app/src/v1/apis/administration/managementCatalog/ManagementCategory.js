import axiosClient from "../../axiosClient";

const pathApi = "/api/v1/catalog-control/category";

const ManagementCategoryAPI = {
  // Danh sách danh mục
  get_All_Category: () => axiosClient.get(`${pathApi}`),
};

export default ManagementCategoryAPI;
