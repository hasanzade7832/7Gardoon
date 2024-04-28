"use client";

import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import SliderProductDetails from "../productSliderDetail";
import { Link, Element } from "react-scroll";

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
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="flex flex-grow items-center justify-center container mx-auto md:flex-row bg-white shadow-lg rounded-lg p-6">
        <div className="flex-shrink-0">
          <SliderProductDetails />
        </div>

        <div className="flex flex-col items-start justify-start pr-8 mt-5">
          <h1 className="text-3xl font-bold mb-4">پارچه پلی‌استر اصلی</h1>

          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} color="gold" />
            ))}
            <span className="mx-2 border-r-2 border-gray-500 h-5" />
            <span>اولین کسی باشید که این محصول را بررسی می‌کند</span>
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

      {/* منوی افقی چسبنده */}
     

      {/* بخش‌های محتوا */}
      <div className="container mx-auto flex flex-col px-6 py-4 bg-white mt-5">
      <div className="container mx-auto sticky top-0 z-10 w-full bg-white border-b border-gray-400 shadow-md mt-5">
        <div className="flex justify-around py-2">
          <Link
            to="sectionA"
            smooth={true}
            className="cursor-pointer text-lg border-gray-400 pb-1"
          >
            A
          </Link>
          <Link
            to="sectionB"
            smooth={true}
            className="cursor-pointer text-lg border-gray-400 pb-1"
          >
            B
          </Link>
          <Link
            to="sectionC"
            smooth={true}
            className="cursor-pointer text-lg border-gray-400 pb-1"
          >
            C
          </Link>
          <Link
            to="sectionD"
            smooth={true}
            className="cursor-pointer text-lg border-gray-400 pb-1"
          >
            D
          </Link>
        </div>
      </div>
        <Element name="sectionA" className="mt-5">
          <h2 className="text-2xl">بخش A</h2>
          <p>این بخش مربوط به قسمت A است.</p>
          <p>این بخش مربوط به قسمت A است.</p>
          <p>این بخش مربوط به قسمت A است.</p>
          <p>این بخش مربوط به قسمت A است.</p>
          <p>این بخش مربوط به قسمت A است.</p>
          <p>این بخش مربوط به قسمت A است.</p>
          <p>این بخش مربوط به قسمت A است.</p>
          <p>این بخش مربوط به قسمت A است.</p>
          <p>این بخش مربوط به قسمت A است.</p>
          <p>این بخش مربوط به قسمت A است.</p>
          <p>این بخش مربوط به قسمت A است.</p>
          <p>این بخش مربوط به قسمت A است.</p>
          <p>این بخش مربوط به قسمت A است.</p>
          <p>این بخش مربوط به قسمت A است.</p>
          <p>این بخش مربوط به قسمت A است.</p>
          <p>این بخش مربوط به قسمت A است.</p>
          <p>این بخش مربوط به قسمت A است.</p>
          <p>این بخش مربوط به قسمت A است.</p>
          <p>این بخش مربوط به قسمت A است.</p>
          <p>این بخش مربوط به قسمت A است.</p>
          <p>این بخش مربوط به قسمت A است.</p>
          <p>این بخش مربوط به قسمت A است.</p>
        </Element>
        <hr className="my-4" />
        <Element name="sectionB">
          <h2 className="text-2xl">بخش B</h2>
          <p>این بخش مربوط به قسمت A است.</p>
          <p>این بخش مربوط به قسمت A است.</p>
          <p>این بخش مربوط به قسمت A است.</p>
          <p>این بخش مربوط به قسمت A است.</p>
          <p>این بخش مربوط به قسمت A است.</p>
          <p>این بخش مربوط به قسمت A است.</p>
          <p>این بخش مربوط به قسمت A است.</p>
          <p>این بخش مربوط به قسمت A است.</p>
          <p>این بخش مربوط به قسمت A است.</p>
          <p>این بخش مربوط به قسمت A است.</p>
          <p>این بخش مربوط به قسمت A است.</p>
          <p>این بخش مربوط به قسمت A است.</p>
          <p>این بخش مربوط به قسمت A است.</p>
          <p>این بخش مربوط به قسمت A است.</p>
          <p>این بخش مربوط به قسمت A است.</p>
          <p>این بخش مربوط به قسمت A است.</p>
          <p>این بخش مربوط به قسمت A است.</p>
          <p>این بخش مربوط به قسمت A است.</p>
          <p>این بخش مربوط به قسمت A است.</p>
          <p>این بخش مربوط به قسمت A است.</p>
          <p>این بخش مربوط به قسمت A است.</p>
        </Element>
        <hr className="my-4" />
        <Element name="sectionC">
          <h2 className="text-2xl">بخش C</h2>
          <p>این بخش مربوط به قسمت C است.</p>
          <p>این بخش مربوط به قسمت C است.</p>
          <p>این بخش مربوط به قسمت C است.</p>
          <p>این بخش مربوط به قسمت C است.</p>
          <p>این بخش مربوط به قسمت C است.</p>
          <p>این بخش مربوط به قسمت C است.</p>
          <p>این بخش مربوط به قسمت C است.</p>
          <p>این بخش مربوط به قسمت C است.</p>
          <p>این بخش مربوط به قسمت C است.</p>
          <p>این بخش مربوط به قسمت C است.</p>
          <p>این بخش مربوط به قسمت C است.</p>
          <p>این بخش مربوط به قسمت C است.</p>
          <p>این بخش مربوط به قسمت C است.</p>
          <p>این بخش مربوط به قسمت C است.</p>
          <p>این بخش مربوط به قسمت C است.</p>
          <p>این بخش مربوط به قسمت C است.</p>
          <p>این بخش مربوط به قسمت C است.</p>
        </Element>
        <hr className="my-4" />
        <Element name="sectionD">
          <h2 className="text-2xl">بخش D</h2>
          <p>این بخش مربوط به قسمت D است.</p>
          <p>این بخش مربوط به قسمت D است.</p>
          <p>این بخش مربوط به قسمت D است.</p>
          <p>این بخش مربوط به قسمت D است.</p>
          <p>این بخش مربوط به قسمت D است.</p>
          <p>این بخش مربوط به قسمت D است.</p>
          <p>این بخش مربوط به قسمت D است.</p>
          <p>این بخش مربوط به قسمت D است.</p>
          <p>این بخش مربوط به قسمت D است.</p>
          <p>این بخش مربوط به قسمت D است.</p>
          <p>این بخش مربوط به قسمت D است.</p>
          <p>این بخش مربوط به قسمت D است.</p>
          <p>این بخش مربوط به قسمت D است.</p>
          <p>این بخش مربوط به قسمت D است.</p>
          <p>این بخش مربوط به قسمت D است.</p>
          <p>این بخش مربوط به قسمت D است.</p>
          <p>این بخش مربوط به قسمت D است.</p>
        </Element>
      </div>
    </div>
  );
};

export default Home;
