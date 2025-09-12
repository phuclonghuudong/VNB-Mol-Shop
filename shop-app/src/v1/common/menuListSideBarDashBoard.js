// import { IoBagCheck } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { PiListDashesFill } from "react-icons/pi";
import ROUTES from "../configs/configRoutesManagement";

const menuListSideBarDashBoard = [
  {
    title: "Thống kê",
    url: ROUTES?.ABSOLUTE?.DASHBOARD,
    icon: MdDashboard,
  },
  {
    title: "Quản lý danh mục",
    url: ROUTES?.ABSOLUTE?.MANAGEMENT_CATALOG,
    icon: PiListDashesFill,
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
