import IMAGE1 from "@/v1/assets/events/event1.png";
import IMAGE2 from "@/v1/assets/events/event2.png";
import IMAGE3 from "@/v1/assets/events/event3.png";
import Loading from "@/v1/components/shop/ui/Loading";
import { useState } from "react";

const ListSaleOff = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([IMAGE1, IMAGE2, IMAGE3]);
  const displayData = Array(3).fill(1);
  return (
    <section className="p-5">
      <div className="overflow-hidden flex flex-col lg:flex-row lg:h-40 gap-4">
        {isLoading
          ? displayData.map((_, index) => (
              <div
                key={index}
                className="h-full bg-yellow-100 flex items-center justify-center animate-pulse"
              >
                <Loading size="w-8 h-8" />
              </div>
            ))
          : data.map((item, index) => (
              <div
                key={index}
                className="h-full w-full flex items-center justify-center lg:flex-1"
              >
                <img
                  src={item || ""}
                  alt={`event-${index}`}
                  className=" h-full w-full object-center"
                />
              </div>
            ))}
      </div>
    </section>
  );
};

export default ListSaleOff;
