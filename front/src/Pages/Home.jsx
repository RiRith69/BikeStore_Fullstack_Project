import React from "react";
import HomeHero from "../Components/Home/Home.jsx";
import Popular from "../Components/Popular/Popular.jsx";
import Offers from "../Components/Offers/Offers.jsx";
import NewCollection from "../Components/NewCollection/NewCollection.jsx";
import NewsLetter from "../Components/NewsLetter/NewsLetter.jsx";

const Home = () => {
  return (
    <div>
      <HomeHero />
      <Popular />
      <Offers />
      <NewCollection />
      <NewsLetter />
    </div>
  );
};

export default Home;
