import CardProduct from "@/v1/components/shop/ui/CardProduct";
import RenderProductCardNone from "@/v1/components/shop/ui/RenderProductCardNone";
import { swiperBreakpoints } from "@/v1/utils/swiperBreakpoints";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const ProductCarousel = ({
  isLoading = false,
  data = [],
  loadingLength = 10,
}) => {
  const displayData = isLoading ? [...Array(loadingLength)] : data;

  return (
    <div className={`p-4 bg-yellow-500 text-gray-600 h-auto  group`}>
      <Swiper
        modules={[Navigation]}
        navigation
        slidesPerView={5}
        spaceBetween={20}
        breakpoints={swiperBreakpoints}
      >
        {displayData.map((_, index) => (
          <SwiperSlide key={index}>
            <div className="w-full">
              {isLoading ? (
                <RenderProductCardNone index={index} />
              ) : (
                <CardProduct index={index} />
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductCarousel;
