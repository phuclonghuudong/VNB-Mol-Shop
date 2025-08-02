import { Route, Routes } from "react-router-dom";
import AuthLayout from "../screens/auth/AuthLayout";
import ChangePassword from "../screens/auth/ChangePassword";
import ConFirmOTP from "../screens/auth/ConFirmOTP";
import ForgotPassword from "../screens/auth/ForgotPassword";
import LoginScreen from "../screens/auth/LoginScreen";
import RegisterScreen from "../screens/auth/RegisterScreen";

const AuthRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="dang-ky" element={<RegisterScreen />} />
        <Route path="dang-nhap" element={<LoginScreen />} />
        <Route path="quen-mat-khau" element={<ForgotPassword />} />
        <Route path="xac-nhan-otp" element={<ConFirmOTP />} />
        <Route path="doi-mat-khau" element={<ChangePassword />} />
      </Route>
    </Routes>
  );
};

export default AuthRouter;
