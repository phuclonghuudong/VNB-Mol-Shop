import { swiperBreakpoints } from "@/v1/utils/swiperBreakpoints";
import { useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCarousel from "./ProductCarousel";

const ListProduct = () => {
  const [isLoading, setIsLoading] = useState(false);
  const listMenu = useMemo(
    () => [
      "Tất",
      "Áo cầu lông",
      "Giày cầu lông",
      "Vợt cầu lông",
      "Phụ kiện 1",
      "Phụ kiện 2",
      "Phụ kiện 3",
      "Phụ kiện 4",
      "Phụ kiện 5",
      "Phụ kiện 6",
      "Phụ kiện 7",
    ],
    []
  );

  const [activeTab, setActiveTab] = useState(listMenu[0]);
  const fakeData = [...Array(10)].map((_, i) => ({ id: i, name: `SP ${i}` }));

  return (
    <section className="md:p-5 p-2 w-full">
      <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden w-full">
        <div className="py-3 bg-white">
          <Swiper slidesPerView={5} breakpoints={swiperBreakpoints}>
            {listMenu.map((category, index) => (
              <SwiperSlide key={index}>
                <div
                  onClick={() => setActiveTab(category)}
                  className={`h-12 flex justify-center items-center  cursor-pointer transition-all duration-200 border-gray-200 border-r-1
                    ${
                      activeTab === category
                        ? "bg-orange-600 text-white"
                        : "bg-white text-gray-700 hover:bg-gray-200"
                    }`}
                >
                  <p className="font-bold text-xl text-center">{category}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <ProductCarousel isLoading={isLoading} data={fakeData} />
      </div>
    </section>
  );
};

export default ListProduct;
