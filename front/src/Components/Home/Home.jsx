import React from "react";
import arrow_image from "../Assets/arrow-image.png";
import bike_hero from "../Assets/hero.jpg";

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative w-full">
        {/* Mobile image */}
        <div className="block md:hidden">
          <img
            src={bike_hero}
            alt="Hero"
            className="w-full h-auto"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center px-4 py-8">
            <div className="max-w-xl text-center text-white space-y-4">
              <h1 className="text-2xl font-bold">
                <span className="text-teal-300">Premium Bikes</span><br />
                For Every Adventure
              </h1>
              <p className="text-sm text-white/90">
                Experience unmatched performance with our handcrafted bicycles.
              </p>
              <div className="flex flex-row gap-2 mt-4 flex-wrap justify-center">
                <button className="flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md font-semibold shadow transition">
                  Shop Now
                </button>
                <button className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-md backdrop-blur transition">
                  View Collections
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop background image */}
        <div
          className="hidden md:block relative min-h-[80vh] overflow-hidden"
          style={{
            backgroundImage: `url(${bike_hero})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center h-full py-16 sm:py-24">
            <div className="max-w-xl text-left text-white space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                <span className="text-teal-300">Premium Bikes</span>
                <br />
                For Every Adventure
              </h1>
              <p className="text-lg text-white/90">
                Experience unmatched performance with our handcrafted bicycles.
              </p>
              <div className="flex gap-4 mt-4">
                <button className="flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-5 py-3 rounded-md font-semibold shadow transition">
                  Shop Now
                  <img src={arrow_image} alt="Arrow" className="w-4 h-4 invert" />
                </button>
                <button className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white px-5 py-3 rounded-md backdrop-blur transition">
                  View Collections
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
