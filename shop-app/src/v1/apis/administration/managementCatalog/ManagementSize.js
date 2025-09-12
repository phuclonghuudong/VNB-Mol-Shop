import axiosClient from "../../axiosClient";

const pathApi = "/api/v1/catalog-control/size";

const ManagementSizeAPI = {
  // Danh sách danh mục
  get_All_Size: (queryParams) =>
    axiosClient.get(`${pathApi}`, { params: queryParams }),
  // Tạo mới
  create_Size: (data) => axiosClient.post(`${pathApi}`, data),
  // Cập nhật
  update_Size: (id, data) => axiosClient.put(`${pathApi}/${id}`, data),
  // Xóa mềm
  delete_Size: (id) => axiosClient.patch(`${pathApi}/delete/${id}`),
};

export default ManagementSizeAPI;
