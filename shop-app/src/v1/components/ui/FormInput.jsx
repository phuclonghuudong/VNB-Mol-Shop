import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const FormInput = ({
  id,
  name = id,
  value,
  placeholder,
  title,
  isAutoFocus,
  onChange,
  isPassword,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className={`${title ? "flex flex-col gap-3" : "w-full"}`}>
      {title && (
        <label htmlFor={id} className="">
          {title}
        </label>
      )}
      {!isPassword ? (
        <input
          type="text"
          autoFocus={isAutoFocus ? true : false}
          name={name || ""}
          id={id || ""}
          placeholder={placeholder || ""}
          value={value}
          onChange={onChange}
          className="p-3 border-1 border-gray-300 rounded-xs w-full outline-none"
        />
      ) : (
        <div className="flex justify-between items-center border-1 border-gray-300 rounded-xs w-full">
          <input
            type={showPassword ? "text" : "password"}
            autoFocus={isAutoFocus ? true : false}
            name={name || ""}
            id={id || ""}
            placeholder={placeholder || ""}
            value={value}
            onChange={onChange}
            className="p-3  outline-none"
          />
          {showPassword ? (
            <FaEyeSlash
              size={16}
              color="gray"
              className="px-2 w-10 cursor-pointer select-none"
              onClick={() => setShowPassword((prev) => !prev)}
            />
          ) : (
            <FaEye
              size={16}
              color="gray"
              className="px-2 w-10 cursor-pointer select-none "
              onClick={() => setShowPassword((prev) => !prev)}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default FormInput;
