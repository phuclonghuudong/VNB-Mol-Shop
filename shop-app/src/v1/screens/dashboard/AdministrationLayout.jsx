import { Outlet } from "react-router-dom";
import Header from "../../components/manage/Header";
import SideBar from "../../components/manage/SideBar";

const AdministrationLayout = () => {
  return (
    <div className="min-h-screen flex bg-gray-200">
      <SideBar />

      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />

        {/* Page Content */}
        <div className="flex-1 p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdministrationLayout;
