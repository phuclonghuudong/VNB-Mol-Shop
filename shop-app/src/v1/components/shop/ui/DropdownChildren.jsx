import { Link } from "react-router-dom";

const DropdownChildren = ({ title, path, onClick = false }) => {
  const commonClass =
    "block px-4 py-2 text-sm uppercase font-semibold text-center hover:text-white hover:bg-orange-500 duration-300";
  return path ? (
    <Link to={path} className={commonClass}>
      <div className="flex items-center justify-center gap-2">
        <p>{title}</p>
      </div>
    </Link>
  ) : (
    <div className={`flex items-center justify-center gap-2 ${commonClass}`}>
      <button onClick={onClick} type="button" className="uppercase">
        <p>{title}</p>
      </button>
    </div>
  );
};

export default DropdownChildren;
