import React from "react";

const NewsLetter = () => {
  return (
    <section className="w-full flex justify-center my-12 px-4">
      <div className="w-full max-w-4xl rounded-2xl bg-gradient-to-br from-teal-200 via-teal-300 to-teal-400 p-8 text-center space-y-6 shadow-md">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800">
          Get Exclusive Offers On Your Email
        </h1>
        <p className="text-gray-700 text-sm sm:text-base">
          Subscribe to our newsletter and stay updated
        </p>
        <form className="flex flex-col sm:flex-row justify-center gap-4">
          <input
            type="email"
            placeholder="Your email"
            className="w-full sm:w-2/3 rounded-full px-4 py-3 text-sm outline-none border border-gray-300 focus:ring-2 focus:ring-teal-400"
          />
          <button
            type="submit"
            className="rounded-full px-6 py-3 bg-black text-white text-sm hover:bg-gray-900 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsLetter;
