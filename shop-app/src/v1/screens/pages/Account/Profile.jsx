import ButtonComponent from "@/v1/components/shop/ui/ButtonComponent";
import Icon from "@/v1/components/shop/ui/Icon";
import Text from "@/v1/components/shop/ui/Text";
import { authSelector } from "@/v1/redux/reducers/authReducer";
import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import accountAPI from "../../../apis/accountApi";
import ROUTES_SHOP from "../../../configs/configRoutesShop";
import AxiosToastError from "../../../utils/AxiosToastError";

const Profile = () => {
  const authAccount = useSelector(authSelector);
  const [info, setInfo] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleClickUpdate = () => {
    navigate(ROUTES_SHOP?.AUTH?.INFORMATION);
  };

  useEffect(() => {
    fetchInfoAccount();
  }, [authAccount]);

  const fetchInfoAccount = async () => {
    setLoading(true);
    try {
      const res = await accountAPI.profile_Customer();

      if (res?.SUCCESS) {
        setInfo(res?.DATA?.USER);
      }
    } catch (error) {
      AxiosToastError(error);
    } finally {
      setLoading(false);
    }
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
          text={info?.fullname ?? ""}
        />
        <TitleInfo
          icon={FaPhoneVolume}
          title="Số ĐT:"
          text={info?.phone ?? ""}
        />
        <TitleInfo
          icon={FaLocationDot}
          title="Địa chỉ:"
          text={info?.address ?? ""}
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
