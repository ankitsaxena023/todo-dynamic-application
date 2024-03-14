import React from "react";
import { MoreVertical, Home, Star } from "react-feather";
import AddCard from "../AddCard/AddCard";

const Navbar = (props) => {
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
      <div className="px-3 py-2 w-52 text-sm font-semibold cursor-pointer  transition-all delay-250 mr-2">
        <AddCard
          text="Create new board"
          placeholder="Enter board name"
          onSubmit={(value) => props.addBoard(value)}
        />
      </div>
    </div>
  );
};

export default Navbar;
