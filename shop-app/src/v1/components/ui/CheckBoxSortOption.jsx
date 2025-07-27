const CheckBoxSortOption = ({ title, data }) => {
  return (
    <div className="border-b border-gray-200 mb-2 py-4">
      <p className="uppercase font-bold text-lg mb-2">{title}</p>
      {data.map((item, index) => (
        <div>
          <div key={index} className=" flex justify-start items-center p-2 ">
            <input
              id={item?.id}
              name={item?.id}
              type="checkbox"
              className="mr-2 h-4 w-4 border border-gray-300 rounded-sm checked:bg-orange-600"
            />
            <label
              htmlFor={item?.id}
              className="hover:text-orange-600 select-none cursor-pointer"
            >
              {item?.title}
            </label>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CheckBoxSortOption;
