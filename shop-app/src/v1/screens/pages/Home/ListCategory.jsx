import IMAGE from "@/v1/assets/categories/image.png";
import Loading from "@/v1/components/shop/ui/Loading";
import { useState } from "react";

const ListCategory = () => {
  const [isLoading, setisLoading] = useState(false);
  const [data, setData] = useState([
    {
      title: "Vợt cầu lông",
      image: IMAGE,
    },
  ]);
  return (
    <section className="w-full md:p-5 p-2">
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {isLoading ? (
          <div className="h-68 bg-yellow-100 flex justify-center items-center">
            <Loading size="w-7 h-7" />
          </div>
        ) : (
          data.map((item, index) => (
            <div
              key={index}
              className="relative h-80  w-full bg-orange-100 flex justify-center items-center overflow-hidden group cursor-pointer"
            >
              <img
                src={item?.image}
                alt={index + item?.image}
                className="w-full h-full object-cover  transition-transform duration-300 scale-110 group-hover:scale-100"
              />
              <div className="absolute inset-0">
                <div
                  className="absolute top-0 w-full h-full group-hover:bg-white opacity-30 group-hover:opacity-50 transition-all duration-500"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 40%, 0 60%)",
                  }}
                ></div>

                <div
                  className="absolute bottom-0 w-full h-full group-hover:bg-orange-700  group-hover:opacity-70 transition-all duration-500"
                  style={{
                    clipPath: "polygon(0 60%, 100% 40%, 100% 100%, 0 100%)",
                  }}
                ></div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-100 ">
                <div className="relative lg:w-48 w-64 lg:h-11 h-9 bg-orange-600 transition-transform duration-500 -skew-y-12 text-center items-center justify-center flex  z-10">
                  <p className="uppercase text-sm lg:text-lg text-white truncate text-ellipsis overflow-hidden whitespace-nowrap px-2">
                    {item?.title}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default ListCategory;

{
  /* <div className="absolute top-8 left-[-40px] transform -rotate-45">
  <p className="bg-red-600 text-white px-6 py-1 font-bold shadow-lg">
    GIẢM GIÁ HOT
  </p>
</div> */
}
