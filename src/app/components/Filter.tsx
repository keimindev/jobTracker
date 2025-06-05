"use client";

import { filterOptions } from "@/utils/dummydata";
import { FaThList } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import { useAppliedCompanyStore } from "../store/appliedCompanyStore";
import {
  TbSortAscendingNumbers,
  TbSortDescendingNumbers,
} from "react-icons/tb";

export const Filter = () => {
  const { orderBy, order, view, setView } = useAppliedCompanyStore();

  return (
    <div className="flex flex-row items-center justify-between">
      <ul className="w-[70%] flex flex-row items-center gap-2 p-2">
        {filterOptions.map((option: string) => {
          return (
            <li
              key={option}
              className="bg-blue-200 px-2 py-1 rounded-lg cursor-pointer hover:bg-blue-300"
            >
              {option}
            </li>
          );
        })}
      </ul>
      <ul className="w-[10%] flex flex-row items-center gap-2 p-2">
        {order === "ascending" ? (
          <li
            className="cursor-pointer"
            onClick={() => {
              orderBy("descending");
            }}
          >
            <TbSortAscendingNumbers />
          </li>
        ) : (
          <li
            className="cursor-pointer"
            onClick={() => {
              orderBy("ascending");
            }}
          >
            <TbSortDescendingNumbers />
          </li>
        )}
        {view === "list" ? (
          <li
            className="cursor-pointer hidden sm:block"
            onClick={() => setView("grid")}
          >
            <FaThList />
          </li>
        ) : (
          <li
            className="cursor-pointer hidden sm:block"
            onClick={() => setView("list")}
          >
            <IoGrid />
          </li>
        )}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Search"
          className="border-1 border-gray-300 rounded-lg p-2 w-full"
        />
      </div>
    </div>
  );
};
