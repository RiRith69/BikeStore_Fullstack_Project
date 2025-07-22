import React from "react";

const Item = (props) => {
  return (
    <div className="h-full border-2 border-teal-400 rounded-xl shadow-md p-4 bg-teal-50 text-center transform transition hover:scale-105 hover:shadow-lg cursor-pointer">
      <div className="w-full h-[70%] mb-3 flex items-center justify-center overflow-hidden">
        <img
          src={props.image}
          alt={props.name}
          className="w-full h-auto rounded-md"
        />
      </div>
      <p className="text-gray-800 font-medium text-sm sm:text-base">
        {props.name}
      </p>
      <div className="flex justify-center gap-4 mt-2 text-sm sm:text-base">
        <span className="font-semibold text-teal-500">${props.new_price}</span>
        <span className="line-through text-gray-400">${props.old_price}</span>
      </div>
    </div>
  );
};

export default Item;
