import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import RenderProductCardNone from "../../../components/ui/RenderProductCardNone";
import { swiperBreakpoints } from "../../../utils/swiperBreakpoints";

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
                <div
                  key={index}
                  className="w-full p-3 bg-white h-96 flex flex-col"
                >
                  <div className="w-full h-full flex flex-col">
                    <div className="h-[70%] bg-blue-100 flex items-center justify-center text-white">
                      Hình ảnh
                    </div>

                    <div className="mt-2 text-md text-gray-800 my-auto">
                      Áo cầu lông Victor Nam Xanh Biển - Mã 7367 {index + 1}
                    </div>

                    <div className="text-red-500 font-medium ">
                      Giá: 100.000₫
                    </div>
                  </div>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductCarousel;
