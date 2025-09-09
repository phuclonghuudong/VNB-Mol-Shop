import { useState } from "react";
import { IoClose } from "react-icons/io5";
import ButtonComponent from "../ui/ButtonComponent";
import FormInput from "../ui/FormInput";
import FormStatus from "../ui/FormStatus";
import FormUploadImage from "../ui/FormUploadImage";
import IconComponent from "../ui/IconComponent";

const MODAL_TYPES = {
  CREATE: "create",
  UPDATE: "update",
};

const ModalCategory = ({
  type,
  data = type !== "update" ? null : data,
  onClose,
}) => {
  const [validInput, setValidInput] = useState({
    name: data?.name ?? "",
    slug: data?.slug ?? "",
    description: data?.description ?? "",
    imageUrl: data?.imageUrl ?? "",
    status: data?.status ?? "",
  });

  console.log(validInput);

  const handleOnchange = (event) => {
    const { name, value } = event.target;

    setValidInput((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };

  return (
    <div className="h-screen fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 bg-black/50 p-2 select-none ">
      <div className="w-full max-w-5xl max-h-[90vh] rounded-lg bg-white shadow-lg overflow-y-auto">
        <div className="flex items-center justify-between border-b border-gray-200 px-4 py-2 ">
          <h2 className="text-lg font-bold uppercase w-full text-center">
            {type === MODAL_TYPES.CREATE
              ? "Thêm mới danh mục"
              : "Cập nhật danh mục"}
          </h2>
          <IconComponent icon={IoClose} isSize={30} onClick={onClose} />
        </div>

        <div className="p-4 ">
          <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-2">
            <FormInput
              title={"Tên danh mục: "}
              id={"name"}
              isAutoFocus
              onChange={handleOnchange}
              value={validInput.name}
            />
            <FormInput
              title={"Định danh: "}
              id={"slug"}
              onChange={handleOnchange}
              value={validInput.slug}
            />
            <FormInput
              title={"Mô tả: "}
              id={"description"}
              onChange={handleOnchange}
              value={validInput.description}
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
            />
          </div>
        </div>

        <div className=" flex justify-end gap-2 border-t border-gray-200 px-4 py-2">
          <ButtonComponent title="Thêm mới" onClick={onClose} color="blue" />
          <ButtonComponent title="Hủy" onClick={onClose} color="gray" />
        </div>
      </div>
    </div>
  );
};

export default ModalCategory;
