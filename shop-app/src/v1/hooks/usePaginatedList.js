import { useEffect, useState } from "react";
import AxiosToastError from "../utils/AxiosToastError";
import useDebounce from "./useDebounce";

const usePaginatedList = (
  fetchAPI,
  { initialPage = 1, pageSize = 10, debounceMs = 800 } = {}
) => {
  const [listData, setListData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(initialPage);
  const [totalPages, setTotalPages] = useState(1);

  const [searchInput, setSearchInput] = useState("");
  const debouncedKeyword = useDebounce(searchInput, debounceMs);

  const fetchData = async (currentPage = page, keyword = debouncedKeyword) => {
    setIsLoading(true);
    try {
      const result = await fetchAPI({
        page: currentPage,
        limit: pageSize,
        keyword,
      });

      const resDATA = result?.DATA;
      if (result?.SUCCESS) {
        setListData(resDATA.data);
        setPage(resDATA?.pagination?.page);
        setTotalPages(resDATA?.pagination?.totalPages);
      }
    } catch (error) {
      AxiosToastError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(page, debouncedKeyword);
  }, [page, debouncedKeyword]);

  const handleSearch = (value) => {
    setPage(1);
    setSearchInput(value);
  };

  return {
    listData,
    isLoading,
    page,
    totalPages,
    pageSize,
    searchInput,
    setPage,
    handleSearch,
    fetchData,
  };
};

export default usePaginatedList;
