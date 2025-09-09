import menuListSideBarDashBoard from "@/v1/common/menuListSideBarDashBoard";
import ROUTES from "@/v1/configs/configRoutes";
import { authSelector, clearAuth } from "@/v1/redux/reducers/authReducer";
import AxiosToastError from "@/v1/utils/AxiosToastError";
import { useState } from "react";
import toast from "react-hot-toast";
import { IoLogOut } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { localDataNames } from "../../../configs/appInfo";
import IconComponent from "./IconComponent";
import Text from "./Text";

const TitleIconSideBar = ({ onShow }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector(authSelector);

  const handleLogOut = async () => {
    setLoading(true);

    try {
      dispatch(clearAuth());

      localStorage.removeItem(localDataNames.authData);

      toast.success("ĐĂNG XUẤT THÀNH CÔNG");

      navigate(ROUTES?.LOGIN);
    } catch (error) {
      AxiosToastError(error);
    } finally {
      setLoading(false);
    }
  };

  const getActiveUrl = () => {
    const matches = menuListSideBarDashBoard.filter((item) =>
      location.pathname.startsWith(item.url)
    );
    if (matches.length === 0) return null;
    return matches.reduce((a, b) => (a.url.length > b.url.length ? a : b)).url;
  };

  const activeUrl = getActiveUrl();

  return (
    <div
      className={`flex flex-col h-full gap-2 ${
        onShow ? " justify-between" : " justify-center items-center"
      } `}
    >
      <div className="flex-1 flex flex-col gap-2 w-full overflow-y-auto ">
        {menuListSideBarDashBoard.map((item, index) => {
          return (
            <Link
              to={item?.url}
              key={index + "menu"}
              className={`flex items-center group gap-3 duration-300 hover:text-orange-600  w-full p-2 rounded-md ${
                activeUrl === item?.url
                  ? "bg-orange-200 text-gray-800"
                  : "text-gray-400"
              } ${onShow ? " justify-start " : " justify-center"}`}
              title={item?.title}
            >
              <IconComponent icon={item?.icon} isSize={!onShow ? 24 : 20} />
              {onShow && (
                <Text
                  title={item?.title}
                  isBold
                  isSize={"text-sm"}
                  isPadding={"py-0"}
                  isHover
                  isUppercase
                />
              )}
            </Link>
          );
        })}
      </div>

      <div
        className={` flex items-center gap-3 bottom-0 duration-300 hover:text-orange-600  w-full  p-2 rounded-md text-gray-700 cursor-pointer ${
          onShow ? " justify-start " : " justify-center"
        }`}
        title={"Đăng xuất"}
        onClick={handleLogOut}
      >
        <IconComponent icon={IoLogOut} isSize={!onShow ? 24 : 20} />
        {onShow && (
          <Text
            title={"Đăng xuất"}
            isBold
            isSize={"text-sm"}
            isPadding={"py-0"}
            isHover
            isUppercase
          />
        )}
      </div>
    </div>
  );
};

export default TitleIconSideBar;
