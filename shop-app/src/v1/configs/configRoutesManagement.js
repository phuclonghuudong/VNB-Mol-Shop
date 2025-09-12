// Base
const ADMIN_BASE = "/quan-tri";
const CATALOG_BASE = "/quan-ly-danh-muc";

// Helpers
const withAdmin = (path = "") => `${ADMIN_BASE}${path}`;
const withCatalog = (path = "") => withAdmin(`${CATALOG_BASE}${path}`);

const rel = (path = "") => (path.startsWith("/") ? path.slice(1) : path);

const ROUTES_MANAGEMENT = {
  ABSOLUTE: {
    DASHBOARD: withAdmin(),
    MANAGEMENT_CATALOG: withCatalog(),
    MANAGEMENT_CATEGORY: withCatalog("/danh-muc-san-pham"),
    MANAGEMENT_BRAND: withCatalog("/danh-muc-thuong-hieu"),
    MANAGEMENT_CATEGORY_PRODUCT: withCatalog("/danh-muc-loai-san-pham"),
    MANAGEMENT_SIZE: withCatalog("/danh-muc-kich-thuoc"),
    MANAGEMENT_COLOR: withCatalog("/danh-muc-mau-sac"),

    TYPE_VARIANT: withAdmin("/danh-muc-loai-bien-the"),
    PRODUCT: withAdmin("/quan-ly-san-pham"),
  },

  RELATIVE: {
    DASHBOARD: "",
    MANAGEMENT_CATALOG: rel(`${CATALOG_BASE}`),
    MANAGEMENT_CATEGORY: rel(`${CATALOG_BASE}/danh-muc-san-pham`),
    MANAGEMENT_BRAND: rel(`${CATALOG_BASE}/danh-muc-thuong-hieu`),
    MANAGEMENT_CATEGORY_PRODUCT: rel(`${CATALOG_BASE}/danh-muc-loai-san-pham`),
    MANAGEMENT_SIZE: rel(`${CATALOG_BASE}/danh-muc-kich-thuoc`),
    MANAGEMENT_COLOR: rel(`${CATALOG_BASE}/danh-muc-mau-sac`),

    TYPE_VARIANT: rel("/danh-muc-loai-bien-the"),
    PRODUCT: rel("/quan-ly-san-pham"),
  },
};

export default ROUTES_MANAGEMENT;
