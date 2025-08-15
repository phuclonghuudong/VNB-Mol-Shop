const Text = ({
  title,
  isUppercase,
  isBold,
  isSize,
  isHover,
  isColor,
  isCursor,
  isItalic,
  isPadding,
}) => {
  return (
    <p
      className={`  select-none
        ${isPadding ? isPadding : "py-3 "}
        ${isCursor ? "cursor-pointer" : ""}
        ${isSize || "text-lg"}  
        ${isItalic ? "italic" : ""}  
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
