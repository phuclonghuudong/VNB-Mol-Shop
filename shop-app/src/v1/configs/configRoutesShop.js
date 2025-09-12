const AUTH_BASE = "/thanh-vien";
const ACCOUNT_BASE = "/tai-khoan";

const withAuth = (path = "") => `${AUTH_BASE}${path}`;
const withAccount = (path = "") => `${ACCOUNT_BASE}${path}`;

const rel = (path = "") => (path.startsWith("/") ? path.slice(1) : path);

const ROUTES_SHOP = {
  SHOP: {
    HOME: "/",
    PRODUCT: "/san-pham",
    SALE_OFF: "/thanh-ly",
    NEWS: "/tin-tuc",
    CONTACT: "/lien-he",
    ACCOUNT: withAccount(""),
    SHOPPING_CART: "/gio-hang",
    CHECK_ORDER: "/kiem-tra-don-hang",
    CHECK_WARRANTY: "/kiem-tra-bao-hanh",
    INFORMATION: withAccount("/thong-tin"),
  },

  AUTH: {
    LOGIN: withAuth("/dang-nhap"),
    REGISTER: withAuth("/dang-ky"),
    FORGOT_PASSWORD: withAuth("/quen-mat-khau"),
    VERIFY_OTP: withAuth("/xac-nhan-otp"),
    RESET_PASSWORD: withAuth("/doi-mat-khau"),
  },

  RELATIVE_AUTH: {
    LOGIN: rel("/dang-nhap"),
    REGISTER: rel("/dang-ky"),
    FORGOT_PASSWORD: rel("/quen-mat-khau"),
    VERIFY_OTP: rel("/xac-nhan-otp"),
    RESET_PASSWORD: rel("/doi-mat-khau"),
  },
};

export default ROUTES_SHOP;
