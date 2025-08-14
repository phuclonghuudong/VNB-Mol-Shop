import { useState } from "react";
import { BiSolidBinoculars } from "react-icons/bi";
import { FaCartArrowDown, FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import IMG_NONE_CART from "../../assets/empty-cart.webp";
import { localDataNames } from "../../configs/appInfo";
import ROUTES from "../../configs/configRoutes";
import { authSelector, clearAuth } from "../../redux/reducers/authReducer";
import DropdownChildren from "./DropdownChildren";
import TitleIconMenuNavbar from "./TitleIconMenuNavbar";

const DropdownMenuHeader = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector(authSelector);

  const handleLogOut = async () => {
    dispatch(clearAuth());
    localStorage.removeItem(localDataNames.authData);
    navigate(ROUTES?.LOGIN);
  };

  return (
    <div className="w-full h-full flex items-center justify-center md:gap-1">
      <TitleIconMenuNavbar
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

      <TitleIconMenuNavbar
        code="TK"
        iconTitle={FaUser}
        title="TÀI KHOẢN"
        dropdownOption={
          <>
            {auth?.account?.length !== 0 ? (
              <>
                <DropdownChildren title={"Đăng xuất"} onClick={handleLogOut} />
              </>
            ) : (
              <>
                <DropdownChildren title={"Đăng nhập"} path={ROUTES?.LOGIN} />
                <DropdownChildren title={"Đăng ký"} path={ROUTES?.REGISTER} />
              </>
            )}
          </>
        }
      />

      <TitleIconMenuNavbar
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
