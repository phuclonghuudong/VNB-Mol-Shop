import { useState } from "react";
import ProductCatalog from "../ui/ProductCatalog";
import ProductFilterCheckbox from "../ui/ProductFilterCheckbox";

const FilterOptions = () => {
  const [sortPrice, setSortPrice] = useState([
    { title: "Giá dưới 500.000đ", id: "price500" },
    { title: "500.000 - 1 triệu", id: "price1" },
    { title: "1 - 2 triệu", id: "price2" },
    { title: "2 - 3 triệu", id: "price3" },
    { title: "Giá trên 3 triệu", id: "price4" },
  ]);

  const [sortLevel, setSortLevel] = useState([
    { title: "Mới chơi", id: "new" },
    { title: "Trung bình", id: "average" },
    { title: "Khá tốt", id: "good" },
  ]);

  return (
    <div className="w-2/7   lg:block hidden">
      <div className="w-full p-4 border-gray-200 border rounded-md shadow-lg mb-8">
        <ProductFilterCheckbox title={"Chọn mức giá"} data={sortPrice} />

        <ProductFilterCheckbox title={"Trình độ chơi"} data={sortLevel} />
      </div>

      <ProductCatalog />
    </div>
  );
};

export default FilterOptions;
