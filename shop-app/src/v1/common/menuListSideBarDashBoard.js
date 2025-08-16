import { FaProductHunt, FaProjectDiagram } from "react-icons/fa";
import { IoBagCheck } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { SiAdidas } from "react-icons/si";
import ROUTES from "../configs/configRoutes";

const menuListSideBarDashBoard = [
  {
    title: "Thống kê",
    url: ROUTES?.ADMIN_DASHBOARD,
    icon: MdDashboard,
  },
  {
    title: "Loại sản phẩm",
    url: ROUTES?.ADMIN_CATEGORY,
    icon: IoBagCheck,
  },
  {
    title: "thương hiệu",
    url: ROUTES?.ADMIN_BRAND,
    icon: SiAdidas,
  },
  {
    title: "Danh mục biến thể",
    url: ROUTES?.ADMIN_TYPE_VARIANT,
    icon: FaProjectDiagram,
  },
  {
    title: "sản phẩm",
    url: ROUTES?.ADMIN_PRODUCT,
    icon: FaProductHunt,
  },
];
export default menuListSideBarDashBoard;
