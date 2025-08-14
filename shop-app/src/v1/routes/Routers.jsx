import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { localDataNames } from "../configs/appInfo";
import { addAuth, authSelector } from "../redux/reducers/authReducer";
import Administration from "./Administration";
import AuthRouter from "./AuthRouter";
import MainRouter from "./MainRouter";

const Routers = () => {
  const dispatch = useDispatch();
  const auth = useSelector(authSelector);
  console.log("CHECK AUTH: ", auth);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = localStorage.getItem(localDataNames.authData);
    res && dispatch(addAuth(JSON.parse(res)));
  };
  return (
    <Routes>
      <Route path="/thanh-vien/*" element={<AuthRouter />} />
      <Route path="/quan-tri/*" element={<Administration />} />
      <Route path="/*" element={<MainRouter />} />
    </Routes>
  );
};

export default Routers;
