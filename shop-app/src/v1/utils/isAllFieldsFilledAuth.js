import toast from "react-hot-toast";

const fieldLabels = {
  fullname: "HỌ VẢ TÊN",
  username: "TÊN ĐĂNG NHẬP",
  email: "EMAIL",
  phone: "SỐ ĐIỆN THOẠI",
  address: "ĐỊA CHỈ",
  password: "MẬT KHẨU",
  confirmPassword: "NHẬP LẠI MẬT KHẨU",
  otp: "MÃ XÁC NHẬN",
};

export const isAllFieldsFilledAuth = (obj) => {
  const emptyFields = Object.entries(obj)
    .filter(([_, val]) => String(val).trim() === "")
    .map(([key]) => fieldLabels[key] || key);

  if (emptyFields.length > 0) {
    toast.error(`VUI LÒNG NHẬP: ${emptyFields.join(", ")}`);
    return false;
  }

  return true;
};
