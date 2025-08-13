import { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import accountAPI from "../../apis/accountApi";
import ButtonComponent from "../../components/ui/ButtonComponent";
import FormInput from "../../components/ui/FormInput";
import Text from "../../components/ui/Text";
import TitleCategoryList from "../../components/ui/TitleCategoryList";
import AxiosToastError from "../../utils/AxiosToastError";

const LoginScreen = () => {
  const [validInput, setValidInput] = useState({
    username: "",
    password: "",
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

  const validateValue = Object.values(validInput).every((el) => el);

  const fetchApiLogin = async () => {
    try {
      const result = await accountAPI.logIn_Customer(validInput);

      if (result?.SUCCESS) {
        toast.success(result?.MESSAGE);
      }
    } catch (error) {
      AxiosToastError(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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
          isAutoFocus
        />

        <FormInput
          id={"password"}
          value={validInput.password}
          placeholder={"Mật khẩu"}
          onChange={handleOnchange}
          isPassword
        />

        <ButtonComponent
          title={"Đăng nhập"}
          color="orange"
          isUppercase
          isDisabled={!validateValue}
        />
      </form>

      <div className=" flex justify-between ">
        <Link to={"/thanh-vien/quen-mat-khau"}>
          <Text title="Quên mật khẩu" isSize={"text-md"} isHover />
        </Link>
        <Link to={"/thanh-vien/dang-ky"}>
          <Text title="Đăng ký tại đây" isSize={"text-md"} isHover />
        </Link>
      </div>
    </section>
  );
};

export default LoginScreen;
