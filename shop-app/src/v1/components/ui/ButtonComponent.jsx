const ButtonComponent = ({ title, color = "black", onClick, isUppercase }) => {
  const colorClasses = {
    white: "text-black hover:text-gray-900 hover:bg-gray-200",
    blue: "text-white bg-blue-950 hover:text-white hover:bg-blue-900",
    black: "text-white bg-black hover:text-black hover:bg-white",
    green: "text-black bg-green-700 hover:text-white hover:bg-green-950",
    red: "text-black bg-red-700 hover:text-white hover:bg-red-950",
  };
  const btnColor = colorClasses[color];
  return (
    <button
      className={`w-full text-lg p-3 cursor-pointer  text-white rounded-md ${btnColor} ${
        isUppercase ? "uppercase" : ""
      } duration-300`}
    >
      {title}
    </button>
  );
};

export default ButtonComponent;
