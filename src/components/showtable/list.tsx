import React from "react";
import { IResourceComponentsProps, useNavigation, GetManyResponse, useMany,} from "@refinedev/core";
import { useTable } from "@refinedev/react-table";
import { ColumnDef, flexRender } from "@tanstack/react-table";
export const Table: React.FC<any> = () => {
  const columns = React.useMemo<ColumnDef<any>[]>(
    () => [
      {
        id: "0",
        accessorKey: "id",
        header: "ລຳດັບ",
      },
      {
        id: "1",
        accessorKey: "paiy",
        header: "ປ້າຍລົດ",
      },
      {
        id: "2",
        accessorKey: "brand",
        header: "ຍີ່ຫໍ້ລົດ",
      },
      {
        id: "3",
        accessorKey: "color",
        header: "ສີລົດ",
      },
      {
        id: "4",
        accessorKey: "typepaiy",
        header: "ປະເພດສີປ້າຍ",
      },
      {
        id: "5",
        accessorKey: "province",
        header: "ແຂວງ",
      },
      {
        id: "6",
        accessorKey: "time",
        header: "ເວລາລ່ວງລະເມີດ",
      },
      {
        id: "action",
        accessorKey: "action",
        header: "ເບິ່ງ",

        cell: function render({ getValue, }) {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                gap: "15px",
              }}
            >
              <button
                onClick={() => {
                  show("MakeData", getValue() as string);
                }}
              >
                Show
              </button>
            </div>
          );
        },
      },
    ],
    []
  );
  const { edit, show, create } = useNavigation();
  const {
    getHeaderGroups,
    getRowModel,
    setOptions,
    refineCore: {
      tableQueryResult: { data: tableData },
    },
    getState,
    setPageIndex,
    getCanPreviousPage,
    getPageCount,
    getCanNextPage,
    nextPage,
    previousPage,
    setPageSize,
    getColumn,
  } = useTable({
    // data: MakeData,
    columns,
  });

  setOptions((prev) => ({
    ...prev,
    meta: {
      ...prev.meta,
    },
  }));

  return (
    <div>
      <div className="py-2 bg-slate-900 my-5 px-20">
        <table className=" w-full table-auto my-5">
          <thead className="bg-slate-800 border-b table-auto text-white">
            {getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    scope="col"
                    className="text-sm font-medium px-6 py-4 text-left"
                  >
                    {!header.isPlaceholder &&
                      flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className="bg-slate-600 border-b transition duration-300 ease-in-out hover:bg-slate-700 text-white"
              >
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="text-sm font-light px-6 py-4 whitespace-nowrap"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex items-center justify-centers border-gray-200 text-white px-4 py-3 sm:px-2">
          <div className="sm:flex sm:flex-1 sm:items-center sm:justify-between ">
            <div>
              <nav
                className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                aria-label="Pagination"
              >
                <button
                  onClick={() => setPageIndex(0)}
                  disabled={!getCanPreviousPage()}
                  className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-slate-700 focus:z-20 focus:outline-offset-0"
                >
                  ໜ້າທຳອິດ
                </button>

                <button
                  onClick={() => previousPage()}
                  disabled={!getCanPreviousPage()}
                  className="relative inline-flex items-center px-2 py-2 text-sm font-semibold text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-slate-700 focus:z-20 focus:outline-offset-0"
                >
                  ກ່ອນໜ້າ
                </button>

                <span className="relative inline-flex items-center px-2 py-2 text-sm font-semibold text-gray-400 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                  ...
                </span>
                <button
                  onClick={() => nextPage()}
                  disabled={!getCanNextPage()}
                  className="relative inline-flex items-center px-2 py-2 text-sm font-semibold text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-slate-700 focus:z-20 focus:outline-offset-0"
                >
                  ໜ້າຕໍ່ໄປ
                </button>
                <button
                  onClick={() => setPageIndex(getPageCount() - 1)}
                  disabled={!getCanNextPage()}
                  className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-slate-700 focus:z-20 focus:outline-offset-0"
                >
                  ໜ້າສຸດທ້າຍ
                </button>

                <select
                  className="relative cursor-default rounded-md bg-slate-900 py-1.5 pl-3 pr-10 text-left text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6 hover:bg-slate-700"
                  aria-haspopup="listbox"
                  aria-expanded="true"
                  aria-labelledby="listbox-label"
                  value={getState().pagination.pageSize}
                    onChange={(e) => {
                        setPageSize(Number(e.target.value));
                  }}
                >
                  {[1, 2, 3, 4, 5].map((pageSize) => (
                    <option key={pageSize} value={pageSize}>
                      show{pageSize}
                    </option>
                  ))}
                </select>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
