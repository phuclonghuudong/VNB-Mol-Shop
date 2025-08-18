import accountAPI from "@/v1/apis/accountApi";
import ButtonComponent from "@/v1/components/shop/ui/ButtonComponent";
import OTPInput from "@/v1/components/shop/ui/OTPInput";
import Text from "@/v1/components/shop/ui/Text";
import TitleCategoryList from "@/v1/components/shop/ui/TitleCategoryList";
import ROUTES from "@/v1/configs/configRoutes";
import AxiosToastError from "@/v1/utils/AxiosToastError";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";

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
        return navigate(ROUTES?.RESET_PASSWORD, { state: { email: isEmail } });
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

      <div className="text-right flex justify-between items-center">
        <Link to={ROUTES?.FORGOT_PASSWORD}>
          <Text title="Quay lại" isSize={"text-md"} isHover />
        </Link>
        <Link to={ROUTES?.LOGIN}>
          <Text title="Đăng nhập tại đây" isSize={"text-md"} isHover />
        </Link>
      </div>
    </section>
  );
};

export default ConFirmOTP;
