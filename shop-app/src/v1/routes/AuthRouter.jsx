import { Route, Routes } from "react-router-dom";
import ROUTES_SHOP from "../configs/configRoutesShop";
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
        <Route
          path={`${ROUTES_SHOP.RELATIVE_AUTH.REGISTER}`}
          element={<RegisterScreen />}
        />
        <Route
          path={`${ROUTES_SHOP.RELATIVE_AUTH.LOGIN}`}
          element={<LoginScreen />}
        />
        <Route
          path={`${ROUTES_SHOP.RELATIVE_AUTH.FORGOT_PASSWORD}`}
          element={<ForgotPassword />}
        />
        <Route
          path={`${ROUTES_SHOP.RELATIVE_AUTH.VERIFY_OTP}`}
          element={<ConFirmOTP />}
        />
        <Route
          path={`${ROUTES_SHOP.RELATIVE_AUTH.RESET_PASSWORD}`}
          element={<ChangePassword />}
        />
      </Route>
    </Routes>
  );
};

export default AuthRouter;
