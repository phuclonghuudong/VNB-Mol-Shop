import Text from "@/v1/components/shop/ui/Text";
import { authSelector } from "@/v1/redux/reducers/authReducer";
import { useSelector } from "react-redux";
import Profile from "./Profile";
import ShoppingCart from "./ShoppingCart";

const Account = () => {
  const authAccount = useSelector(authSelector);
  return (
    <section className="mx-auto pb-4">
      <div className="lg:px-12 lg:pb-8 px-4  flex flex-col">
        <Text title={"Thông tin tài khoản"} isUppercase isBold />

        <div className="flex justify-start items-center gap-2 pb-3">
          <Text title={"Xin chào,"} isItalic isPadding={""} />
          {authAccount?.USER?.fullname && (
            <Text
              title={authAccount?.USER?.fullname || ""}
              isColor={"text-orange-600"}
              isPadding={""}
              isBold
            />
          )}
        </div>

        <div className="flex flex-col md:flex-row justify-start items-start w-full gap-4">
          <Profile />
          <ShoppingCart />
        </div>
      </div>
    </section>
  );
};

export default Account;
