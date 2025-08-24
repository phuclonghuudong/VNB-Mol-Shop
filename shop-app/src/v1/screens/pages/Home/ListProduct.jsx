import { swiperBreakpoints } from "@/v1/utils/swiperBreakpoints";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CategoryAPI from "../../../apis/shop/category.api";
import AxiosToastError from "../../../utils/AxiosToastError";
import ProductCarousel from "./ProductCarousel";

const ListProduct = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [listCategoryProduct, setListCategoryProduct] = useState([]);
  const [activeTab, setActiveTab] = useState("all");

  const fakeData = [...Array(10)].map((_, i) => ({ id: i, name: `SP ${i}` }));

  const fetchDataAllCategoryProduct = async () => {
    setIsLoading(true);
    try {
      const res = await CategoryAPI.get_All_Category_Product();
      if (res?.SUCCESS) {
        const categories = res?.DATA || [];
        const withAll = [
          { id: "all", name: "Tất cả", slug: "all" },
          ...categories,
        ];
        setListCategoryProduct(withAll);
      }
    } catch (error) {
      AxiosToastError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDataAllCategoryProduct();
  }, []);

  return (
    <section className="md:p-5 p-2 w-full">
      <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden w-full">
        <div className="py-3 bg-white">
          <Swiper slidesPerView={5} breakpoints={swiperBreakpoints}>
            {listCategoryProduct.map((x, index) => (
              <SwiperSlide key={index + x?.id}>
                <div
                  onClick={() => setActiveTab(x?.slug)}
                  className={`h-12 flex justify-center items-center  cursor-pointer transition-all duration-200 border-gray-200 border-r-1
                    ${
                      activeTab === x?.slug
                        ? "bg-orange-600 text-white"
                        : "bg-white text-gray-700 hover:bg-gray-200"
                    }`}
                >
                  <p className="font-bold text-xl text-center">{x?.name}</p>
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
