import { IoBagCheck } from "react-icons/io5";
import ROUTES from "../configs/configRoutesManagement";

const listManagementCatalog = [
  {
    title: "Danh mục loại",
    url: ROUTES?.ABSOLUTE?.MANAGEMENT_CATEGORY,
    icon: IoBagCheck,
  },
  {
    title: "thương hiệu",
    url: ROUTES?.ABSOLUTE?.MANAGEMENT_BRAND,
    icon: IoBagCheck,
  },
  {
    title: "loại sản phẩm",
    url: ROUTES?.ABSOLUTE?.MANAGEMENT_CATEGORY_PRODUCT,
    icon: IoBagCheck,
  },
  {
    title: "kích thước ",
    url: ROUTES?.ABSOLUTE?.MANAGEMENT_SIZE,
    icon: IoBagCheck,
  },
  {
    title: "màu sắc ",
    url: ROUTES?.ABSOLUTE?.MANAGEMENT_COLOR,
    icon: IoBagCheck,
  },
];
export default listManagementCatalog;
