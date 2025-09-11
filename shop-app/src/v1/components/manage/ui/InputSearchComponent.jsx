import { useState } from "react";
import { IoClose } from "react-icons/io5";
import IconComponent from "./IconComponent";

const InputSearchComponent = ({ onSearch }) => {
  const [keyword, setKeyword] = useState("");

  // const handleKeyDown = (e) => {
  //   if (e.key === "Enter" && onSearch) {
  //     onSearch(keyword);
  //   }
  // };
  return (
    <div className="flex-1 flex justify-between items-center border border-gray-300 bg-gray-200 text-sm rounded-md">
      <input
        type="text"
        placeholder="Tìm kiếm ...."
        className="flex-1 px-3 py-2  outline-none  w-full h-full"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onKeyDown={() => onSearch(keyword)}
      />
      <IconComponent
        icon={IoClose}
        isSize={28}
        onClick={() => {
          onSearch("");
          setKeyword("");
        }}
      />
    </div>
  );
};

export default InputSearchComponent;
