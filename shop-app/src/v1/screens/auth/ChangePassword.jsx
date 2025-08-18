import accountAPI from "@/v1/apis/accountApi";
import ButtonComponent from "@/v1/components/shop/ui/ButtonComponent";
import FormInput from "@/v1/components/shop/ui/FormInput";
import Text from "@/v1/components/shop/ui/Text";
import TitleCategoryList from "@/v1/components/shop/ui/TitleCategoryList";
import ROUTES from "@/v1/configs/configRoutes";
import AxiosToastError from "@/v1/utils/AxiosToastError";
import { isAllFieldsFilledAuth } from "@/v1/utils/isAllFieldsFilledAuth";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const [validInput, setValidInput] = useState({
    password: "",
    confirmPassword: "",
  });
  const location = useLocation();
  const navigate = useNavigate();
  const [checkValid, setCheckValid] = useState(true);
  const [loading, setLoading] = useState(false);

  const isEmail = location?.state?.email;
  useEffect(() => {
    if (!isEmail) {
      toast.error("KHÔNG THỂ THỰC HIỆN THAO TÁC");
      navigate(ROUTES?.FORGOT_PASSWORD);
    }
  }, []);

  const handleOnChange = (event) => {
    const { name, value } = event.target;

    setValidInput((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };

  const fetchApiResetPassword = async () => {
    try {
      setLoading(true);
      const result = await accountAPI.resetPassword_Customer({
        email: isEmail,
        password: validInput.password,
        confirmPassword: validInput.confirmPassword,
      });

      if (result?.SUCCESS) {
        toast.success(result?.MESSAGE);
        navigate(ROUTES?.LOGIN);
      }
    } catch (error) {
      AxiosToastError(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = isAllFieldsFilledAuth(validInput);
    if (!isValid) {
      setCheckValid(isValid);
      return;
    }
    fetchApiResetPassword();
  };

  return (
    <section>
      <TitleCategoryList title={"Đổi mật khẩu  "} isUppercase />

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <FormInput
          id={"password"}
          value={validInput.password}
          placeholder={"Mật khẩu"}
          isAutoFocus
          onChange={handleOnChange}
          isValidNull={checkValid}
          isPassword
        />
        <FormInput
          id={"confirmPassword"}
          value={validInput.confirmPassword}
          placeholder={"Nhập lại mật khẩu"}
          onChange={handleOnChange}
          isValidNull={checkValid}
          isPassword
        />

        <ButtonComponent
          title={"Đổi mật khẩu"}
          color="orange"
          isUppercase
          isLoading={loading}
        />
      </form>

      <div className=" flex justify-between ">
        <Link to={ROUTES?.FORGOT_PASSWORD}>
          <Text title="Quên mật khẩu" isSize={"text-md"} isHover />
        </Link>
        <Link to={ROUTES?.REGISTER}>
          <Text title="Đăng ký tại đây" isSize={"text-md"} isHover />
        </Link>
      </div>
    </section>
  );
};

export default ChangePassword;
