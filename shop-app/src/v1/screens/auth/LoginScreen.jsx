import { Link } from "react-router-dom";
import ButtonComponent from "../../components/ui/ButtonComponent";
import FormInput from "../../components/ui/FormInput";
import Text from "../../components/ui/Text";
import TitleCategoryList from "../../components/ui/TitleCategoryList";

const LoginScreen = () => {
  return (
    <section>
      <TitleCategoryList title={"Đăng nhập  "} isUppercase />

      <div className="flex flex-col gap-4">
        <FormInput placeholder={"Email/ Số ĐT/ Tên đăng nhập"} isAutoFocus />
        <FormInput placeholder={"Mật khẩu"} />
        <ButtonComponent title={"Đăng nhập"} color="orange" isUppercase />
      </div>

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
