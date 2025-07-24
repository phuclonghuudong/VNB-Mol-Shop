import BannerScrollbar from "../../../components/ui/BannerScrollbar";
import LogoBanner from "../../../components/ui/LogoBanner";
import TitleHeader from "../../../components/ui/TitleHeader";
import ListProduct from "./ListProduct";
import ListSaleOff from "./ListSaleOff";

const HomeScreen = () => {
  return (
    <div className="w-full h-full">
      <BannerScrollbar />
      <LogoBanner />

      {/* List Product */}
      <TitleHeader title="Sản phẩm mới" />
      <ListProduct />

      {/* List Sale off */}
      <TitleHeader title="Sale off" />
      <ListSaleOff />

      {/* List Category */}
      <TitleHeader title="Sản phẩm cầu lông" />
      <TitleHeader title="Tin tức" />
    </div>
  );
};

export default HomeScreen;
