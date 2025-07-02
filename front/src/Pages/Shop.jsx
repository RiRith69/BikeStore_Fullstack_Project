import React from "react";
import Home from "../Components/Home/Home.jsx";
import Popular from "../Components/Popular/Popular.jsx";
import Offers from "../Components/Offers/Offers.jsx";
import NewCollection from "../Components/NewCollection/NewCollection.jsx";
import NewsLetter from "../Components/NewsLetter/NewsLetter.jsx";

const Shop = () => {
  return (
    <div>
      <Home />
      <Popular />
      <Offers />
      <NewCollection />
      <NewsLetter />
    </div>
  );
};

export default Shop;
