import ROUTES from "../configs/configRoutes";

export const roleRedirectLogin = (role, navigate) => {
  const roleRoutes = {
    KHACHHANG: ROUTES?.HOME,
    ADMIN: ROUTES?.ADMIN_DASHBOARD,
    NHANVIEN: ROUTES?.ADMIN_DASHBOARD,
  };

  if (roleRoutes[role]) {
    navigate(roleRoutes[role]);
  } else {
    navigate(ROUTES?.HOME);
  }
};
