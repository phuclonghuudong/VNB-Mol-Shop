import { useState } from "react";
import { BiSolidBinoculars } from "react-icons/bi";
import { FaCartArrowDown, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import IMG_NONE_CART from "../../assets/empty-cart.webp";

const TitleIcon = ({
  iconTitle: ICON,
  title,
  quantity,
  code,
  dropdownOption,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const hasQuantity = typeof quantity === "number" && quantity >= 0;

  return (
    <div
      className="w-full h-full relative flex flex-col justify-center items-center cursor-pointer gap-1 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col items-center">
        <div
          className={`relative md:p-2 md:border rounded-full text-orange-600 hover:text-orange-900 hover:border-orange-900 duration-300 border-gray-300`}
        >
          {hasQuantity && (
            <div
              className={`absolute rounded-full bg-orange-600 text-white text-xs ${
                quantity > 9 ? "h-5 w-5" : "h-4 w-4"
              } flex items-center justify-center -top-1 -right-2 leading-none`}
            >
              {quantity}
            </div>
          )}
          <ICON size={20} />
        </div>
        <p className="text-xs hidden xl:block uppercase font-semibold group-hover:text-orange-500 duration-500">
          {title}
        </p>
      </div>

      {isHovered && (
        <div
          className={`absolute top-full mt-0 ${
            code === "GH"
              ? "-left-22 lg:-left-15 md:-left-15 w-60"
              : code === "TK"
              ? "md:left-1/2 -left-10 w-50"
              : "left-1/2 w-50"
          } transform duration-300 -translate-x-1/2  bg-white shadow-lg  z-50 `}
        >
          {dropdownOption}
        </div>
      )}
    </div>
  );
};

const DropdownMenuHeader = () => {
  const [loading, setLoading] = useState(false);

  const DropdownChildren = ({ title, path }) => (
    <Link
      to={path}
      className="block px-4 py-2 text-sm uppercase font-semibold text-center hover:text-white hover:bg-orange-500 duration-300"
    >
      <div className="flex items-center justify-center gap-2">
        <p>{title}</p>
      </div>
    </Link>
  );

  return (
    <div className="w-full h-full flex items-center justify-center md:gap-1">
      <TitleIcon
        code="TC"
        iconTitle={BiSolidBinoculars}
        title="TRA CỨU"
        dropdownOption={
          <>
            <DropdownChildren
              title={"Kiểm tra đơn hàng"}
              path={"/kiem-tra-don-hang"}
            />
            <DropdownChildren
              title={"Kiểm tra bảo hành"}
              path={"/kiem-tra-bao-hanh"}
            />
          </>
        }
      />

      <TitleIcon
        code="TK"
        iconTitle={FaUser}
        title="TÀI KHOẢN"
        dropdownOption={
          <>
            <DropdownChildren
              title={"Đăng nhập"}
              path={"/thanh-vien/dang-nhap"}
            />
            <DropdownChildren title={"Đăng ký"} path={"/thanh-vien/dang-ky"} />
          </>
        }
      />

      <TitleIcon
        code="GH"
        iconTitle={FaCartArrowDown}
        title="GIỎ HÀNG"
        quantity={0}
        dropdownOption={
          <>
            <Link to={"/gio-hang"} className="grid items-center font-semibold">
              <div className="text-center items-center p-4">
                <img src={IMG_NONE_CART} className="object-scale-down" />
                <p>Không có sản phẩm</p>
              </div>
            </Link>
          </>
        }
      />
    </div>
  );
};

export default DropdownMenuHeader;
