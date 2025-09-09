import { IoBagCheck } from "react-icons/io5";
import ROUTES from "../configs/configRoutes";

const listManagementCatalog = [
  {
    title: "Danh mục loại",
    url: ROUTES?.ADMIN_MANAGEMENT_CATEGORY,
    icon: IoBagCheck,
  },
  {
    title: "Danh mục thương hiệu",
    url: ROUTES?.ADMIN_MANAGEMENT_BRAND,
    icon: IoBagCheck,
  },
];
export default listManagementCatalog;
