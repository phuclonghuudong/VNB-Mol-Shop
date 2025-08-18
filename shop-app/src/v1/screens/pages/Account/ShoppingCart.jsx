import Text from "@/v1/components/shop/ui/Text";
import { createColumnHelper } from "@tanstack/react-table";
import TableOrder from "./TableOrder";

const ShoppingCart = () => {
  const columnHelper = createColumnHelper();
  const column = [
    columnHelper.accessor("order", {
      header: "Đơn hàng",
    }),
    columnHelper.accessor("date", {
      header: "Ngày",
    }),
    columnHelper.accessor("address", {
      header: "Địa chỉ",
    }),
    columnHelper.accessor("", {
      header: "Giá trị",
    }),
    columnHelper.accessor("action", {
      header: "Tình trạng",
    }),
  ];
  return (
    <div className="lg:w-5/7 md:w-7/10 w-full py-2">
      <Text
        title={"Đơn hàng của bạn"}
        isUppercase
        isPadding={"pb-4"}
        isSize={"text-xl"}
      />

      <TableOrder columns={column} />
    </div>
  );
};

export default ShoppingCart;
