import React from "react";
import { Clock } from "react-feather";

const MessageCard = (props) => {
  console.log("props", props);
  return (
    <div
      className="flex flex-col gap-2 bg-[#283358] px-2 py-1 w-full"
      draggable
      onDragEnd={() => props.handleDragEnd(props.card?.id, props.boardId)}
      onDragEnter={() => props.handleDragEnter(props.card?.id, props.boardId)}
    >
      <div>
        <p className="text-sm">{props.card.title}</p>
      </div>
      <div className="flex ">
        {props.card?.date && (
          <p className="flex items-center text-sm gap-1">
            <Clock className="w-4" />
            12 march
          </p>
        )}
      </div>
    </div>
  );
};

export default MessageCard;
