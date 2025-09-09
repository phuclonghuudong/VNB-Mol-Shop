import { IoBagCheck } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import ROUTES from "../configs/configRoutes";

const menuListSideBarDashBoard = [
  {
    title: "Thống kê",
    url: ROUTES?.ADMIN_DASHBOARD,
    icon: MdDashboard,
  },
  {
    title: "Quản lý danh mục",
    url: ROUTES?.ADMIN_MANAGEMENT_CATALOG,
    icon: IoBagCheck,
  },
  // {
  //   title: "thương hiệu",
  //   url: ROUTES?.ADMIN_BRAND,
  //   icon: SiAdidas,
  // },
  // {
  //   title: "Danh mục biến thể",
  //   url: ROUTES?.ADMIN_TYPE_VARIANT,
  //   icon: FaProjectDiagram,
  // },
  // {
  //   title: "sản phẩm",
  //   url: ROUTES?.ADMIN_PRODUCT,
  //   icon: FaProductHunt,
  // },
];
export default menuListSideBarDashBoard;
