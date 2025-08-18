import ButtonComponent from "@/v1/components/shop/ui/ButtonComponent";
import Icon from "@/v1/components/shop/ui/Icon";
import Text from "@/v1/components/shop/ui/Text";
import ROUTES from "@/v1/configs/configRoutes";
import { authSelector } from "@/v1/redux/reducers/authReducer";
import { FaUser } from "react-icons/fa";
import { FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const authAccount = useSelector(authSelector);
  console.log(authAccount);
  const navigate = useNavigate();

  const handleClickUpdate = () => {
    navigate(ROUTES?.INFORMATION);
  };

  const TitleInfo = ({ icon: ICON, title, text }) => {
    return (
      <div className="flex items-center gap-1">
        <Icon icon={ICON} isSize={18} />
        <Text title={title} isBold isSize={"text-md"} />
        <Text title={text} isSize={"text-md"} />
      </div>
    );
  };
  return (
    <div className="lg:w-2/7 md:w-3/10  w-full py-2">
      <Text
        title={"Thông tin khách hàng"}
        isUppercase
        isSize={"text-xl"}
        isPadding={"py-0"}
      />
      <div>
        <TitleInfo
          icon={FaUser}
          title="Họ và tên:"
          text={authAccount?.fullname ?? ""}
        />
        <TitleInfo
          icon={FaPhoneVolume}
          title="Số ĐT:"
          text={authAccount?.phone ?? ""}
        />
        <TitleInfo
          icon={FaLocationDot}
          title="Địa chỉ:"
          text={authAccount?.address ?? ""}
        />

        <ButtonComponent
          title={"Sửa thông tin"}
          color="orange"
          onClick={handleClickUpdate}
        />
      </div>
    </div>
  );
};

export default Profile;
