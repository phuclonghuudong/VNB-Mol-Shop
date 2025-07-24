import { Outlet } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import Footer from "../../components/layouts/Footer";
import Header from "../../components/layouts/Header";
import MenuTaskbar from "../../components/layouts/MenuTaskbar";

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
