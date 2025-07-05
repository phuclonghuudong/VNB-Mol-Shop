import { Outlet } from "react-router-dom";
import Footer from "../../components/layouts/Footer";
import Header from "../../components/layouts/Header";
import MenuTaskbar from "../../components/layouts/MenuTaskbar";

const MainLayout = () => {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <div className="w-full h-full">
        <Header />
        <MenuTaskbar />
      </div>
      <main className="bg-white">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
