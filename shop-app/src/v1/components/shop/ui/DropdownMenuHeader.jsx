import IMG_NONE_CART from "@/v1/assets/empty-cart.webp";
import { localDataNames } from "@/v1/configs/appInfo";
import ROUTES from "@/v1/configs/configRoutes";
import { authSelector, clearAuth } from "@/v1/redux/reducers/authReducer";
import AxiosToastError from "@/v1/utils/AxiosToastError";
import { useState } from "react";
import toast from "react-hot-toast";
import { BiSolidBinoculars } from "react-icons/bi";
import { FaCartArrowDown, FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import DropdownChildren from "./DropdownChildren";
import TitleIconMenuNavbar from "./TitleIconMenuNavbar";

const DropdownMenuHeader = () => {
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
              path={ROUTES?.CHECK_ORDER}
            />
            <DropdownChildren
              title={"Kiểm tra bảo hành"}
              path={ROUTES?.CHECK_WARRANTY}
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
            {auth?.account && auth?.account?.length !== 0 ? (
              <>
                <DropdownChildren
                  title={"Trang cá nhân"}
                  path={ROUTES?.ACCOUNT}
                />
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
