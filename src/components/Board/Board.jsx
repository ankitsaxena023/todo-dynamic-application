import React from "react";
import MessageCard from "../MessageCard/MessageCard";
import "./Board.css";
import AddCard from "../AddCard/AddCard";

const Board = () => {
  return (
    <div className="min-w-80 w-full flex flex-col max-h-full">
      <div className="px-2 py-4 font-semibold bg-[#171e35] mb-4">
        <p className="text-md leading-7">Things To Do</p>
      </div>
      <div className="flex flex-col gap-2 overflow-y-auto flex-1 h-full custom-scroll">
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <MessageCard />
        <AddCard />
      </div>
    </div>
  );
};

export default Board;
