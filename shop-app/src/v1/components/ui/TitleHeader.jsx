const TitleHeader = ({ title }) => {
  return (
    <div className="font-bold text-orange-500 text-center grid items-center justify-center gap-2 text-3xl p-4 ">
      <h2>{title}</h2>
      <div className="bg-slate-200 h-1 w-full items-center justify-center text-center flex rounded">
        <div className="bg-orange-500 h-full w-14 rounded"></div>
      </div>
    </div>
  );
};

export default TitleHeader;
