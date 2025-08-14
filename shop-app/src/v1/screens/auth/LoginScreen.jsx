import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import accountAPI from "../../apis/accountApi";
import ButtonComponent from "../../components/ui/ButtonComponent";
import FormInput from "../../components/ui/FormInput";
import Text from "../../components/ui/Text";
import TitleCategoryList from "../../components/ui/TitleCategoryList";
import ROUTES from "../../configs/configRoutes";
import { addAuth } from "../../redux/reducers/authReducer";
import AxiosToastError from "../../utils/AxiosToastError";
import { isAllFieldsFilledAuth } from "../../utils/isAllFieldsFilledAuth";

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
        navigate(ROUTES?.HOME);
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
