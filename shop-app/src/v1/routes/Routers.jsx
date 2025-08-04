import { Route, Routes } from "react-router-dom";
import Administration from "./Administration";
import AuthRouter from "./AuthRouter";
import MainRouter from "./MainRouter";

const Routers = () => {
  return (
    <Routes>
      <Route path="/thanh-vien/*" element={<AuthRouter />} />
      <Route path="/quan-tri/*" element={<Administration />} />
      <Route path="/*" element={<MainRouter />} />
    </Routes>
  );
};

export default Routers;
