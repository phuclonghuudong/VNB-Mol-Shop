import accountAPI from "@/v1/apis/accountApi";
import ButtonComponent from "@/v1/components/shop/ui/ButtonComponent";
import FormInput from "@/v1/components/shop/ui/FormInput";
import Text from "@/v1/components/shop/ui/Text";
import TitleCategoryList from "@/v1/components/shop/ui/TitleCategoryList";
import { addAuth } from "@/v1/redux/reducers/authReducer";
import AxiosToastError from "@/v1/utils/AxiosToastError";
import { isAllFieldsFilledAuth } from "@/v1/utils/isAllFieldsFilledAuth";
import { roleRedirectLogin } from "@/v1/utils/roleRedirect";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ROUTES_SHOP from "../../configs/configRoutesShop";

const RegisterScreen = () => {
  const [validInput, setValidInput] = useState({
    username: "",
    fullname: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [checkValid, setCheckValid] = useState(true);
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

  const fetchApiSignUp = async () => {
    try {
      setLoading(true);
      const result = await accountAPI.signUp_Customer(validInput);

      if (result?.SUCCESS) {
        toast.success(result?.MESSAGE);
        result?.DATA && dispatch(addAuth(result?.DATA));
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

    if (!isValid) {
      setCheckValid(isValid);
      return;
    }
    fetchApiSignUp();
  };

  return (
    <section>
      <TitleCategoryList title={"Đăng ký "} isUppercase />
      <div className=" flex justify-center items-center gap-1">
        <Text title="Đã đó tài khoản, đăng nhập " isSize={"text-md"} />
        <Link to={ROUTES_SHOP?.AUTH?.LOGIN}>
          <Text
            title="tại đây"
            isSize={"text-md"}
            isHover
            isCursor
            isColor={"text-orange-700"}
          />
        </Link>
      </div>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <FormInput
          id={"fullname"}
          placeholder={"Nhập tên của bạn (*)"}
          onChange={handleOnchange}
          isValidNull={checkValid}
          isAutoFocus
        />
        <FormInput
          id={"username"}
          value={validInput.username}
          placeholder={"Nhập tên đăng nhập (*)"}
          isValidNull={checkValid}
          onChange={handleOnchange}
        />
        <FormInput
          id={"email"}
          value={validInput.email}
          placeholder={"Nhập Email của bạn (*)"}
          isValidNull={checkValid}
          onChange={handleOnchange}
        />
        <FormInput
          id={"phone"}
          value={validInput.phone}
          placeholder={"Số điện thoại"}
          isValidNull={checkValid}
          onChange={handleOnchange}
        />
        <FormInput
          id={"password"}
          value={validInput.password}
          placeholder={"Mật khẩu"}
          isValidNull={checkValid}
          onChange={handleOnchange}
          isPassword
        />
        <FormInput
          id={"confirmPassword"}
          value={validInput.confirmPassword}
          placeholder={"Nhập lại mật khẩu"}
          isValidNull={checkValid}
          onChange={handleOnchange}
          isPassword
        />

        <ButtonComponent
          title={"Đăng ký"}
          color="orange"
          isUppercase
          isLoading={loading}
        />
      </form>
    </section>
  );
};

export default RegisterScreen;
