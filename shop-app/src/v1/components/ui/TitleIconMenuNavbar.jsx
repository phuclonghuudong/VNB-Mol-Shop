import { useState } from "react";

const TitleIconMenuNavbar = ({
  iconTitle: ICON,
  title,
  quantity,
  code,
  dropdownOption,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const hasQuantity = typeof quantity === "number" && quantity >= 0;

  return (
    <div
      className="w-full h-full relative flex flex-col justify-center items-center cursor-pointer gap-1 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col items-center">
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

      {isHovered && (
        <div
          className={`absolute top-full mt-0 ${
            code === "GH"
              ? "-left-22 lg:-left-15 md:-left-15 w-60"
              : code === "TK"
              ? "md:left-1/2 -left-10 w-50"
              : "left-1/2 w-50"
          } transform duration-300 -translate-x-1/2  bg-white shadow-lg  z-50 `}
        >
          {dropdownOption}
        </div>
      )}
    </div>
  );
};

export default TitleIconMenuNavbar;
