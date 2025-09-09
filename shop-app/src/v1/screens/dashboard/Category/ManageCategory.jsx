import { useEffect, useState } from "react";
import ManagementCategoryAPI from "../../../apis/administration/managementCatalog/ManagementCategory";
import ModalCategory from "../../../components/manage/modal/ModalCategory";
import TableCustom from "../../../components/manage/ui/TableCustom";
import TitleHeaderPage from "../../../components/manage/ui/TitleHeaderPage";
import AxiosToastError from "../../../utils/AxiosToastError";
import { enumColorStatus } from "../../../utils/enumStatus";

const ManageCategory = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [listData, setListData] = useState([]);
  const [itemDetail, setItemDetail] = useState(null);

  const [activeModal, setActiveModal] = useState(null);

  const headers = [
    "ID",
    "Tên danh mục",
    "Định danh",
    "Hình ảnh",
    "Mô tả",
    "Trạng thái",
  ];

  useEffect(() => {
    fetchDataCategory();
  }, []);

  const fetchDataCategory = async () => {
    setIsLoading(true);
    try {
      const result = await ManagementCategoryAPI.get_All_Category();

      if (result?.SUCCESS) {
        setListData(result?.DATA);
      }
    } catch (error) {
      AxiosToastError(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="w-full h-full flex flex-col md:flex-row  gap-2">
      <div className="bg-white md:flex-[8] w-full rounded-md shadow-lg p-2">
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
          data={listData.map((x, index) => ({
            display: [
              x.id,
              x.name,
              x.slug,
              x.imageUrl,
              x.description,
              enumColorStatus(x.status),
            ],
            raw: x,
          }))}
          onRowClick={(index) => {
            const rowData = listData[index];
          }}
          onUpdate={(index, row) => {
            setActiveModal("update");
            setItemDetail(row);
          }}
          onDelete={(index, row) => {
            setItemDetail(row);
          }}
        />
      </div>
      <div className="bg-white md:flex-[3] w-full rounded-md shadow-lg p-2"></div>

      {activeModal && (
        <ModalCategory
          type={activeModal}
          data={itemDetail}
          onClose={() => setActiveModal(null)}
        />
      )}
    </div>
  );
};

export default ManageCategory;
