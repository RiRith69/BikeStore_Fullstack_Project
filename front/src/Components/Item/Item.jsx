import React from "react";
import "./Item.css";
const Item = (props) => {
  return (
    <div className="item">
      <img className="item_image" src={props.image} alt="" />
      <p>{props.name}</p>
      <div className="item_price">
        <div className="item_price_new">${props.new_price}</div>
        <div className="item_price_old">${props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
