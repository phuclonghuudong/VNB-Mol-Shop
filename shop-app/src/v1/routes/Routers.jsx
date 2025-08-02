import { Route, Routes } from "react-router-dom";
import AuthRouter from "./AuthRouter";
import MainRouter from "./MainRouter";

const Routers = () => {
  return (
    <Routes>
      <Route path="/thanh-vien/*" element={<AuthRouter />} />
      <Route path="/*" element={<MainRouter />} />
    </Routes>
  );
};

export default Routers;
