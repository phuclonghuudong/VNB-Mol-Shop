import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import accountAPI from "../../apis/accountApi";
import ButtonComponent from "../../components/ui/ButtonComponent";
import OTPInput from "../../components/ui/OTPInput";
import Text from "../../components/ui/Text";
import TitleCategoryList from "../../components/ui/TitleCategoryList";
import ROUTES from "../../configs/configRoutes";
import AxiosToastError from "../../utils/AxiosToastError";

const ConFirmOTP = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = useState(["", "", "", "", "", ""]);
  const inputRef = useRef([]);

  const [loading, setLoading] = useState(false);

  const isEmail = location?.state?.email;

  useEffect(() => {
    if (!isEmail) {
      t;
      toast.error("KHÔNG THỂ THỰC HIỆN THAO TÁC");
      navigate(ROUTES?.FORGOT_PASSWORD);
    }
  }, []);

  const fetchVerifyOtp = async () => {
    try {
      setLoading(true);
      const isData = data.join("");
      const result = await accountAPI.verifyOtpForgotPassword_Customer({
        email: isEmail,
        otp: isData,
      });

      if (result?.SUCCESS) {
        toast.success(result?.MESSAGE);
        navigate(ROUTES?.RESET_PASSWORD, { state: { email: isEmail } });
      }
    } catch (error) {
      AxiosToastError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    fetchVerifyOtp();
  };
  return (
    <section>
      <TitleCategoryList title={"Xác nhận OTP"} isUppercase />

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <OTPInput data={data} setData={setData} inputRef={inputRef} />

        <ButtonComponent
          title={"Xác nhận OTP"}
          color="orange"
          isUppercase
          isLoading={loading}
          onClick={handleSubmit}
        />
      </form>

      <div className="text-right ">
        <Link to={"/thanh-vien/dang-nhap"}>
          <Text title="Đăng nhập tại đây" isSize={"text-md"} isHover />
        </Link>
      </div>
    </section>
  );
};

export default ConFirmOTP;
