import { Route, Routes } from "react-router-dom";
import AdministrationLayout from "../screens/dashboard/AdministrationLayout";
import DashBoard from "../screens/dashboard/DashBoard";
import ManageBrand from "../screens/dashboard/ManageBrand";
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
        <Route path="thuong-hieu" element={<ManageBrand />} />
      </Route>
    </Routes>
  );
};

export default Administration;
