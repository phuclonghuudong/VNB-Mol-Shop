import { useEffect, useState } from "react";
import UploadImageAPI from "../../../apis/administration/uploadImage";
import AxiosToastError from "../../../utils/AxiosToastError";

const FormUploadImage = ({
  title,
  value: imageUrl,
  onChange,
  onLoadingChange,
  isDisabled,
}) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    onLoadingChange?.(loading);
  }, [loading, onLoadingChange]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const handleUploadImage = async (e) => {
    const file = e.target.files[0];

    if (!file) {
      return;
    }
    const formData = new FormData();
    formData.append("image", file);

    setLoading(true);
    try {
      const result = await UploadImageAPI.upload_Image(formData);
      if (result?.SUCCESS) {
        onChange?.(result?.DATA?.url);
      }
    } catch (error) {
      AxiosToastError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid gap-1">
      <p>{title}:</p>
      <div className="flex gap-4 flex-col lg:flex-row items-center">
        <div className="border bg-gray-100 h-36 w-full lg:w-36 rounded border-gray-200 items-center justify-center flex">
          {imageUrl ? (
            <img
              alt="image"
              src={imageUrl}
              className="w-full h-fill object-scale-down"
            />
          ) : (
            <p className="text-sm">Chưa có hình ảnh</p>
          )}
        </div>

        <form onSubmit={handleSubmit}>
          <label
            htmlFor="uploadImage"
            className="text-center items-center justify-center  w-30 h-10"
          >
            <div
              className={`
                       bg-gray-100 hover:bg-blue-500 p-2 rounded  font-medium text-xs ${
                         loading || isDisabled
                           ? "cursor-not-allowed opacity-50 pointer-events-none"
                           : "cursor-pointer"
                       } `}
            >
              {loading ? "Đang tải ảnh lên ...." : "Thêm hình ảnh"}
            </div>
            <input
              onChange={handleUploadImage}
              type="file"
              id="uploadImage"
              name="uploadImage"
              className="hidden"
              disabled={loading || isDisabled}
            />
          </label>
        </form>
      </div>
    </div>
  );
};

export default FormUploadImage;
