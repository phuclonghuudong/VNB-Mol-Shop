import ROUTES from "../configs/configRoutes";

export const roleRedirectLogin = (role, navigate) => {
  const roleRoutes = {
    CUSTOMER: ROUTES?.HOME,
    ADMIN: ROUTES?.ADMIN_DASHBOARD,
    PERSONNEL: ROUTES?.ADMIN_DASHBOARD,
  };
  const path = roleRoutes[role] || ROUTES?.HOME;

  navigate(path);
};
