import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex flex-row items-center justify-between p-2">
      <Link href="/">
        <p className="text-xl">Job Tracker</p>
      </Link>
      <Link href="/add">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded-lg cursor-pointer">
          Add applied company
        </button>
      </Link>
    </div>
  );
};

export default Header;
