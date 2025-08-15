import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

const TableOrder = ({ columns, data }) => {
  const table = useReactTable({
    data,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <table className="w-full py-0 px-0 border-collapse">
      <thead className="bg-orange-600 text-white  ">
        {table?.getHeaderGroups()?.map((headerGroup) => (
          <tr key={headerGroup?.id}>
            {/* <th>Sr.No</th> */}
            {headerGroup?.headers?.map((header) => (
              <th key={header?.id} className="border font-normal p-1">
                {header?.isPlaceholder
                  ? null
                  : flexRender(
                      header?.column.columnDef?.header,
                      header?.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      {data && data[0] ? (
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="border p-1">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      ) : (
        <tbody className="border border-gray-200 h-20 text-center items-center">
          <tr>
            <th colSpan={columns.length} className="text-md font-normal">
              <p>Không có đơn hàng nào.</p>
            </th>
          </tr>
        </tbody>
      )}
    </table>
  );
};

export default TableOrder;
