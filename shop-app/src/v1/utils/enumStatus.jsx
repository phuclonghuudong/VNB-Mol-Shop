// utils/enumStatus.js
export const statuses = [
  { label: "Hoạt động", value: 1, color: "bg-green-400" },
  { label: "Chờ duyệt", value: 2, color: "bg-orange-300" },
  { label: "Tạm dừng", value: 0, color: "bg-gray-300" },
  { label: "Đã xóa", value: -1, color: "bg-red-500" },
];

export const enumStatus = (status) => {
  const found = statuses.find((s) => s.value === status);
  return found ? found.label : "Không xác định";
};

export const enumColorStatus = (status) => {
  const classColor = "p-1 rounded text-black text-xs font-semibold select-none";
  const found = statuses.find((s) => s.value === status);
  return (
    <p className={`${classColor} ${found ? found.color : "bg-slate-300"}`}>
      {found ? found.label : "Không xác định"}
    </p>
  );
};
