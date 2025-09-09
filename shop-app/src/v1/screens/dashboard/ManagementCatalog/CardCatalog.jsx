import { Link } from "react-router-dom";
import IconComponent from "../../../components/manage/ui/IconComponent";

const CardCatalog = ({ data }) => {
  if (!data) return null;

  return (
    <Link
      to={data.url}
      className="group flex h-28 w-full items-center overflow-hidden rounded-xl bg-blue-300 shadow-lg transition hover:shadow-xl duration-300"
    >
      <div className="flex h-full w-20 items-center justify-center bg-red-100 transition group-hover:bg-red-200 duration-300">
        <IconComponent icon={data.icon} isSize={30} />
      </div>

      <div className="flex h-full flex-1 items-center justify-center bg-yellow-50 p-2 transition group-hover:bg-yellow-100 ">
        <p className="text-base font-bold uppercase tracking-wide group-hover:text-amber-600 duration-300">
          {data.title}
        </p>
      </div>
    </Link>
  );
};

export default CardCatalog;
