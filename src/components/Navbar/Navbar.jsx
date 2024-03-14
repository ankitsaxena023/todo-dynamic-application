import React from "react";
import { MoreVertical, Home, Star } from "react-feather";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full bg-slate-800 h-16 rounded-sm">
      <div className="flex items-center gap-4">
        <MoreVertical />
        <div className="flex justify-center items-center w-8 h-8 bg-[rgba(255,255,255,0.1)] rounded-full">
          <Home className="text-indigo-500" />
        </div>
        <div>
          <Star className="" />
        </div>
        <p>Thriving Technology</p>
      </div>
      <div>
        <button className="px-3 py-3 bg-indigo-800 rounded-full text-sm font-semibold cursor-pointer hover:bg-indigo-500 transition-all delay-250 mr-2">
          Create new board
        </button>
      </div>
    </div>
  );
};

export default Navbar;
