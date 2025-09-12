import { useId } from "react";

const FormSelect = ({
  id,
  name,
  title,
  value,
  options = [],
  placeholder = "Chọn...",
  isAutoFocus,
  isDisabled,
  isValidNull = true,
  onChange,
  isBold,
}) => {
  const internalId = useId();

  return (
    <div className={`${title ? "flex flex-col gap-3" : "w-full"}`}>
      {title && (
        <label
          htmlFor={id || internalId}
          className={`text-md ${isBold ? "font-bold" : ""}`}
        >
          {title}
        </label>
      )}
      <select
        id={id || internalId}
        name={name || id || internalId}
        value={value}
        autoFocus={isAutoFocus ? true : false}
        disabled={isDisabled ? isDisabled : false}
        onChange={(e) => onChange?.(e.target.value)}
        className={`p-3 border-1 rounded-xs w-full outline-none bg-white
          ${isDisabled ? "bg-gray-100 cursor-not-allowed" : ""}
          ${!isValidNull ? "border-red-500" : "border-gray-300"}
        `}
      >
        {placeholder && (
          <option value="" disabled hidden>
            {placeholder}
          </option>
        )}
        {options.map((opt) => (
          <option key={opt.id} value={opt.id}>
            {opt.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormSelect;
