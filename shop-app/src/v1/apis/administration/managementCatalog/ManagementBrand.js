import axiosClient from "../../axiosClient";

const pathApi = "/api/v1/catalog-control/brand";

const ManagementBrandAPI = {
  // Danh sách danh mục
  get_All_Brand: (queryParams) =>
    axiosClient.get(`${pathApi}`, { params: queryParams }),
  // Tạo mới
  create_Brand: (data) => axiosClient.post(`${pathApi}`, data),
  // Cập nhật
  update_Brand: (id, data) => axiosClient.put(`${pathApi}/${id}`, data),
  // Xóa mềm
  delete_Brand: (id) => axiosClient.patch(`${pathApi}/delete/${id}`),
};

export default ManagementBrandAPI;
