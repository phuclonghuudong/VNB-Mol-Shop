import { Route, Routes } from "react-router-dom";
import AdministrationLayout from "../screens/dashboard/AdministrationLayout";
import DashBoard from "../screens/dashboard/DashBoard";
import ManageBrand from "../screens/dashboard/ManageBrand";

const Administration = () => {
  return (
    <Routes>
      <Route path="/" element={<AdministrationLayout />}>
        <Route path="" element={<DashBoard />} />
        <Route path="thuong-hieu" element={<ManageBrand />} />
      </Route>
    </Routes>
  );
};

export default Administration;
