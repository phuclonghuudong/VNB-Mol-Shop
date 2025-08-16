import { IoMdClose } from "react-icons/io";
import TitleIconSideBar from "../ui/TitleIconSideBar";

const SideBar = ({ onShow, onClose }) => {
  return (
    <div className="h-screen ">
      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full overflow-y-auto transition-all duration-300 z-40 lg:hidden
                    ${onShow ? "w-full p-2" : "w-0"}`}
      >
        {onShow && (
          <button
            onClick={onClose}
            className="absolute top-3 right-3 p-2 rounded-full hover:bg-gray-200"
          >
            <IoMdClose size={24} />
          </button>
        )}

        <div onClick={onClose}>
          <TitleIconSideBar onShow={onShow} />
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div
        className={` bg-white  h-full border-gray-300 
                    transition-all duration-300 hidden lg:block overflow-y-auto
                    ${onShow ? "w-72 p-4" : "w-20 p-2"}`}
      >
        <TitleIconSideBar onShow={onShow} />
      </div>
    </div>
  );
};

export default SideBar;
