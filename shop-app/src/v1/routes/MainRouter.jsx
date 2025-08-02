import { Route, Routes } from "react-router-dom";

import CheckOrderScreen from "../screens/pages/CheckOrder/CheckOrderScreen";
import CheckWarrantyScreen from "../screens/pages/CheckWarranty/CheckWarrantyScreen";
import ContactScreen from "../screens/pages/Contact/ContactScreen";
import HomeScreen from "../screens/pages/Home/HomeScreen";
import MainLayout from "../screens/pages/MainLayout";
import NewsScreen from "../screens/pages/News/NewsScreen";
import ProductScreen from "../screens/pages/Product/ProductScreen";
import SaleOffScreen from "../screens/pages/SaleOff/SaleOffScreen";
import ShoppingCartScreen from "../screens/pages/ShoppingCart/ShoppingCartScreen";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomeScreen />} />
        <Route path="/san-pham" element={<ProductScreen />} />
        <Route path="/thanh-ly" element={<SaleOffScreen />} />
        <Route path="/lien-he" element={<ContactScreen />} />
        <Route path="/tin-tuc" element={<NewsScreen />} />
        <Route path="/kiem-tra-don-hang" element={<CheckOrderScreen />} />
        <Route path="/kiem-tra-bao-hanh" element={<CheckWarrantyScreen />} />
        <Route path="/gio-hang" element={<ShoppingCartScreen />} />
      </Route>
    </Routes>
  );
};

export default MainRouter;
