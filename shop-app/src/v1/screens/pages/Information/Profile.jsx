import ButtonComponent from "../../../components/ui/ButtonComponent";
import FormInput from "../../../components/ui/FormInput";
import Text from "../../../components/ui/Text";

const Profile = () => {
  return (
    <div className="w-full">
      <Text title="Thông tin tài khoản" isBold isSize={"text-2xl"} />

      <div className="grid gap-4">
        <FormInput title={"Email*"} />
        <FormInput title={"Họ tên*"} />
        <FormInput title={"Số điện thoại*"} />

        <ButtonComponent title={"Cập nhật"} color="orange" isUppercase />
      </div>
    </div>
  );
};

export default Profile;
