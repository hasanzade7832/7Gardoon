"use client";

import React, { useState } from "react";
import { FaStar } from "react-icons/fa"; // Importing star icons from react-icons
import SliderProductDetails from "../productSliderDetail";

const Home = () => {
  const [counter, setCounter] = useState(0);

  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex container mx-auto items-evenly justify-evenly md:flex-row bg-white shadow-lg rounded-lg">
        <div className="flex-shrink-0">
          <SliderProductDetails />
        </div>

        <div className="flex flex-col items-start justify-start pr-8 mt-5">
          <h1 className="text-3xl font-bold mb-4">پارچه پلی‌استر اصلی</h1>

          {/* Adding stars, a vertical line, and "hello" */}
          <div className="flex items-center mb-4">
            {/* 5 stars */}
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} color="gold" />
            ))}
            {/* Vertical line and the word "hello" */}
            <span className="mx-2 border-r-2 border-gray-500 h-5" />{" "}
            {/* Vertical line */}
            <span>اولین کسی باشید که این محصول را بررسی می‌کند</span>{" "}
            {/* The word "hello" */}
          </div>

          <ul className="text-lg text-gray-700 space-y-4 mt-10">
            <li>ترکیب: 100% پلی‌استر</li>
            <li>تولیدکننده: ایتالیا</li>
            <li>ارتفاع: 300 سانتی‌متر</li>
            <li>حداقل سفارش: 20 متر</li>
          </ul>

          <div className="flex gap-2 mt-8">
            <button
              className="px-4 py-2 bg-red-500 text-white rounded-l"
              onClick={decrement}
            >
              -
            </button>
            <span className="px-4 py-2 bg-gray-300">{counter}</span>
            <button
              className="px-4 py-2 bg-green-500 text-white rounded-r"
              onClick={increment}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
