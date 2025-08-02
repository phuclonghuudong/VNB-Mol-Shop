const ButtonComponent = ({
  title,
  color = "black",
  onClick,
  isUppercase,
  isBold,
}) => {
  const colorClasses = {
    white: "text-black hover:text-gray-900 hover:bg-gray-200",
    blue: "text-white bg-blue-950 hover:text-white hover:bg-blue-900",
    black: "text-white bg-black hover:text-black hover:bg-white",
    green: "text-black bg-green-700 hover:text-white hover:bg-green-950",
    red: "text-black bg-red-700 hover:text-white hover:bg-red-950",
    orange: "text-black bg-orange-700 hover:text-white hover:bg-orange-950",
  };
  const btnColor = colorClasses[color];
  return (
    <button
      className={`w-full text-md p-3 cursor-pointer  text-white rounded-xs duration-300
        ${btnColor} 
        ${isUppercase ? "uppercase" : ""} 
        ${isBold ? "font-bold" : ""} `}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default ButtonComponent;
