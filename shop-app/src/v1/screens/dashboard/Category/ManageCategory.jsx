import { useEffect, useState } from "react";
import ManagementCategoryAPI from "../../../apis/administration/managementCatalog/ManagementCategory";
import ModalCategory from "../../../components/manage/modal/ModalCategory";
import Pagination from "../../../components/manage/ui/Pagination";
import ShowInfoImage from "../../../components/manage/ui/ShowInfoImage";
import TableCustom from "../../../components/manage/ui/TableCustom";
import TitleHeaderPage from "../../../components/manage/ui/TitleHeaderPage";
import AxiosToastError from "../../../utils/AxiosToastError";
import { enumColorStatus } from "../../../utils/enumStatus";

const ManageCategory = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [listData, setListData] = useState([]);
  const [itemDetail, setItemDetail] = useState(null);

  const [page, setPage] = useState(1);
  const [pageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(1);

  const [activeModal, setActiveModal] = useState(null);

  const headers = [
    "Tên danh mục",
    "Định danh",
    "Mô tả",
    "Hình ảnh",
    "Trạng thái",
  ];

  useEffect(() => {
    fetchDataCategory(page);
  }, [page]);

  const fetchDataCategory = async (currentPage = 1) => {
    setIsLoading(true);
    try {
      const result = await ManagementCategoryAPI.get_All_Category({
        page: currentPage,
        limit: pageSize,
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
  return (
    <div className=" flex flex-col md:flex-row  gap-2">
      <div className="bg-white md:flex-[8] w-full h-full rounded-md shadow-lg p-4">
        <TitleHeaderPage
          title="Danh mục phân loại"
          isIcon
          onClick={() => {
            setActiveModal("create");
            setItemDetail([]);
          }}
        />

        <TableCustom
          headers={headers}
          data={listData?.map((x, index) => ({
            display: [
              x.name,
              x.slug,
              x.description,
              x.imageUrl && <ShowInfoImage imageUrl={x.imageUrl} />,
              enumColorStatus(x.status),
            ],
            raw: x,
          }))}
          page={page}
          limit={pageSize}
          onRowClick={(index) => {
            const rowData = listData[index];
          }}
          onUpdate={(index, row) => {
            setActiveModal("update");
            setItemDetail(row);
          }}
          onDelete={(index, row) => {
            setItemDetail(row);
            setActiveModal("delete");
          }}
        />

        <Pagination
          totalPages={totalPages}
          page={page}
          onPageChange={(newPage) => {
            setPage(newPage);
            fetchDataCategory(newPage);
          }}
        />
      </div>
      <div className="bg-white md:flex-[3] w-full rounded-md shadow-lg p-2"></div>

      {activeModal && (
        <ModalCategory
          type={activeModal}
          data={itemDetail}
          onClose={() => setActiveModal(null)}
          onLoad={fetchDataCategory}
        />
      )}
    </div>
  );
};

export default ManageCategory;
