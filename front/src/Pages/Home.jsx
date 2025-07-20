import React, {useRef} from "react";
import HomeHero from "../Components/Home/Home.jsx";
import Popular from "../Components/Popular/Popular.jsx";
import Offers from "../Components/Offers/Offers.jsx";
import NewCollection from "../Components/NewCollection/NewCollection.jsx";
import NewsLetter from "../Components/NewsLetter/NewsLetter.jsx";

const Home = () => {
  const newCollectionRef = useRef(null);
  const scrollToCollection = () => {
    newCollectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <HomeHero onScrollToCollection ={scrollToCollection}/>
      <Popular />
      <Offers />
      <NewCollection ref={newCollectionRef}/>
      <NewsLetter />
    </div>
  );
};

export default Home;
