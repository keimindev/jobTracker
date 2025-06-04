"use client";

import { filterOptions } from "@/utils/dummydata";
import { useState } from "react";
import { FaThList } from "react-icons/fa";
import { FaArrowUpShortWide, FaArrowUpWideShort } from "react-icons/fa6";
import { IoGrid } from "react-icons/io5";

export const Filter = () => {
  const [grid, setGrid] = useState("grid");
  const [order, setOrder] = useState("ascending");

  const handleFilterChange = (grid: string) => {
    setGrid(grid);
  };
  const handleOrderChange = (order: string) => {
    setOrder(order);
  };
  return (
    <div className="flex flex-row items-center justify-between">
      <ul className="w-[70%] flex flex-row items-center gap-2 p-2">
        {filterOptions.map((option: string) => {
          return <li key={option} className="bg-blue-200 px-2 py-1 rounded-lg cursor-pointer hover:bg-blue-300">{option}</li>;
        })}
      </ul>
      <ul className="w-[10%] flex flex-row items-center gap-2 p-2">
        {order === "ascending" ? (
          <li
            className="cursor-pointer"
            onClick={() => handleOrderChange("descending")}
          >
            <FaArrowUpWideShort />
          </li>
        ) : (
          <li
            className="cursor-pointer"
            onClick={() => handleOrderChange("ascending")}
          >
            <FaArrowUpShortWide />
          </li>
        )}
        {grid === "list" ? (
          <li
            className="cursor-pointer"
            onClick={() => handleFilterChange("grid")}
          >
            <FaThList />
          </li>
        ) : (
          <li
            className="cursor-pointer"
            onClick={() => handleFilterChange("list")}
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
