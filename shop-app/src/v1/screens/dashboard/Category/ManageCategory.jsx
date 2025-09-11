import { useState } from "react";
import ManagementCategoryAPI from "../../../apis/administration/managementCatalog/ManagementCategory";
import ModalCategory from "../../../components/manage/modal/ModalCategory";
import Pagination from "../../../components/manage/ui/Pagination";
import ShowInfoImage from "../../../components/manage/ui/ShowInfoImage";
import TableCustom from "../../../components/manage/ui/TableCustom";
import TitleHeaderPage from "../../../components/manage/ui/TitleHeaderPage";
import usePaginatedList from "../../../hooks/usePaginatedList";
import { enumColorStatus } from "../../../utils/enumStatus";

const ManageCategory = () => {
  const [itemDetail, setItemDetail] = useState(null);
  const [activeModal, setActiveModal] = useState(null);

  const headers = [
    "Tên danh mục",
    "Định danh",
    "Mô tả",
    "Hình ảnh",
    "Trạng thái",
  ];

  const {
    listData,
    isLoading,
    page,
    totalPages,
    pageSize,
    setPage,
    handleSearch,
    fetchData,
  } = usePaginatedList(ManagementCategoryAPI.get_All_Category, {
    initialPage: 1,
    pageSize: 10,
    debounceMs: 1000,
  });

  return (
    <div className=" flex flex-col md:flex-row  gap-2">
      <div className="bg-white md:flex-[8] w-full h-full rounded-md shadow-lg p-4">
        <TitleHeaderPage
          title="Danh mục phân loại"
          isIconCreate
          onClick={() => {
            setActiveModal("create");
            setItemDetail([]);
          }}
          onSearch={handleSearch}
          onLoading={isLoading}
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
            fetchData(newPage);
          }}
        />
      </div>
      <div className="bg-white md:flex-[3] w-full rounded-md shadow-lg p-2"></div>

      {activeModal && (
        <ModalCategory
          type={activeModal}
          data={itemDetail}
          onClose={() => setActiveModal(null)}
          onLoad={fetchData}
        />
      )}
    </div>
  );
};

export default ManageCategory;
