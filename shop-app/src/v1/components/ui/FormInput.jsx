const FormInput = ({ id, name, placeholder }) => {
  return (
    <input
      name={name || ""}
      id={id || ""}
      placeholder={placeholder || ""}
      className="p-3 border-1 border-gray-300 rounded-md w-full"
    />
  );
};

export default FormInput;
