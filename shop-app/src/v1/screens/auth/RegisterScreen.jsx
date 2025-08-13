import { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import accountAPI from "../../apis/accountApi";
import ButtonComponent from "../../components/ui/ButtonComponent";
import FormInput from "../../components/ui/FormInput";
import Text from "../../components/ui/Text";
import TitleCategoryList from "../../components/ui/TitleCategoryList";
import AxiosToastError from "../../utils/AxiosToastError";

const RegisterScreen = () => {
  const [validInput, setValidInput] = useState({
    username: "",
    fullname: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

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
      const result = await accountAPI.signUp_Customer(validInput);

      if (result?.SUCCESS) {
        toast.success(result?.MESSAGE);
      }
    } catch (error) {
      AxiosToastError(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetchApiSignUp();
  };

  return (
    <section>
      <TitleCategoryList title={"Đăng ký "} isUppercase />
      <div className=" flex justify-center items-center gap-1">
        <Text title="Đã đó tài khoản, đăng nhập " isSize={"text-md"} />
        <Link to={"/thanh-vien/dang-nhap"}>
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
          isAutoFocus
        />
        <FormInput
          id={"username"}
          value={validInput.username}
          placeholder={"Nhập tên đăng nhập (*)"}
          onChange={handleOnchange}
        />
        <FormInput
          id={"email"}
          value={validInput.email}
          placeholder={"Nhập Email của bạn (*)"}
          onChange={handleOnchange}
        />
        <FormInput
          id={"phone"}
          value={validInput.phone}
          placeholder={"Số điện thoại"}
          onChange={handleOnchange}
        />
        <FormInput
          id={"password"}
          value={validInput.password}
          placeholder={"Mật khẩu"}
          onChange={handleOnchange}
          isPassword
        />
        <FormInput
          id={"confirmPassword"}
          value={validInput.confirmPassword}
          placeholder={"Nhập lại mật khẩu"}
          onChange={handleOnchange}
          isPassword
        />

        <ButtonComponent title={"Đăng ký"} color="orange" isUppercase />
      </form>
    </section>
  );
};

export default RegisterScreen;
