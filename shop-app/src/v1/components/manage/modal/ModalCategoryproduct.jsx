import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { IoClose } from "react-icons/io5";
import ManagementCategoryAPI from "../../../apis/administration/managementCatalog/ManagementCategory";
import ManagementCategoryProductAPI from "../../../apis/administration/managementCatalog/ManagementCategoryproduct";
import {
  MODAL_TYPES,
  titleButton,
  titleHeaderModal,
} from "../../../common/listStatusModal";
import AxiosToastError from "../../../utils/AxiosToastError";
import ButtonComponent from "../ui/ButtonComponent";
import FormInput from "../ui/FormInput";
import FormSelect from "../ui/FormSelect";
import FormStatus from "../ui/FormStatus";
import FormUploadImage from "../ui/FormUploadImage";
import IconComponent from "../ui/IconComponent";
import Loading from "../ui/Loading";

const ModalCategoryProduct = ({ type, data, onClose, onLoad }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabledInput, setIsDisabledInput] = useState(false);

  const [listCategory, setListCategory] = useState([]);

  const checkId = data?.id;

  const [validInput, setValidInput] = useState({
    categoryId: data?.categoryId ?? "",
    name: data?.name ?? "",
    slug: data?.slug ?? "",
    description: data?.description ?? "",
    imageUrl: data?.imageUrl ?? "",
    status: data?.status ?? "",
  });

  useEffect(() => {
    type === MODAL_TYPES.DELETE
      ? setIsDisabledInput(true)
      : setIsDisabledInput(false);
    fetchDataCategory();
  }, [type]);

  const handleOnchange = (event) => {
    const { name, value } = event.target;

    setValidInput((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };

  const handleCategory = async () => {
    if (
      !checkId &&
      (type === MODAL_TYPES.UPDATE || type === MODAL_TYPES.DELETE)
    ) {
      toast.error("KHÔNG CÓ DỮ LIỆU");
      onClose();
    }

    setIsLoading(true);
    try {
      let res = [];
      if (type === MODAL_TYPES.CREATE) {
        res = await ManagementCategoryProductAPI.create_Category_Product(
          validInput
        );
      }

      if (type === MODAL_TYPES.UPDATE) {
        res = await ManagementCategoryProductAPI.update_Category_Product(
          checkId,
          validInput
        );
      }

      if (type === MODAL_TYPES.DELETE) {
        res = await ManagementCategoryProductAPI.delete_Category_Product(
          checkId
        );
      }

      if (res?.SUCCESS) {
        toast.success(res?.MESSAGE);
        onClose();
        onLoad();
      }
    } catch (error) {
      AxiosToastError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getButtonTitle = () => {
    if (isLoading) return <Loading />;
    return titleButton[type] || "Không xác định";
  };

  const fetchDataCategory = async () => {
    setIsLoading(true);
    try {
      const result = await ManagementCategoryAPI.get_All_Category_Active();
      if (result?.SUCCESS) {
        setListCategory(result?.DATA);
      }
    } catch (error) {
      AxiosToastError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 bg-black/70 p-2 select-none ">
      <div className="w-full max-w-5xl max-h-[90vh] rounded-lg bg-white shadow-lg overflow-y-auto">
        <div className="flex items-center justify-between border-b border-gray-200 px-4 py-8 ">
          <h2 className="text-xl font-bold uppercase w-full text-center">
            {titleHeaderModal[type]}
          </h2>
          <IconComponent icon={IoClose} isSize={30} onClick={onClose} />
        </div>

        <div className="p-4 ">
          <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-2">
            {type !== MODAL_TYPES.CREATE ? (
              <FormInput
                title={"ID: "}
                id={"id"}
                isAutoFocus
                value={checkId}
                isDisabled
                isBold
              />
            ) : null}
            <FormInput
              title={"Tên loại sản phẩm: "}
              id={"name"}
              isAutoFocus
              onChange={handleOnchange}
              value={validInput.name}
              isDisabled={isDisabledInput}
              isBold
            />

            <FormSelect
              title="Loại danh mục"
              options={listCategory ? listCategory : "Dữ liệu rỗng"}
              onChange={(value) =>
                setValidInput((pre) => ({
                  ...pre,
                  categoryId: value,
                }))
              }
              isBold
            />

            <FormInput
              title={"Định danh: "}
              id={"slug"}
              onChange={handleOnchange}
              value={validInput.slug}
              isDisabled={isDisabledInput}
              isBold
            />
            <FormInput
              title={"Mô tả: "}
              id={"description"}
              onChange={handleOnchange}
              value={validInput.description}
              isDisabled={isDisabledInput}
              isBold
            />
            <FormStatus
              title={"Trạng thái: "}
              id={"status"}
              value={validInput.status}
              onChange={(newStatus) =>
                setValidInput((pre) => ({
                  ...pre,
                  status: newStatus,
                }))
              }
              isDisabled={isDisabledInput}
              isBold
            />
            <FormUploadImage
              title={"Hình ảnh: "}
              value={validInput.imageUrl}
              onChange={(newImage) =>
                setValidInput((pre) => ({
                  ...pre,
                  imageUrl: newImage,
                }))
              }
              onLoadingChange={(status) => setIsLoading(status)}
              isDisabled={isDisabledInput}
              isBold
            />
          </div>
        </div>

        <div className=" flex justify-end gap-2 border-t border-gray-200 px-4 py-8">
          <ButtonComponent
            title={getButtonTitle()}
            onClick={handleCategory}
            color="blue"
            isDisabled={isLoading}
          />
          <ButtonComponent
            title="Hủy"
            onClick={onClose}
            color="gray"
            isDisabled={isLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default ModalCategoryProduct;
