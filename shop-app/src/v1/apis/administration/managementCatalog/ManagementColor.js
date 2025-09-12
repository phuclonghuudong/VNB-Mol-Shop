import axiosClient from "../../axiosClient";

const pathApi = "/api/v1/catalog-control/color";

const ManagementColorAPI = {
  // Danh sách danh mục
  get_All_Color: (queryParams) =>
    axiosClient.get(`${pathApi}`, { params: queryParams }),
  // Tạo mới
  create_Color: (data) => axiosClient.post(`${pathApi}`, data),
  // Cập nhật
  update_Color: (id, data) => axiosClient.put(`${pathApi}/${id}`, data),
  // Xóa mềm
  delete_Color: (id) => axiosClient.patch(`${pathApi}/delete/${id}`),
};

export default ManagementColorAPI;
