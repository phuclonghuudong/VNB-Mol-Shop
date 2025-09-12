import { Route, Routes } from "react-router-dom";
import ROUTES_MANAGEMENT from "../configs/configRoutesManagement";
import AdministrationLayout from "../screens/dashboard/AdministrationLayout";
import ManageBrand from "../screens/dashboard/Brand/ManageBrand";
import ManageCategory from "../screens/dashboard/Category/ManageCategory";
import ManageCategoryProduct from "../screens/dashboard/CategoryProduct/ManageCategoryProduct";
import ManageColor from "../screens/dashboard/Color/ManageColor";
import DashBoard from "../screens/dashboard/DashBoard/DashBoard";
import ManagementCatalog from "../screens/dashboard/ManagementCatalog/ManagementCatalog";
import ManageProduct from "../screens/dashboard/Product/ManageProduct";
import ManageSize from "../screens/dashboard/Size/ManageSize";
import ManageVariationCatalog from "../screens/dashboard/VariationCatalog.jsx/ManageVariationCatalog";
import ProtectedRoute from "./ProtectedRoute";

const Administration = () => {
  const routesManagementCatalog = "/quan-ly-danh-muc";
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute allowedRoles={["ADMIN", "PERSONNEL"]}>
            <AdministrationLayout />
          </ProtectedRoute>
        }
      >
        <Route path="" element={<DashBoard />} />
        <Route
          path={`${ROUTES_MANAGEMENT.RELATIVE.MANAGEMENT_CATALOG}`}
          element={<ManagementCatalog />}
        />
        <Route
          path={`${ROUTES_MANAGEMENT.RELATIVE.MANAGEMENT_CATEGORY}`}
          element={<ManageCategory />}
        />

        <Route
          path={`${ROUTES_MANAGEMENT.RELATIVE.MANAGEMENT_BRAND}`}
          element={<ManageBrand />}
        />

        <Route
          path={`${ROUTES_MANAGEMENT.RELATIVE.MANAGEMENT_CATEGORY_PRODUCT}`}
          element={<ManageCategoryProduct />}
        />

        <Route
          path={`${ROUTES_MANAGEMENT.RELATIVE.MANAGEMENT_SIZE}`}
          element={<ManageSize />}
        />

        <Route
          path={`${ROUTES_MANAGEMENT.RELATIVE.MANAGEMENT_COLOR}`}
          element={<ManageColor />}
        />

        <Route
          path={`/danh-muc-loai-bien-the`}
          element={<ManageVariationCatalog />}
        />
        <Route path="/quan-ly-san-pham" element={<ManageProduct />} />
      </Route>
    </Routes>
  );
};

export default Administration;
