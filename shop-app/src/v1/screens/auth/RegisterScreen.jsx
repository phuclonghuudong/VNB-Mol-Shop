import { Link } from "react-router-dom";
import ButtonComponent from "../../components/ui/ButtonComponent";
import FormInput from "../../components/ui/FormInput";
import Text from "../../components/ui/Text";
import TitleCategoryList from "../../components/ui/TitleCategoryList";

const RegisterScreen = () => {
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

      <div className="flex flex-col gap-4">
        <FormInput placeholder={"Nhập tên của bạn (*)"} isAutoFocus />
        <FormInput placeholder={"Nhập tên đăng nhập (*)"} />
        <FormInput placeholder={"Nhập Email của bạn (*)"} />
        <FormInput placeholder={"Số điện thoại"} />
        <FormInput placeholder={"Mật khẩu"} />
        <FormInput placeholder={"Nhập lại mật khẩu"} />
        <ButtonComponent title={"Đăng ký"} color="orange" isUppercase />
      </div>
    </section>
  );
};

export default RegisterScreen;
