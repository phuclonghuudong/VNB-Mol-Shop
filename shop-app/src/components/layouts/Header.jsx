import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaMapLocationDot, FaUserAstronaut } from "react-icons/fa6";
import { IoClose, IoMenuOutline } from "react-icons/io5";
import LOGO from "../../assets/logo.svg";
import DropdownMenuHeader from "../ui/DropdownMenuHeader";

const Header = () => {
  const [showInputSearch, setShowInputSearch] = useState(false);
  const [showTab, setShowTab] = useState(false);
  const [showTabID, setShowTabID] = useState();

  const InputSearch = ({ onClose }) => {
    return (
      <div className=" flex justify-center items-center p-2 border rounded gap-2 w-full h-full ">
        <div className="flex justify-between items-center w-full border-r border-slate-300">
          <input
            type="text"
            className="w-full h-full outline-none rounded text-sm"
            placeholder="Tìm kiếm sản phẩm"
            autoFocus
          ></input>
          <button className="pr-2 hover:text-orange-600 duration-500">
            <CiSearch size={20} />
          </button>
        </div>

        <span className="hover:text-red-600 duration-500">
          <IoClose size={20} onClick={onClose} />
        </span>
      </div>
    );
  };

  return (
    <header className="lg:h-[80px] h-[50px] w-full  flex flex-col ">
      <div className=" h-full flex justify-between">
        <div className="block lg:hidden w-1/12 ">
          <div className="flex items-center h-full w-full">
            <IoMenuOutline size={30} className="hover:text-orange-900" />
            {/* <CiSearch
              size={30}
              className="hover:text-orange-900"
              onClick={() => setShowInputSearch((pre) => !pre)}
            /> */}
          </div>
        </div>

        <div className="lg:w-1/12 md:w-2/12 w-6/12  flex justify-center items-center">
          <img
            alt="logo app"
            src={LOGO}
            className="h-full w-full object-contain"
          />
        </div>

        <div className="lg:w-9/12 hidden lg:flex items-center justify-center px-[10px] text-sm w-full">
          <div className=" w-full h-[40px] border-b border-slate-300 flex justify-between gap-4">
            <div className="flex justify-center items-center gap-2 w-full">
              <p className="text-orange-600">
                <FaUserAstronaut size={18} />
              </p>
              <p className=" font-semibold">
                HOTLINE:{" "}
                <span className="hover:text-slate-700 text-red-600 xl:text-lg text-sm font-bold">
                  <span>0123456789</span> | <span>0987654321</span>
                </span>
              </p>
            </div>

            <div className="flex justify-center items-center gap-2 w-full">
              <p className="text-orange-600">
                <FaMapLocationDot size={18} />
              </p>
              <p className=" font-semibold hover:text-orange-500">
                HỆ THỐNG CỬA HÀNG
              </p>
            </div>

            <div className="flex-1 flex justify-end items-center  w-full">
              <div className="flex items-center bg-slate-100 rounded-md overflow-hidden">
                <input
                  className="bg-transparent px-2 py-2 outline-none w-62"
                  placeholder="Tìm kiếm sản phẩm..."
                />
                <button className="text-orange-600 px-2">
                  <CiSearch size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-2/12 md:w-3/12 sm:w-3/12 w-6/12 ">
          <DropdownMenuHeader />
        </div>
      </div>

      {showInputSearch && (
        <div className="block lg:hidden p-2 h-auto w-full ">
          <InputSearch onClose={() => setShowInputSearch(false)} />
        </div>
      )}
    </header>
  );
};

export default Header;
