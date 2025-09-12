import ButtonComponent from "@/v1/components/shop/ui/ButtonComponent";
import Text from "@/v1/components/shop/ui/Text";
import { useNavigate } from "react-router-dom";
import ROUTES_SHOP from "../../../configs/configRoutesShop";
import Profile from "./Profile";
import ResetPassword from "./ResetPassword";

const Information = () => {
  const navigate = useNavigate();
  return (
    <section className="mx-auto pb-4 w-8/10">
      <div className="lg:px-12 lg:pb-8 px-4  flex flex-col">
        <Text
          title={"Trang Thông tin tài khoản"}
          isUppercase
          isSize={"text-xl"}
        />

        <div className="lg:w-2/10 sm:w-2/4 w-full">
          <ButtonComponent
            title={"Quay lại"}
            color="orange"
            onClick={() => navigate(ROUTES_SHOP?.SHOP?.ACCOUNT)}
            isUppercase
          />
        </div>

        <Profile />
        <ResetPassword />
      </div>
    </section>
  );
};

export default Information;
