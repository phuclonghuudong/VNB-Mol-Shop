import { FaChevronDown, FaSortAmountDownAlt } from "react-icons/fa";

const TitlePage = ({ title, isSort }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 bg-gray-100 p-3 rounded-lg shadow-md mb-3">
      <p className="font-bold uppercase text-sm sm:text-base">{title}</p>

      {isSort && (
        <div className="flex items-center gap-2 text-sm sm:text-base">
          <div className="hidden sm:flex items-center gap-1">
            <FaSortAmountDownAlt size={16} />
            <span className="font-semibold">Sắp xếp:</span>
          </div>

          <div className="flex items-center gap-1 bg-white px-3 py-1 rounded-md cursor-pointer hover:bg-gray-100">
            <span>Mặc định</span>
            <FaChevronDown size={12} className="text-orange-700" />
          </div>
        </div>
      )}
    </div>
  );
};

export default TitlePage;
