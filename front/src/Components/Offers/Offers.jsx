import React from "react";
import exclusive_image from "./../Assets/exclusive_image.png";

const Offers = () => {
  return (
    <section className="w-full flex justify-center my-12 px-4">
      <div className="w-full max-w-7xl bg-gradient-to-br from-teal-200 via-teal-300 to-teal-400 rounded-2xl flex flex-col md:flex-row items-center justify-between p-8 md:p-16 shadow-lg">
        {/* Left side */}
        <div className="flex flex-col gap-4 md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800">Exclusive</h1>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800">Offers for you</h1>
          <p className="text-gray-700 text-sm sm:text-base font-medium">
            ONLY THE BEST SELLERS PRODUCTS
          </p>
          <button className="mt-4 px-8 py-3 rounded-full bg-black text-white text-base font-medium hover:bg-gray-900 transition w-fit self-center md:self-start">
            Check Now
          </button>
        </div>
        {/* Right side */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img
            src={exclusive_image}
            alt="Exclusive"
            className="w-full max-w-xs md:max-w-sm rounded-xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Offers;
