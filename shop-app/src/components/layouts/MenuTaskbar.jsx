import { Link } from "react-router-dom";
import menuList from "../../common/menuList";

const MenuTaskbar = () => {
  return (
    <section className="h-10 bgMain px-[45px] lg:block hidden bg-orange-600 ">
      <div className="uppercase h-full w-full justify-between text-slate-50 hidden lg:flex text-center">
        {Array.isArray(menuList) &&
          menuList.map((item, index) => (
            <Link
              key={`menu-list-${index}`}
              to={item?.url || "/"}
              className="hover:text-orange-500 z-40 cursor-pointer  flex items-center h-full transition-colors duration-300 hover:bg-white w-full"
            >
              <span className="text-md font-semibold w-full">
                {item?.title}
              </span>
            </Link>
          ))}
      </div>
    </section>
  );
};

export default MenuTaskbar;
