import { FaEye } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import IconComponent from "./IconComponent";

const TableCustom = ({
  headers = [],
  data = [],
  onRowClick,
  onUpdate,
  onDelete,
  page = 1,
  limit = 10,
}) => {
  return (
    <div className="overflow-auto rounded border border-gray-300 select-none">
      <table className="min-w-full table-auto text-md text-left ">
        <thead className="bg-gray-100 text-gray-700 text-center dark:bg-gray-800 dark:text-zinc-200 duration-300">
          <tr>
            <th className="px-3 py-2 border border-gray-300">STT</th>
            {headers.map((header, index) => (
              <th key={index} className="px-3 py-2 border border-gray-300">
                {header}
              </th>
            ))}

            {onDelete || onUpdate ? (
              <th className="px-2 py-2 border border-gray-300 w-[80px] ">
                Thao tác
              </th>
            ) : (
              ""
            )}
          </tr>
        </thead>

        <tbody className="cursor-default">
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={headers.length + 1}
                className="text-center py-4 text-gray-500"
              >
                Không có dữ liệu
              </td>
            </tr>
          ) : (
            data.map((rowObj, rowIndex) => {
              const row = rowObj.display;
              const raw = rowObj.raw;
              return (
                <tr
                  key={rowIndex}
                  className="hover:bg-gray-50 text-center border-b dark:hover:bg-zinc-600"
                  onClick={() => onRowClick?.(rowIndex, raw)}
                >
                  <td className="px-3 py-2 border border-gray-300">
                    {(page - 1) * limit + rowIndex + 1}
                  </td>

                  {headers.map((_, colIndex) => (
                    <td
                      key={colIndex}
                      className="px-3 py-2 border border-gray-300"
                    >
                      {row[colIndex]}
                    </td>
                  ))}

                  <td className=" border border-gray-300">
                    <div className="flex justify-center items-center">
                      {onUpdate && (
                        <div className="text-green-900">
                          <IconComponent
                            icon={FaEye}
                            onClick={(e) => {
                              e.stopPropagation();
                              onUpdate?.(rowIndex, raw);
                            }}
                            title={"Cập nhật"}
                            isSize={18}
                          />
                        </div>
                      )}

                      {onDelete && (
                        <div className="text-red-700">
                          <IconComponent
                            icon={MdDeleteForever}
                            onClick={(e) => {
                              e.stopPropagation();
                              onDelete?.(rowIndex, raw);
                            }}
                            title={"Xóa"}
                            isSize={22}
                          />
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableCustom;
