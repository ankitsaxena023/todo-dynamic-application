import React from "react";
import { Clock } from "react-feather";

const MessageCard = () => {
  return (
    <div className="flex flex-col gap-2 bg-[#283358] px-2 py-1">
      <div>
        <p className="text-sm">
          Happiness is an attitude. We either make ourselves miserable, or happy
          and strong.
        </p>
      </div>
      <div className="flex ">
        <p className="flex items-center text-sm gap-1">
          <Clock className="w-4" />
          12 march
        </p>
      </div>
    </div>
  );
};

export default MessageCard;
