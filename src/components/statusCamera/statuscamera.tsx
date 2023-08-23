import React from "react";
import { IResourceComponentsProps, useNavigation } from "@refinedev/core";
import { useTable } from "@refinedev/react-table";
import { ColumnDef, flexRender } from "@tanstack/react-table";
const MakeData = [
  {
    id: "1",
    name: "ກ້ອງໂຕທີ1",
    location: "ສີ່ແຍກທາດຫລວງ",
    status: "offline",
  },
  {
    id: "2",
    name: "ກ້ອງໂຕທີ2",
    location: "ວົງວຽນປະຕູໄຊ",
    status: "online",
  },
  {
    id: "3",
    name: "ກ້ອງໂຕທີ3",
    location: "ໄຟແດງ ດົງໂດກ",
    status: "offline",
  },
  {
    id: "4",
    name: "ກ້ອງໂຕທີ4",
    location: "ໄຟແດງ ໄອເຕັກ",
    status: "online",
  },
];

export const Listcamera: React.FC<any> = () => {
  const columns = React.useMemo<ColumnDef<any>[]>(
    () => [
      {
        id: "0",
        accessorKey: "id",
        header: "#",
      },
      {
        id: "1",
        accessorKey: "name",
        header: "name",
      },
      {
        id: "2",
        accessorKey: "location",
        header: "location",
      },
      {
        id: "3",
        accessorKey: "status",
        header: "status",
      },
      {
        id: "4",
        accessorKey: "",
        header: "acction",

        cell: function render({ getValue }) {
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
                  show("user", getValue() as string);
                }}
              >
                Show
              </button>
              <button
                onClick={() => {
                  edit("user", getValue() as string);
                }}
              >
                Edit
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
  } = useTable({
    data: MakeData,
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
      <div className="overflow-x-auto bg-slate-900 my-5 px-6 pb-12">
        <table className="min-w-max w-full table-auto my-5">
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
      </div>
    </div>
  );
};
