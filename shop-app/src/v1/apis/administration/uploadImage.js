import axiosClient from "../axiosClient";

const pathApi = "/api/v1/upload";

const UploadImageAPI = {
  // Upload Hình ảnh
  upload_Image: (data) =>
    axiosClient.post(`${pathApi}/upload-image`, data, {
      headers: { "Content-Type": "multipart/form-data" },
    }),
};

export default UploadImageAPI;
