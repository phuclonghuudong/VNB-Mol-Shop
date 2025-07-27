import BannerScrollbar from "../../../components/ui/BannerScrollbar";
import LogoBanner from "../../../components/ui/LogoBanner";
import TitleCategoryList from "../../../components/ui/TitleCategoryList";
import ListCategory from "./ListCategory";
import ListNews from "./ListNews";
import ListProduct from "./ListProduct";
import ListSaleOff from "./ListSaleOff";

const HomeScreen = () => {
  return (
    <div className="w-full h-full">
      <BannerScrollbar />
      <LogoBanner />

      {/* List Product */}
      <TitleCategoryList title="Sản phẩm mới" />
      <ListProduct />

      {/* List Sale off */}
      <TitleCategoryList title="Sale off" />
      <ListSaleOff />

      {/* List Category */}
      <TitleCategoryList title="Sản phẩm cầu lông" />
      <ListCategory />

      {/* List News */}
      <TitleCategoryList title="Tin tức" />
      <ListNews />
    </div>
  );
};

export default HomeScreen;
