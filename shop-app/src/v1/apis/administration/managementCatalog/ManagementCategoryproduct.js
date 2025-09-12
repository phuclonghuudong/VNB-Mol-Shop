import axiosClient from "../../axiosClient";

const pathApi = "/api/v1/catalog-control/category-product";

const ManagementCategoryProductAPI = {
  // Danh sách danh mục
  get_All_Category_Product: (queryParams) =>
    axiosClient.get(`${pathApi}`, { params: queryParams }),
  // Tạo mới
  create_Category_Product: (data) => axiosClient.post(`${pathApi}`, data),
  // Cập nhật
  update_Category_Product: (id, data) =>
    axiosClient.put(`${pathApi}/${id}`, data),
  // Xóa mềm
  delete_Category_Product: (id) => axiosClient.patch(`${pathApi}/delete/${id}`),
};

export default ManagementCategoryProductAPI;
