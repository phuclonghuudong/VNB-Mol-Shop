import { useState } from "react";

const ProductCatalog = () => {
  const [listCategory, setListCategory] = useState([
    { title: "Vợt cầu lông", id: "1" },
    { title: "Áo cầu lông", id: "2" },
    { title: "Quần cầu lông", id: "1" },
    { title: "Phụ kiện cầu lông", id: "1" },
  ]);

  return (
    <div className="w-full p-4 border-gray-200 border rounded-md shadow-lg">
      <p className="uppercase font-bold text-lg mb-3">Danh mục sản phẩm</p>

      <div className="grid  gap-4 pb-4">
        {listCategory.map((item, index) => (
          <label
            key={index + item?.id}
            className="hover:text-orange-600 select-none cursor-pointer"
          >
            {item?.title}
          </label>
        ))}
      </div>
    </div>
  );
};

export default ProductCatalog;
