import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Nav = () => {
  const HandleClick = () => {};
  return (
    <>
      <div onClick={HandleClick} className="flex justify-center gap-3">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
          <Link to={"/"}> Inventory</Link>
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
          <Link to={"/character"}>Character</Link>
        </button>
      </div>
      <Outlet />
    </>
  );
};
