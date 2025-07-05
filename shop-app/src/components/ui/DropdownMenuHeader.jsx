import { useState } from "react";
import { BiSolidBinoculars } from "react-icons/bi";
import { FaCartArrowDown, FaUser } from "react-icons/fa";

const TitleIcon = ({ iconTitle: ICON, title, quantity }) => {
  const hasQuantity = typeof quantity === "number" && quantity >= 0;

  return (
    <div className="w-full h-full flex flex-col justify-center items-center cursor-pointer gap-1 group">
      <div
        className={`relative md:p-2 md:border rounded-full text-orange-600 hover:text-orange-900 hover:border-orange-900 duration-300 border-gray-300`}
      >
        {hasQuantity && (
          <div
            className={`absolute rounded-full bg-orange-600 text-white text-xs ${
              quantity > 9 ? "h-5 w-5" : "h-4 w-4"
            } flex items-center justify-center -top-1 -right-2 leading-none`}
          >
            {quantity}
          </div>
        )}
        <ICON size={20} />
      </div>
      <p className="text-xs hidden xl:block uppercase font-semibold group-hover:text-orange-500 duration-500">
        {title}
      </p>
    </div>
  );
};

const DropdownMenuHeader = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div className="w-full h-full flex items-center justify-center md:gap-1">
      <div className="w-full h-full">
        <TitleIcon iconTitle={BiSolidBinoculars} title="TRA CỨU" />
      </div>

      <div className="w-full h-full">
        <TitleIcon iconTitle={FaUser} title="TÀI KHOẢN" />
      </div>

      <div className="w-full h-full">
        <TitleIcon iconTitle={FaCartArrowDown} title="GIỎ HÀNG" quantity={0} />
      </div>
    </div>
  );
};

export default DropdownMenuHeader;
