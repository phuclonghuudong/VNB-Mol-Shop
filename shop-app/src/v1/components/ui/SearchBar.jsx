const SearchBar = () => {
  return (
    <div className="px-8 py-4 w-full grid grid-cols-12 gap-3 items-center">
      <label className="font-bold col-span-2 sm:block hidden">Từ khóa:</label>
      <input className="col-span-12 sm:col-span-8 border border-gray-200 outline-none p-2 rounded" />
      <button className="col-span-12 sm:col-span-2 bg-gray-200 hover:bg-gray-300 p-2 ">
        Tìm kiếm
      </button>
    </div>
  );
};

export default SearchBar;
