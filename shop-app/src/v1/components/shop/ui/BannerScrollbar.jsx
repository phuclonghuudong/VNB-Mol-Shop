import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import Banner01 from "@/v1/assets/banner/banner01.png";
import Banner02 from "@/v1/assets/banner/banner02.png";
import Banner03 from "@/v1/assets/banner/banner03.png";
import Banner04 from "@/v1/assets/banner/banner04.png";
import Banner05 from "@/v1/assets/banner/banner05.png";
import Banner06 from "@/v1/assets/banner/banner06.png";
import Banner07 from "@/v1/assets/banner/banner07.png";

const BannerScrollbar = () => {
  const listBanner = [
    Banner01,
    Banner02,
    Banner03,
    Banner04,
    Banner05,
    Banner06,
    Banner07,
  ];
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };

  return (
    <div className="w-full h-full overflow-hidden">
      <Slider {...settings}>
        {listBanner.map((item, index) => (
          <img
            key={index}
            src={item}
            alt={`banner${index}`}
            className="w-full h-full object-scale-down "
          />
        ))}
      </Slider>
    </div>
  );
};

export default BannerScrollbar;
