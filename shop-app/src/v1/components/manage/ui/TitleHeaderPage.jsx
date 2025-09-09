import { FaPlus } from "react-icons/fa";
import IconComponent from "./IconComponent";

const TitleHeaderPage = ({ title, isIcon, onClick }) => {
  return (
    <div className=" flex flex-1 justify-center items-center mb-2">
      <div className="flex w-full h-10 items-center bg-white rounded-md px-3">
        <p className="text-md font-bold uppercase">{title}</p>
      </div>

      {isIcon && (
        <div
          className="group border-2 border-dashed border-gray-500 p-2 hover:border-orange-500 duration-300 cursor-pointer"
          title={"Thêm mới"}
          onClick={() => onClick?.("create")}
        >
          <IconComponent icon={FaPlus} isSize={20} />
        </div>
      )}
    </div>
  );
};

export default TitleHeaderPage;
