"use client";

import { filterOptions } from "@/utils/dummydata";
import { FaThList } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import { useAppliedCompanyStore } from "../store/appliedCompanyStore";
import {
  TbSortAscendingNumbers,
  TbSortDescendingNumbers,
} from "react-icons/tb";
import Dropdown from "./Dropdown";
import { useFilterStore } from "../store/filterStore";

export const Filter = () => {
  const { orderBy, order, view, setView} = useAppliedCompanyStore();
  const { status, setStatus } = useFilterStore();

  return (
    <div className="flex flex-row items-center justify-between">
      <ul className="hidden md:flex w-[70%] flex flex-row items-center gap-2 p-2">
        {filterOptions.map((option: string) => {
          const isSelected = option === status;
          return (
            <li
              key={option}
              className={`px-2 py-1 rounded-lg cursor-pointer 
              ${isSelected ? 'bg-blue-400 text-white' : 'bg-blue-200 hover:bg-blue-300'}`}
              onClick={() => { setStatus(option);
              }}
            >
              {option}
            </li>
          );
        })}
      </ul>
      <div className="md:hidden px-2">
        <Dropdown/>
      </div>
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
