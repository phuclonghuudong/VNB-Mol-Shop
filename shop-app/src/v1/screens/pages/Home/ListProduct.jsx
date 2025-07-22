import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const ListProduct = () => {
  const listMenu = [
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
  ];

  const settings = {
    infinite: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 6 },
      },
      {
        breakpoint: 964,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 520,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  const [activeTab, setActiveTab] = useState(listMenu[0]);

  return (
    <section className="p-5">
      <div className="border border-gray-200 rounded-lg shadow-sm overflow-hidden">
        {/* Slider menu danh mục */}
        <div className="py-3 bg-white">
          <Slider {...settings}>
            {listMenu.map((category) => (
              <div key={category} className="">
                <div
                  onClick={() => setActiveTab(category)}
                  className={`h-12 flex justify-center items-center  cursor-pointer transition-all duration-200 border-gray-200 border-r-1
                    ${
                      activeTab === category
                        ? "bg-orange-600 text-white"
                        : "bg-white text-gray-700 hover:bg-gray-200"
                    }`}
                >
                  <p className="font-bold text-xl text-center px-2">
                    {category}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Nội dung sản phẩm */}
        <div className="h-80 p-4 flex items-center justify-center text-gray-600 bg-yellow-50">
          <p className="text-lg">
            Đang hiển thị:{" "}
            <span className="text-orange-600 font-bold">{activeTab}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ListProduct;
