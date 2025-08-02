import { Link } from "react-router-dom";
import ButtonComponent from "../../components/ui/ButtonComponent";
import FormInput from "../../components/ui/FormInput";
import Text from "../../components/ui/Text";
import TitleCategoryList from "../../components/ui/TitleCategoryList";

const ChangePassword = () => {
  return (
    <section>
      <TitleCategoryList title={"Đổi mật khẩu  "} isUppercase />

      <div className="flex flex-col gap-4">
        <FormInput placeholder={"Mật khẩu"} isAutoFocus />
        <FormInput placeholder={"Nhập lại mật khẩu"} />
        <ButtonComponent title={"Đổi mật khẩu"} color="orange" isUppercase />
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

export default ChangePassword;
