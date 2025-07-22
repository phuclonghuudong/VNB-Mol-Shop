import BannerScrollbar from "../../../components/ui/BannerScrollbar";
import LogoBanner from "../../../components/ui/LogoBanner";
import TitleHeader from "../../../components/ui/TitleHeader";
import ListProduct from "./ListProduct";

const HomeScreen = () => {
  return (
    <div className="w-full h-full">
      <BannerScrollbar />
      <LogoBanner />
      <TitleHeader title="Sản phẩm mới" />
      <ListProduct />
      <TitleHeader title="Sale off" />
      <TitleHeader title="Sản phẩm cầu lông" />
      <TitleHeader title="Tin tức" />
    </div>
  );
};

export default HomeScreen;
