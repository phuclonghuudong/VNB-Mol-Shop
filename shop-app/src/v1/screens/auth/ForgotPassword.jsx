import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import accountAPI from "../../apis/accountApi";
import ButtonComponent from "../../components/ui/ButtonComponent";
import FormInput from "../../components/ui/FormInput";
import Text from "../../components/ui/Text";
import TitleCategoryList from "../../components/ui/TitleCategoryList";
import AxiosToastError from "../../utils/AxiosToastError";

const ForgotPassword = () => {
  const [validInput, setValidInput] = useState({
    email: "",
  });
  const navigate = useNavigate();

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
      const result = await accountAPI.verifyEmailForgotPassword_Customer(
        validInput
      );
      if (result?.SUCCESS) {
        toast.success(result?.MESSAGE);
        navigate("/thanh-vien/xac-nhan-otp", { state: validInput });
      }
    } catch (error) {
      AxiosToastError(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
          isAutoFocus
        />
        <ButtonComponent
          title={"Lấy lại mật khẩu"}
          color="orange"
          isUppercase
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

export default ForgotPassword;
