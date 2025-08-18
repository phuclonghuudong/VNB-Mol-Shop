import Loading from "./Loading";

const RenderNewsCardNone = ({ index }) => {
  return (
    <div key={index} className="grid w-full ">
      <div className="h-44 w-full bg-orange-100 flex justify-center items-center">
        <Loading size="w-7 h-7" />
      </div>

      <div className="-mt-10 px-4 h-44 pb-1">
        <div className="w-full h-full bg-white rounded-lg shadow-md shadow-orange-700 ">
          <div className="p-3 flex flex-col justify-center items-center">
            <div className="w-full h-5 bg-orange-100 rounded"></div>
            <div className="w-full h-5 my-2 bg-orange-100 rounded"></div>
            <div className="w-3/4 h-8 my-2 bg-orange-100 rounded"></div>
            <div className="w-full h-10 mt-1 bg-orange-100 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenderNewsCardNone;
