import React from "react";

const Item = (props) => {
  return (
    <div
      className="border-2 border-teal-400 rounded-xl shadow-md p-4 bg-white text-center transform transition hover:scale-105 hover:shadow-lg cursor-pointer"
    >
      <img
        src={props.image}
        alt={props.name}
        className="w-full h-auto rounded-md mb-3"
      />
      <p className="text-gray-800 font-medium text-sm sm:text-base">{props.name}</p>
      <div className="flex justify-center gap-4 mt-2 text-sm sm:text-base">
        <span className="font-semibold text-teal-500">${props.new_price}</span>
        <span className="line-through text-gray-400">${props.old_price}</span>
      </div>
    </div>
  );
};

export default Item;
