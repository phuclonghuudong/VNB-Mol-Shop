const administration = "/quan-tri";
const managementCatalog = "/quan-ly-danh-muc";
const ROUTES = {
  // Shop
  HOME: "/",
  PRODUCT: "/san-pham",
  SALE_OFF: "/thanh-ly",
  NEWS: "/tin-tuc",
  CONTACT: "/lien-he",
  ACCOUNT: "/tai-khoan",
  SHOPPING_CART: "/gio-hang",
  CHECK_ORDER: "/kiem-tra-don-hang",
  CHECK_WARRANTY: "/kiem-tra-bao-hanh",
  INFORMATION: "/tai-khoan/thong-tin",

  // Auth
  LOGIN: "/thanh-vien/dang-nhap",
  REGISTER: "/thanh-vien/dang-ky",
  FORGOT_PASSWORD: "/thanh-vien/quen-mat-khau",
  VERIFY_OTP: "/thanh-vien/xac-nhan-otp",
  RESET_PASSWORD: "/thanh-vien/doi-mat-khau",

  // Management
  ADMIN_DASHBOARD: "/quan-tri",
  ADMIN_MANAGEMENT_CATALOG: `${administration}${managementCatalog}`,
  ADMIN_MANAGEMENT_CATEGORY: `${administration}${managementCatalog}/danh-muc-san-pham`,
  ADMIN_MANAGEMENT_BRAND: `${administration}${managementCatalog}/danh-muc-thuong-hieu`,

  ADMIN_TYPE_VARIANT: "/quan-tri/danh-muc-loai-bien-the",
  ADMIN_PRODUCT: "/quan-tri/quan-ly-san-pham",
};

export default ROUTES;
