import { MdNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";

const TitleHeaderPage = ({ title }) => {
  return (
    <div className="w-full h-14 bg-gray-200 xl:px-[45px] px-4 flex justify-start items-center gap-2 text-md">
      <Link to={"/"} className="hover:text-orange-700">
        Trang chủ
      </Link>

      <MdNavigateNext size={20} />

      <Link to={"/san-pham"} className="hover:text-orange-700">
        {title}
      </Link>
    </div>
  );
};

export default TitleHeaderPage;
