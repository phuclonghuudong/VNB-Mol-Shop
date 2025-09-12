import LOGO from "@/v1/assets/no-image-available.png";
import { Link } from "react-router-dom";
import ROUTES_SHOP from "../../../configs/configRoutesShop";

const CardNews = ({ data, index }) => {
  const { content, imageUrl, newsSlug, newsTitle, publishDate, summary, id } =
    data;

  return (
    <Link
      key={index + id}
      className="grid w-full h-full"
      to={ROUTES_SHOP?.SHOP?.NEWS}
    >
      <div className="h-52 w-full overflow-hidden bg-orange-100  flex justify-center items-center ">
        <img
          src={imageUrl ? imageUrl : LOGO}
          alt={`news-${index}`}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-120"
        />
      </div>

      <div className="-mt-10 px-3 h-54 w-full pb-1 text-gray-900 cursor-grab relative text-md">
        <div className="w-full h-full bg-white rounded-lg shadow-md shadow-orange-700 ">
          <div className="p-3 flex flex-col justify-center items-center text-center">
            <div className="w-full h-14 cursor-pointer">
              <p className=" capitalize font-semibold line-clamp-2 hover:text-orange-600 duration-300 text-lg">
                {newsTitle}
              </p>
            </div>
            <div className="w-full h-8 my-2 flex justify-center items-center">
              <div className="flex-grow h-px bg-orange-700"></div>
              <p className="bg-orange-600 p-1 rounded-2xl  text-white text-sm">
                {publishDate}
              </p>
              <div className="flex-grow h-px bg-orange-700"></div>
            </div>
            <div className="w-full h-full ">
              <p className=" line-clamp-3">{content}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardNews;
