// components/FormStatus.jsx
import { statuses } from "../../../utils/enumStatus";

const FormStatus = ({ id, name = id, value, title, onChange, isDisabled }) => {
  const baseClass =
    "flex-1 text-xs p-3 rounded-xs duration-300 select-none font-bold";
  const activeClass = "bg-blue-700 text-white";
  const inactiveClass = "bg-gray-200 text-black hover:bg-gray-300";

  return (
    <div className={`${title ? "flex flex-col gap-3" : "w-full"}`}>
      {title && (
        <label htmlFor={id} className="text-md">
          {title}
        </label>
      )}

      <div className="flex justify-center items-center gap-2 h-full w-full">
        {statuses.map((status) => (
          <button
            key={status.value ?? "none"}
            disabled={isDisabled ? isDisabled : false}
            type="button"
            value={status.value}
            className={`${baseClass} ${
              value === status.value ? activeClass : inactiveClass
            }`}
            onClick={() => onChange?.(status.value)}
          >
            {status.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FormStatus;
