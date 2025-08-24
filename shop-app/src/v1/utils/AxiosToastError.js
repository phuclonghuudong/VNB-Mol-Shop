import toast from "react-hot-toast";

const AxiosToastError = (error) => {
  console.log("LỖI AxiosToastError: ", error);
  toast.error(error?.response?.data?.MESSAGE || error?.response?.statusText || error?.message);
};

export default AxiosToastError;

