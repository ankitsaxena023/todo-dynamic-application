import React, { useState } from "react";
import { X } from "react-feather";

const AddCard = () => {
  const [isShowAddCard, setIsShowAddCard] = useState(false);

  return (
    <div>
      {isShowAddCard ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            className="outline-none py-1 rounded-md text-md text-black"
          />
          <div className="flex w-full justify-center items-center gap-8">
            <button
              type="submit"
              className="px-6 py-2 bg-indigo-800 rounded-3xl text-sm font-semibold cursor-pointer hover:bg-indigo-500 transition-all delay-250 mr-2"
            >
              Add
            </button>

            <X
              onClick={() => setIsShowAddCard(false)}
              className="cursor-pointer"
            />
          </div>
        </form>
      ) : (
        <div className="cursor-pointer">
          <p
            className=" w-full bg-slate-800 h-10 flex items-center justify-center"
            onClick={() => setIsShowAddCard(true)}
          >
            Add another card
          </p>
        </div>
      )}
    </div>
  );
};

export default AddCard;
