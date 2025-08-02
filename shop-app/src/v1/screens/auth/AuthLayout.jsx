import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex items-center justify-center backgroundImageAccount p-2">
      <div className="w-full max-w-lg p-6 bg-white rounded shadow ">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
