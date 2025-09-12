import ROUTES_MANAGEMENT from "../configs/configRoutesManagement";
import ROUTES_SHOP from "../configs/configRoutesShop";

export const roleRedirectLogin = (role, navigate) => {
  const roleRoutes = {
    CUSTOMER: ROUTES_SHOP?.SHOP?.HOME,
    ADMIN: ROUTES_MANAGEMENT?.ABSOLUTE.DASHBOARD,
    PERSONNEL: ROUTES_MANAGEMENT?.ABSOLUTE.DASHBOARD,
  };
  const path = roleRoutes[role] || ROUTES_SHOP?.SHOP?.HOME;

  navigate(path);
};
