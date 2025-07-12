import React from "react";
import data_product from "./../Assets/data.js";
import Item from "../Item/Item";
import { useNavigate } from "react-router-dom";


const Popular = () => {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/product/${id}`);
  }
  return (
    <section className="w-full flex flex-col items-center gap-4 my-12 px-4">
      <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 text-center">POPULAR</h1>
      <hr className="w-48 h-1 rounded-full bg-teal-400 mx-auto" />
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 w-full max-w-7xl cursor-pointer">
        {data_product.map((item, i) => (
          <div key={i} onClick= {() => handleClick(item.id)}>
             <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Popular;
