const RenderProductCardNone = (index) => {
  return (
    <div key={index} className="w-full p-3 bg-white flex flex-col ">
      <div className="h-60 bg-gray-300 rounded w-full"></div>
      <div className="mt-2 h-4 bg-gray-300 rounded w-3/4"></div>
      <div className="mt-1 h-3 bg-gray-300 rounded w-1/2"></div>
    </div>
  );
};

export default RenderProductCardNone;
