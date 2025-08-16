import { Route, Routes } from "react-router-dom";
import AdministrationLayout from "../screens/dashboard/AdministrationLayout";
import ManageBrand from "../screens/dashboard/Brand/ManageBrand";
import ManageCategory from "../screens/dashboard/Category/ManageCategory";
import DashBoard from "../screens/dashboard/DashBoard/DashBoard";
import ManageProduct from "../screens/dashboard/Product/ManageProduct";
import ManageVariationCatalog from "../screens/dashboard/VariationCatalog.jsx/ManageVariationCatalog";
import ProtectedRoute from "./ProtectedRoute";

const Administration = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute allowedRoles={["ADMIN", "NHANVIEN"]}>
            <AdministrationLayout />
          </ProtectedRoute>
        }
      >
        <Route path="" element={<DashBoard />} />
        <Route path="/danh-muc-san-pham" element={<ManageCategory />} />
        <Route path="/danh-muc-thuong-hieu" element={<ManageBrand />} />
        <Route
          path="/danh-muc-loai-bien-the"
          element={<ManageVariationCatalog />}
        />
        <Route path="/quan-ly-san-pham" element={<ManageProduct />} />
      </Route>
    </Routes>
  );
};

export default Administration;
