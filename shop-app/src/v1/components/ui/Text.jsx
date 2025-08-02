const Text = ({
  title,
  isUppercase,
  isBold,
  isSize,
  isHover,
  isColor,
  isCursor,
}) => {
  return (
    <p
      className={` py-3 
        ${isCursor ? "cursor-pointer" : ""}
        ${isSize || "text-lg"}  
        ${isBold ? "font-bold" : ""}  
        ${isHover ? "hover:text-orange-600" : ""} 
        ${isUppercase ? "uppercase" : ""}
        ${isColor ? isColor : ""}
        `}
    >
      {title || ""}
    </p>
  );
};

export default Text;
