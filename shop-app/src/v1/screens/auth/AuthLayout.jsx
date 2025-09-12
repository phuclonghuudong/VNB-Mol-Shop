import TitleCategoryList from "@/v1/components/shop/ui/TitleCategoryList";
import ROUTES_SHOP from "@/v1/configs/configRoutesShop";
import { Link, Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center backgroundImageAccount p-2 gap-5">
      <div className="w-full max-w-lg p-6 bg-white rounded shadow ">
        <Outlet />
      </div>
      <div className="w-full max-w-lg p-6 bg-white rounded shadow ">
        <Link to={ROUTES_SHOP?.SHOP?.HOME}>
          <TitleCategoryList title={"Molxipi shop  "} isUppercase />
        </Link>
      </div>
    </div>
  );
};

export default AuthLayout;
