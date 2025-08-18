import IMAGE from "@/v1/assets/products/image.png";

const CardProduct = ({ index, data }) => {
  return (
    <div key={index} className="w-full p-3 bg-white h-88  flex flex-col">
      <div className="w-full h-full flex flex-col">
        <div className="h-[70%]  flex items-center justify-center text-white">
          <img
            src={IMAGE}
            alt={`Ảnh sản phẩm ${index + 1}`}
            className="max-h-full max-w-full object-contain"
          />
        </div>

        <div className=" text-md text-gray-800 my-auto">
          Áo cầu lông Victor Nam Xanh Biển - Mã 7367 {index + 1}
        </div>

        <div className="text-red-500 font-medium ">Giá: 100.000₫</div>
      </div>
    </div>
  );
};

export default CardProduct;
