import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/manage/layouts/Header";
import SideBar from "../../components/manage/layouts/SideBar";

const AdministrationLayout = () => {
  const [showSideBar, setShowSideBar] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      setShowSideBar(!mobile);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleShowSideBar = () => {
    if (isMobile) {
      setShowSideBar((pre) => !pre);
    } else {
      setShowSideBar((pre) => !pre);
    }
  };
  return (
    <div className="min-h-screen flex flex-col bg-gray-200">
      <Header handleShowSideBar={handleShowSideBar} onShow={showSideBar} />

      <div className="flex-1 w-full flex transition-all duration-300">
        <SideBar onShow={showSideBar} onClose={handleShowSideBar} />

        <div className="flex-1 w-full overflow-y-auto lg:p-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdministrationLayout;
