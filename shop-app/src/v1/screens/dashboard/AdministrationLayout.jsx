import Header from "@/v1/components/manage/layouts/Header";
import SideBar from "@/v1/components/manage/layouts/SideBar";
import ToastLoading from "@/v1/components/manage/ui/ToastLoading";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

const AdministrationLayout = () => {
  const [showSideBar, setShowSideBar] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(false);

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
    <div className="h-screen flex flex-col bg-gray-200">
      <Header handleShowSideBar={handleShowSideBar} onShow={showSideBar} />

      <div className="flex fle-col flex-1 overflow-hidden">
        <SideBar onShow={showSideBar} onClose={handleShowSideBar} />

        <div className="flex-1 overflow-y-auto w-full h-full p-2">
          {/* <div className="p-2 bg-white h-full w-full rounded-md"> */}
          <Outlet />
          {/* </div> */}
        </div>
      </div>

      {loading && <ToastLoading />}
    </div>
  );
};

export default AdministrationLayout;
