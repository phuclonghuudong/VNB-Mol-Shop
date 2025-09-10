import axiosClient from "../../axiosClient";

const pathApi = "/api/v1/catalog-control/category";

const ManagementCategoryAPI = {
  // Danh sách danh mục
  get_All_Category: ({ page, limit }) =>
    axiosClient.get(`${pathApi}?page=${page}&limit=${limit}`),
  // Tạo mới
  create_Category: (data) => axiosClient.post(`${pathApi}`, data),
  // Cập nhật
  update_Category: (id, data) => axiosClient.put(`${pathApi}/${id}`, data),
  // Xóa mềm
  delete_Category: (id) => axiosClient.patch(`${pathApi}/delete/${id}`),
};

export default ManagementCategoryAPI;
