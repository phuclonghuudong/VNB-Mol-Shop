import { useState } from "react";
import { IoClose } from "react-icons/io5";
import IconComponent from "./IconComponent";

const ShowInfoImage = ({ imageUrl }) => {
  const [showImage, setShowImage] = useState(false);

  return (
    <div>
      {imageUrl ? (
        <div
          className="flex items-center justify-center cursor-pointer"
          onClick={() => setShowImage(true)}
        >
          <img
            src={imageUrl}
            alt="thumbnail"
            className="w-10 h-10 object-contain rounded"
          />
        </div>
      ) : (
        <p className="text-xs">Không có ảnh</p>
      )}

      {showImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="relative max-w-4xl max-h-[90vh] w-full flex flex-col items-center">
            <div className="text-white ">
              <IconComponent
                icon={IoClose}
                isSize={60}
                title={"Đóng"}
                onClick={() => setShowImage(false)}
              />
            </div>

            <img
              src={imageUrl}
              alt="preview"
              className="max-w-full max-h-[80vh] object-contain rounded"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowInfoImage;
