import React from "react";
import { IResourceComponentsProps, useNavigation } from "@refinedev/core";
import { useTable } from "@refinedev/react-table";
import { ColumnDef, flexRender } from "@tanstack/react-table";
// const MakeData = [
//   {
//     id: "1",
//     amount: "",
//     location: "ໄຟແດງທາດຫລວງ",
//     time: "2023/06/30 10:31 AM",
//     look: "ເບິ່ງ",
//   },
//   {
//     id: "2",
//     amount: "",
//     location: "ໄຟແດງທາດຫລວງ",
//     time: "2023/06/30 10:31 AM",
//     look: "ເບິ່ງ",
//   },
//   {
//     id: "3",
//     amount: "",
//     location: "ໄຟແດງທາດຫລວງ",
//     time: "2023/06/30 10:31 AM",
//     look: "ເບິ່ງ",
//   },
//   {
//     id: "4",
//     amount: "",
//     location: "ໄຟແດງທາດຫລວງ",
//     time: "2023/06/30 10:31 AM",
//     look: "ເບິ່ງ",
//   },
// ];

export const History: React.FC<any> = () => {
  const columns = React.useMemo<ColumnDef<any>[]>(
    () => [
      {
        id: "0",
        accessorKey: "id",
        header: "ລຳດັບ",
      },
      {
        id: "1",
        accessorKey: "amount",
        header: "ຈໍານວນລ່ວງລະເມີດ",
      },
      {
        id: "2",
        accessorKey: "location",
        header: "ສະຖານທ່່ີ",
      },
      {
        id: "3",
        accessorKey: "time",
        header: "ວັນທີເດືອນປີ",
      },
      {
        id: "4",
        accessorKey: "time",
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
      <div className="grid grid-cols-1 md:grid-cols-2 shadow-md  px-8 pt-6 pb-8 mb-4 my-2 bg-slate-900 rounded-xl text-white">
        <div className="m-3 px-8 bg-slate-800 rounded-xl text-white max-w-[500px]">
          <div className="py-6">
            <h1 className=" text-center font-bold ">ລາຍລະອຽດລົດ</h1>
            <ul>
              <li>ປ້າຍລົດ : ກກ 9898</li>
              <li>ຍີ້ຫໍ້ລົດ: Honda</li>
              <li>ສີລົດ: ສີຂຽວ </li>
              <li>ປະເພດສີປ້າຍ: ປ້າຍຂາວ</li>
              <li>ແຂວງ: ແຂວງວຽງຈັນ</li>
              <li>ເວລາລ່ວງລະເມີດ: 2023/06/30 11:31 AM</li>
            </ul>
          </div>
        </div>
        <div className="overflow-x-auto bg-slate-900 m-3 ">
          <table className="min-w-max w-full">
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
                  className="bg-slate-600 border-b transition duration-300 ease-in-out hover:bg-slate-700"
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="text-sm font-light px-6 py-4 whitespace-nowrap"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
