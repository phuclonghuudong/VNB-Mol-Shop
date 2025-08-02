import { Link, useNavigate } from "react-router-dom";
import ButtonComponent from "../../components/ui/ButtonComponent";
import FormInput from "../../components/ui/FormInput";
import Text from "../../components/ui/Text";
import TitleCategoryList from "../../components/ui/TitleCategoryList";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/thanh-vien/xac-nhan-otp");
  };
  return (
    <section>
      <TitleCategoryList title={"Quên mật khẩu"} isUppercase />

      <div className="flex flex-col gap-4">
        <FormInput placeholder={"Email"} isAutoFocus />
        <ButtonComponent
          title={"Lấy lại mật khẩu"}
          color="orange"
          isUppercase
          onClick={handleSubmit}
        />
      </div>

      <div className="text-right ">
        <Link to={"/thanh-vien/dang-nhap"}>
          <Text title="Đăng nhập tại đây" isSize={"text-md"} isHover />
        </Link>
      </div>
    </section>
  );
};

export default ForgotPassword;
