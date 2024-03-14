import React from "react";
import MessageCard from "../MessageCard/MessageCard";
import "./Board.css";
import AddCard from "../AddCard/AddCard";

const Board = (props) => {
  return (
    <div className="max-w-96 w-full flex flex-col max-h-full">
      <div className="px-2 py-4 font-semibold bg-[#171e35] mb-4">
        <p className="text-md leading-7">{props.board?.title}</p>
      </div>
      <div className="flex flex-col gap-2 overflow-y-auto flex-1 h-full custom-scroll">
        {props.board?.cards?.map((item) => (
          <MessageCard
            key={item.id}
            card={item}
            boardId={props.board?.id}
            handleDragEnd={props.handleDragEnd}
            handleDragEnter={props.handleDragEnter}
          />
        ))}
        <AddCard onSubmit={(value) => props.addCard(value, props.board?.id)} />
      </div>
    </div>
  );
};

export default Board;
