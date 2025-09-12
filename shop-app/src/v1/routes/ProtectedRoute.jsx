import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import ROUTES_SHOP from "../configs/configRoutesShop";
import { authSelector } from "../redux/reducers/authReducer";

const ProtectedRoute = ({ allowedRoles, children }) => {
  const authAccount = useSelector(authSelector);
  const role = authAccount?.user?.role;

  if (!role || !allowedRoles.includes(role)) {
    return <Navigate to={ROUTES_SHOP?.SHOP?.HOME} replace />;
  }

  return children;
};

export default ProtectedRoute;
