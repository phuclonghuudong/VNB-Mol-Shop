import axiosClient from "../axiosClient";

const pathApi = "/api/v1";

const CategoryAPI = {
  // Danh sách danh mục
  get_All_Category: () => axiosClient.get(`${pathApi}/category/active`),

  // Danh sách danh mục sản phẩm
  get_All_Category_Product: () =>
    axiosClient.get(`${pathApi}/category-product/active`),
};

export default CategoryAPI;
