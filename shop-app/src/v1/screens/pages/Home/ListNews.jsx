import CardNews from "@/v1/components/shop/ui/CardNews";
import RenderNewsCardNone from "@/v1/components/shop/ui/RenderNewsCardNone";
import { useEffect, useState } from "react";
import NewsAPI from "../../../apis/shop/news.api";
import AxiosToastError from "../../../utils/AxiosToastError";

const ListNews = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchListNews();
  }, []);

  const fetchListNews = async () => {
    setIsLoading(true);
    try {
      const res = await NewsAPI.get_All_News();
      if (res?.SUCCESS) {
        setData(res?.DATA);
      }
    } catch (error) {
      AxiosToastError(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section className="w-full md:p-5 p-2">
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {isLoading
          ? Array.from({ length: 4 }).map((_, index) => (
              <RenderNewsCardNone index={index} key={index} />
            ))
          : data.map((item, index) => (
              <CardNews key={index} data={item} index={index} />
            ))}
      </div>
    </section>
  );
};

export default ListNews;
