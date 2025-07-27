import { useState } from "react";
import CheckBoxSortOption from "../../../components/ui/CheckBoxSortOption";

const SortOptions = () => {
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
    <div className="">
      <CheckBoxSortOption title={"Chọn mức giá"} data={sortPrice} />

      <CheckBoxSortOption title={"Trình độ chơi"} data={sortLevel} />
    </div>
  );
};

export default SortOptions;
