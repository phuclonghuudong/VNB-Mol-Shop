import IMAGE from "@/v1/assets/news/image.png";
import CardNews from "@/v1/components/shop/ui/CardNews";
import ProductCatalog from "@/v1/components/shop/ui/ProductCatalog";
import RenderNewsCardNone from "@/v1/components/shop/ui/RenderNewsCardNone";
import SearchBar from "@/v1/components/shop/ui/SearchBar";
import TitlePage from "@/v1/components/shop/ui/TittlePage";
import { useState } from "react";

const NewsScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([
    {
      title: "Hướng dẫn thay mặt vợt Picketpall đúng cách",
      timeCreate: "10-07-2015 08:55",
      image: IMAGE,
      content:
        "Thêm một chi nhánh mới tại Đà Nẵng với cửa hàng thể thao VNB Liên chiểu, nhằm đáp ứng nhu cầu mạnh mẽ của các anh chị em lông thủ và các bộ môn thể thao khác.",
    },
  ]);
  return (
    <section className="mx-auto">
      <div className="px-4 py-5 w-full h-full  flex justify-between items-start gap-5">
        <div className="w-full text-gray-700 ">
          <TitlePage title={"Thông tin tổng hợp cầu lông"} isSort={false} />

          <SearchBar />

          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-8 pt-4">
            {isLoading
              ? Array.from({ length: 4 }).map((_, index) => (
                  <RenderNewsCardNone index={index} />
                ))
              : data.map((item, index) => (
                  <CardNews
                    key={item.title + index}
                    data={item}
                    index={index}
                  />
                ))}
          </div>
        </div>

        <div className="w-2/7 lg:block hidden">
          <ProductCatalog />
        </div>
      </div>
    </section>
  );
};

export default NewsScreen;
