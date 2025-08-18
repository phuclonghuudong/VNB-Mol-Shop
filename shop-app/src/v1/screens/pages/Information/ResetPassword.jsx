import ButtonComponent from "@/v1/components/shop/ui/ButtonComponent";
import FormInput from "@/v1/components/shop/ui/FormInput";
import Text from "@/v1/components/shop/ui/Text";

const ResetPassword = () => {
  return (
    <div className="w-full">
      <Text title="Đổi mật khẩu" isBold isSize={"text-2xl"} />

      <div className="grid gap-4">
        <FormInput title={"Mật khẩu hiện tại:"} />
        <FormInput title={"Mật khẩu mới:"} />
        <FormInput title={"Nhập lại mật khẩu mới:"} />

        <ButtonComponent title={"Đổi mật khẩu"} color="orange" isUppercase />
      </div>
    </div>
  );
};

export default ResetPassword;
