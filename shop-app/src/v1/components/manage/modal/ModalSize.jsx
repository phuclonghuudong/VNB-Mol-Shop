import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { IoClose } from "react-icons/io5";
import ManagementSizeAPI from "../../../apis/administration/managementCatalog/ManagementSize";
import {
  MODAL_TYPES,
  titleButton,
  titleHeaderModal,
} from "../../../common/listStatusModal";
import AxiosToastError from "../../../utils/AxiosToastError";
import ButtonComponent from "../ui/ButtonComponent";
import FormInput from "../ui/FormInput";
import FormStatus from "../ui/FormStatus";
import IconComponent from "../ui/IconComponent";
import Loading from "../ui/Loading";

const ModalSize = ({ type, data, onClose, onLoad }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabledInput, setIsDisabledInput] = useState(false);

  const checkId = data?.id;

  const [validInput, setValidInput] = useState({
    name: data?.name ?? "",
    code: data?.code ?? "",
    type: data?.type ?? "",
    displayOrder: data?.displayOrder ?? "",
    status: data?.status ?? "",
  });

  useEffect(() => {
    type === MODAL_TYPES.DELETE
      ? setIsDisabledInput(true)
      : setIsDisabledInput(false);
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

  const handleBrand = async () => {
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
        res = await ManagementSizeAPI.create_Size(validInput);
      }

      if (type === MODAL_TYPES.UPDATE) {
        res = await ManagementSizeAPI.update_Size(checkId, validInput);
      }

      if (type === MODAL_TYPES.DELETE) {
        res = await ManagementSizeAPI.delete_Size(checkId);
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
              title={"Kích thước: "}
              id={"name"}
              isAutoFocus
              onChange={handleOnchange}
              value={validInput.name}
              isDisabled={isDisabledInput}
              isBold
            />
            <FormInput
              title={"Code: "}
              id={"code"}
              onChange={handleOnchange}
              value={validInput.code}
              isDisabled={isDisabledInput}
              isBold
            />
            <FormInput
              title={"Kiểu: "}
              id={"type"}
              onChange={handleOnchange}
              value={validInput.type}
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
          </div>
        </div>

        <div className=" flex justify-end gap-2 border-t border-gray-200 px-4 py-8">
          <ButtonComponent
            title={getButtonTitle()}
            onClick={handleBrand}
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

export default ModalSize;
