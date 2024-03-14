import React, { useState } from "react";
import { X } from "react-feather";

const AddCard = (props) => {
  const [isShowAddCard, setIsShowAddCard] = useState(false);
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      {isShowAddCard ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (props.onSubmit) props.onSubmit(inputValue);
            setInputValue("");
            setIsShowAddCard(false);
          }}
          className="flex flex-col gap-4"
        >
          <input
            autoFocus
            type="text"
            className="outline-none py-1 rounded-md text-md text-black mt-4"
            placeholder={props.placeholder || "Add To Do Task"}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
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
            className=" w-full bg-slate-500 h-10 flex items-center justify-center"
            onClick={() => setIsShowAddCard(true)}
          >
            {props.text || "Add another card"}
          </p>
        </div>
      )}
    </div>
  );
};

export default AddCard;
