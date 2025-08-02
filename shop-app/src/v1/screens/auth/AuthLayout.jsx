import { Link, Outlet } from "react-router-dom";
import TitleCategoryList from "../../components/ui/TitleCategoryList";

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center backgroundImageAccount p-2 gap-5">
      <div className="w-full max-w-lg p-6 bg-white rounded shadow ">
        <Outlet />
      </div>
      <div className="w-full max-w-lg p-6 bg-white rounded shadow ">
        <Link to={"/"}>
          <TitleCategoryList title={"Molxipi shop  "} isUppercase />
        </Link>
      </div>
    </div>
  );
};

export default AuthLayout;
