import { FaUserCircle } from "react-icons/fa";
import { HiMiniBellAlert } from "react-icons/hi2";
import { TiThMenu } from "react-icons/ti";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LOGO from "../../../assets/logo.svg";
import ROUTES from "../../../configs/configRoutesManagement";
import { authSelector } from "../../../redux/reducers/authReducer";
import IconComponent from "../ui/IconComponent";
import Text from "../ui/Text";

const Header = ({ handleShowSideBar }) => {
  const USER = useSelector(authSelector);

  return (
    <div
      className={` h-16 w-full bg-white  px-4 flex justify-between items-center  duration-300 border-b border-gray-400 shadow-lg`}
    >
      <div className="duration-300 flex justify-start items-center gap-4">
        <Link
          to={ROUTES?.ABSOLUTE?.ADMIN_DASHBOARD}
          className=" flex justify-start items-center gap-4 duration-300"
        >
          <img src={LOGO} className="w-15 h-15 object-scale-down" />
        </Link>
        <IconComponent icon={TiThMenu} onClick={handleShowSideBar} />

        <Text
          title={USER?.user?.fullname || "Chưa đăng nhập "}
          isBold
          isItalic
          isHover
          isUppercase
        />
      </div>

      <div className="flex items-center gap-2">
        <IconComponent icon={HiMiniBellAlert} title={"Thông báo"} />
        <IconComponent icon={FaUserCircle} title={"Tài khoản"} />
      </div>
    </div>
  );
};

export default Header;
