import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import accountAPI from "../../apis/accountApi";
import ButtonComponent from "../../components/ui/ButtonComponent";
import OTPInput from "../../components/ui/OTPInput";
import Text from "../../components/ui/Text";
import TitleCategoryList from "../../components/ui/TitleCategoryList";
import AxiosToastError from "../../utils/AxiosToastError";

const ConFirmOTP = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = useState(["", "", "", "", "", ""]);
  const inputRef = useRef([]);

  const [loading, setLoading] = useState(false);
  const validateValue = Object.values(data).every((el) => el);

  const isEmail = location?.state?.email;

  useEffect(() => {
    if (!isEmail) {
      navigate("/thanh-vien/quen-mat-khau");
    }
  }, []);

  const fetchVerifyOtp = async () => {
    try {
      const isData = data.join("");
      const result = await accountAPI.verifyOtpForgotPassword_Customer({
        email: isEmail,
        otp: isData,
      });

      if (result?.SUCCESS) {
        toast.success(result?.MESSAGE);
        navigate("/thanh-vien/doi-mat-khau");
      }
    } catch (error) {
      AxiosToastError(error);
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
