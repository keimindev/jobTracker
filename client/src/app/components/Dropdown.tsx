"use client" 

import { filterOptions } from "../../utils/dummydata";
import { useFilterStore } from "../store/filterStore";


type StatusProps = {
  status: string;
};

const Dropdown = ({status} : StatusProps) => {
 const { setStatus } = useFilterStore();
  
 return (
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="p-2 border rounded"
      >
        {filterOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
  )
}

export default Dropdown