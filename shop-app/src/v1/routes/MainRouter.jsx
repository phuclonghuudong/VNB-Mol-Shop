import { Route, Routes } from "react-router-dom";

import HomeScreen from "../screens/pages/Home/HomeScreen";
import MainLayout from "../screens/pages/MainLayout";
import ProductScreen from "../screens/pages/Product/ProductScreen";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomeScreen />} />
        <Route path="/san-pham" element={<ProductScreen />} />
      </Route>
    </Routes>
  );
};

export default MainRouter;
