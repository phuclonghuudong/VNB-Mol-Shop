import Loading from "../../../components/ui/Loading";

const ListSaleOff = () => {
  const displayData = Array(3).fill(1);
  return (
    <section className="p-5">
      <div className="overflow-hidden  h-32 flex gap-4">
        {displayData.map((_, index) => (
          <div
            key={index}
            className="lg:w-1/3 w-full h-full bg-yellow-100 flex items-center justify-center animate-pulse"
          >
            <Loading size="w-8 h-8" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ListSaleOff;
