import { FaChevronDown, FaSortAmountDownAlt } from "react-icons/fa";

const TitlePage = () => {
  return (
    <div className="flex justify-between items-start h-12 bg-gray-200 p-3 rounded-lg shadow-md mb-3">
      <p className="font-bold uppercase ">Vợt cầu lông</p>
      <div className="flex justify-between items-center gap-1">
        <FaSortAmountDownAlt size={18} />
        <p className="font-semibold ">Sắp xếp: </p>
        <p className="cursor-pointer ">Mặc định: </p>
        <FaChevronDown size={14} className="text-orange-700 cursor-pointer" />
      </div>
    </div>
  );
};

export default TitlePage;
