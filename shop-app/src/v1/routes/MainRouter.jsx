import { Route, Routes } from "react-router-dom";

import ContactScreen from "../screens/pages/Contact/ContactScreen";
import HomeScreen from "../screens/pages/Home/HomeScreen";
import MainLayout from "../screens/pages/MainLayout";
import NewsScreen from "../screens/pages/News/NewsScreen";
import ProductScreen from "../screens/pages/Product/ProductScreen";
import SaleOffScreen from "../screens/pages/SaleOff/SaleOffScreen";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomeScreen />} />
        <Route path="/san-pham" element={<ProductScreen />} />
        <Route path="/thanh-ly" element={<SaleOffScreen />} />
        <Route path="/lien-he" element={<ContactScreen />} />
        <Route path="/tin-tuc" element={<NewsScreen />} />
      </Route>
    </Routes>
  );
};

export default MainRouter;
