import { Route, Routes } from "react-router-dom";

import ROUTES_SHOP from "../configs/configRoutesShop";
import Account from "../screens/pages/Account/Account";
import CheckOrderScreen from "../screens/pages/CheckOrder/CheckOrderScreen";
import CheckWarrantyScreen from "../screens/pages/CheckWarranty/CheckWarrantyScreen";
import ContactScreen from "../screens/pages/Contact/ContactScreen";
import HomeScreen from "../screens/pages/Home/HomeScreen";
import Information from "../screens/pages/Information/Information";
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
        <Route
          path={`${ROUTES_SHOP?.SHOP?.PRODUCT || "/"}`}
          element={<ProductScreen />}
        />
        <Route
          path={`${ROUTES_SHOP?.SHOP?.SALE_OFF || "/"}`}
          element={<SaleOffScreen />}
        />
        <Route
          path={`${ROUTES_SHOP?.SHOP?.CONTACT || "/"}`}
          element={<ContactScreen />}
        />
        <Route
          path={`${ROUTES_SHOP?.SHOP?.NEWS || "/"}`}
          element={<NewsScreen />}
        />
        <Route
          path={`${ROUTES_SHOP?.SHOP?.CHECK_ORDER || "/"}`}
          element={<CheckOrderScreen />}
        />
        <Route
          path={`${ROUTES_SHOP?.SHOP?.CHECK_WARRANTY || "/"}`}
          element={<CheckWarrantyScreen />}
        />
        <Route
          path={`${ROUTES_SHOP?.SHOP?.SHOPPING_CART || "/"}`}
          element={<ShoppingCartScreen />}
        />
        <Route
          path={`${ROUTES_SHOP?.SHOP?.ACCOUNT || "/"}`}
          element={<Account />}
        />
        <Route
          path={`${ROUTES_SHOP?.SHOP?.INFORMATION || "/"}`}
          element={<Information />}
        />
      </Route>
    </Routes>
  );
};

export default MainRouter;
