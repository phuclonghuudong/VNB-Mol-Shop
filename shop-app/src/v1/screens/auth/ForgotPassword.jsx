import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import accountAPI from "../../apis/accountApi";
import ButtonComponent from "../../components/ui/ButtonComponent";
import FormInput from "../../components/ui/FormInput";
import Text from "../../components/ui/Text";
import TitleCategoryList from "../../components/ui/TitleCategoryList";
import ROUTES from "../../configs/configRoutes";
import AxiosToastError from "../../utils/AxiosToastError";
import { isAllFieldsFilledAuth } from "../../utils/isAllFieldsFilledAuth";

const ForgotPassword = () => {
  const [validInput, setValidInput] = useState({
    email: "",
  });
  const [checkValid, setCheckValid] = useState(true);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleOnchange = (event) => {
    const { name, value } = event.target;

    setValidInput((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };

  const fetchVerifyEmailForgotPassword = async () => {
    try {
      setLoading(true);

      const result = await accountAPI.verifyEmailForgotPassword_Customer(
        validInput
      );
      if (result?.SUCCESS) {
        toast.success(result?.MESSAGE);
        navigate(ROUTES?.VERIFY_OTP, { state: validInput });
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

    fetchVerifyEmailForgotPassword();
  };
  return (
    <section>
      <TitleCategoryList title={"Quên mật khẩu"} isUppercase />

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <FormInput
          id={"email"}
          value={validInput.email}
          onChange={handleOnchange}
          placeholder={"Email"}
          isValidNull={checkValid}
          isAutoFocus
        />
        <ButtonComponent
          title={"Lấy lại mật khẩu"}
          color="orange"
          isUppercase
          isLoading={loading}
        />
      </form>

      <div className="text-right ">
        <Link to={ROUTES?.LOGIN}>
          <Text title="Đăng nhập tại đây" isSize={"text-md"} isHover />
        </Link>
      </div>
    </section>
  );
};

export default ForgotPassword;
