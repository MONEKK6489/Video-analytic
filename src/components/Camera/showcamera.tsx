import React from "react";
import {
  useShow,
  useResource,
  useNavigation,
  IResourceComponentsProps,
} from "@refinedev/core";

export const Camera: React.FC<any> = () => {
  const { edit, list } = useNavigation();
  const { id, resource } = useResource();
  const { queryResult } = useShow({
    resource: "user",
    id,
  });
  const { data, isLoading } = queryResult;
  const record = data?.data;
  return (
    <div>
      <select
        className="my-2 relative cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
        aria-haspopup="listbox"
        aria-expanded="true"
        aria-labelledby="listbox-label"
        value=""
        onChange={(e) => {
          Number(e.target.value);
        }}
      >
        {[0, 1, 2, 3, 4].map((setcamera) => (
          <option key={setcamera} value={setcamera}>
            ເລືອກຈຳນວນກ້ອງທີ່ຈະສະແດງ{setcamera}
          </option>
        ))}
      </select>
      <div className="grid grid-cols-1 sm:grid-cols-2 shadow-md  px-8 pt-6 pb-8 mb-4 my-2 bg-slate-900 rounded-xl">
        <div>
          <select
            className="my-2 relative cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
            aria-haspopup="listbox"
            aria-expanded="true"
            aria-labelledby="listbox-label"
            value=""
            onChange={(e) => {
              Number(e.target.value);
            }}
          >
            {[1, 2, 3, 4, 5].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                ເລືອກເບິ່ງກ້ອງ{pageSize}
              </option>
            ))}
          </select>
          <img
            src="https://www.traffictechnologytoday.com/wp-content/uploads/2019/09/Corrux-AI-based-traffic-recognition.jpg"
            alt="My Image"
            width={500}
            className="rounded-lg"
          />
        </div>
        <div>
          <select
            className="my-2 relative cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
            aria-haspopup="listbox"
            aria-expanded="true"
            aria-labelledby="listbox-label"
            value=""
            onChange={(e) => {
              Number(e.target.value);
            }}
          >
            {[1, 2, 3, 4, 5].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                ເລືອກເບິ່ງກ້ອງ{pageSize}
              </option>
            ))}
          </select>
          <img
            src="https://www.traffictechnologytoday.com/wp-content/uploads/2019/09/Corrux-AI-based-traffic-recognition.jpg"
            alt="My Image"
            width={500}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};
