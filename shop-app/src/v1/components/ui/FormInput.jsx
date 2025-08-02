const FormInput = ({ id, name, placeholder, title, isAutoFocus }) => {
  return (
    <div className={`${title ? "flex flex-col gap-3" : "w-full"}`}>
      {title && (
        <label htmlFor={id} className="">
          {title}
        </label>
      )}
      <input
        autoFocus={isAutoFocus ? true : false}
        name={name || ""}
        id={id || ""}
        placeholder={placeholder || ""}
        className="p-3 border-1 border-gray-300 rounded-xs w-full outline-none"
      />
    </div>
  );
};

export default FormInput;
