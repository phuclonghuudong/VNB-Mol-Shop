import { Route, Routes } from "react-router-dom";

import HomeScreen from "../screens/pages/Home/HomeScreen";
import MainLayout from "../screens/pages/MainLayout";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomeScreen />} />
      </Route>
    </Routes>
  );
};

export default MainRouter;
