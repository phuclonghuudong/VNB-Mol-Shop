import { Route, Routes } from "react-router-dom";
import AuthLayout from "../screens/auth/AuthLayout";
import LoginScreen from "../screens/auth/LoginScreen";
import RegisterScreen from "../screens/auth/RegisterScreen";

const AuthRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="dang-ky" element={<RegisterScreen />} />
        <Route path="dang-nhap" element={<LoginScreen />} />
      </Route>
    </Routes>
  );
};

export default AuthRouter;
