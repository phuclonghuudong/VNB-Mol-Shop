import { IoLogOut } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import menuListSideBarDashBoard from "../../../common/menuListSideBarDashBoard";
import IconComponent from "./IconComponent";
import Text from "./Text";

const TitleIconSideBar = ({ onShow }) => {
  const location = useLocation();
  return (
    <div
      className={`flex flex-col h-full gap-2 ${
        onShow ? " justify-start" : " justify-center items-center"
      } `}
    >
      <div className=" flex flex-col gap-2 h-full w-full overflow-y-auto ">
        {menuListSideBarDashBoard.map((item, index) => {
          return (
            <Link
              to={item?.url}
              key={index + "menu"}
              className={`flex items-center group gap-3 duration-300 hover:text-orange-600  w-full p-2 rounded-md ${
                location?.pathname === item?.url
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
        className={` flex items-center gap-3 duration-300 hover:text-orange-600  w-full  p-2 rounded-md text-gray-700 ${
          onShow ? " justify-start " : " justify-center"
        }`}
        title={"Đăng xuất"}
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
