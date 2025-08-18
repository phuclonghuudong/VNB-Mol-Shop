import accountAPI from "@/v1/apis/accountApi";
import ButtonComponent from "@/v1/components/shop/ui/ButtonComponent";
import FormInput from "@/v1/components/shop/ui/FormInput";
import Text from "@/v1/components/shop/ui/Text";
import TitleCategoryList from "@/v1/components/shop/ui/TitleCategoryList";
import ROUTES from "@/v1/configs/configRoutes";
import { addAuth } from "@/v1/redux/reducers/authReducer";
import AxiosToastError from "@/v1/utils/AxiosToastError";
import { isAllFieldsFilledAuth } from "@/v1/utils/isAllFieldsFilledAuth";
import { roleRedirectLogin } from "@/v1/utils/roleRedirect";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const [validInput, setValidInput] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const [checkValid, setCheckValid] = useState(true);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleOnchange = (event) => {
    const { name, value } = event.target;

    setValidInput((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };

  const fetchApiLogin = async () => {
    setLoading(true);
    try {
      const result = await accountAPI.logIn_Customer(validInput);

      if (result?.SUCCESS) {
        result?.DATA && dispatch(addAuth(result.DATA));
        toast.success(result?.MESSAGE);
        roleRedirectLogin(result?.DATA?.USER?.role, navigate);
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
    setCheckValid(isValid);

    if (!isValid) return;

    fetchApiLogin();
  };

  return (
    <section>
      <TitleCategoryList title={"Đăng nhập  "} isUppercase />

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <FormInput
          id={"username"}
          value={validInput.username}
          placeholder={"Email/ Số ĐT/ Tên đăng nhập"}
          onChange={handleOnchange}
          isValidNull={checkValid}
          isAutoFocus
        />

        <FormInput
          id={"password"}
          value={validInput.password}
          placeholder={"Mật khẩu"}
          onChange={handleOnchange}
          isValidNull={checkValid}
          isPassword
        />

        <ButtonComponent
          title={"Đăng nhập"}
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

export default LoginScreen;
