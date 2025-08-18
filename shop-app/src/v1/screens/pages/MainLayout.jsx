import Footer from "@/v1/components/shop/layouts/Footer";
import Header from "@/v1/components/shop/layouts/Header";
import MenuTaskbar from "@/v1/components/shop/layouts/MenuTaskbar";
import { Outlet } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="w-full h-full">
        <Header />
        <MenuTaskbar />
      </div>
      <main className="w-full flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
