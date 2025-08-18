import IMAGE from "@/v1/assets/news/image.png";
import CardNews from "@/v1/components/shop/ui/CardNews";
import RenderNewsCardNone from "@/v1/components/shop/ui/RenderNewsCardNone";
import { useState } from "react";

const ListNews = () => {
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
    <section className="w-full md:p-5 p-2">
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {isLoading
          ? Array.from({ length: 4 }).map((_, index) => (
              <RenderNewsCardNone index={index} />
            ))
          : data.map((item, index) => (
              <CardNews key={item.title + index} data={item} index={index} />
            ))}
      </div>
    </section>
  );
};

export default ListNews;
