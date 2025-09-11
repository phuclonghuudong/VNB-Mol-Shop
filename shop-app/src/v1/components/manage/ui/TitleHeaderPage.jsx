import { FaPlus } from "react-icons/fa";
import IconComponent from "./IconComponent";
import InputSearchComponent from "./InputSearchComponent";
import Loading from "./Loading";

const TitleHeaderPage = ({
  title,
  isIconCreate,
  onClick,
  onSearch,
  onLoading,
}) => {
  return (
    <div className="w-full mb-2 space-y-2">
      <div className="flex justify-self-start items-center bg-white rounded-md px-3 h-10 gap-4">
        <p className="text-md font-bold uppercase w-full">{title}</p>
        {onLoading ? <Loading /> : ""}
      </div>

      <div className="flex w-full gap-2">
        <InputSearchComponent onSearch={onSearch} />

        {isIconCreate && (
          <button
            type="button"
            className="group border-2 border-dashed border-gray-500 p-2 hover:border-orange-500 duration-300 rounded-md cursor-pointer"
            title="Thêm mới"
            onClick={() => onClick?.("create")}
          >
            <IconComponent icon={FaPlus} isSize={20} />
          </button>
        )}
      </div>
    </div>
  );
};

export default TitleHeaderPage;
