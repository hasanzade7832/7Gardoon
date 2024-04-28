"use client";

import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import SliderProductDetails from "../productSliderDetail";
import { Link, Element } from "react-scroll";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

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
      <div className="container mx-auto flex flex-grow items-evenly justify-evenly md:flex-row bg-white shadow-lg rounded-lg p-6 mt-10">
        <div className="flex-shrink-0">
          <SliderProductDetails />
        </div>

        <div className="flex flex-col items-start justify-start pr-8 mt-20">
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

      {/* منوی افقی چسبان */}
      <div className="container mx-auto sticky" style={{ top: 168 }}>
        <div className="flex justify-start px-4 py-2 bg-stone-100 border-b border-gray-600 shadow-md">
          <Link
            to="sectionA"
            smooth={true}
            className="cursor-pointer text-lg px-10"
          >
            جزئیات
          </Link>
          <Link
            to="sectionB"
            smooth={true}
            className="cursor-pointer text-lg px-10"
          >
            اطلاعات بیشتر
          </Link>
          <Link
            to="sectionC"
            smooth={true}
            className="cursor-pointer text-lg px-10"
          >
            مرور
          </Link>
          <Link
            to="sectionD"
            smooth={true}
            className="cursor-pointer text-lg px-10"
          >
            ترکیبات
          </Link>
        </div>
      </div>

      <div className="container mx-auto flex flex-col px-6 py-4 bg-white mb-5">
        <Element name="sectionA">
          <hr className="my-4" />
          <p className="my-6">پارچه پلی‌استر اصلی</p>
          <p className="my-6">ترکیب: 100٪ پلی‌استر</p>
          <p className="my-6">ترکیب: 100٪ پلی‌استر</p>
          <p className="my-6">ترکیب: 100٪ پلی‌استر</p>
          <p className="my-6">ترکیب: 100٪ پلی‌استر</p>
          <p className="my-6">ترکیب: 100٪ پلی‌استر</p>
          <p className="my-6">ترکیب: 100٪ پلی‌استر</p>
          <p className="my-6">ترکیب: 100٪ پلی‌استر</p>
        </Element>
        <Element name="sectionB">
          <div style={{ height: "50px" }}></div> {/* فضای اضافی */}
          <hr className="my-4" />
          <p className>پارچه پلی‌استر اصلی</p>
          <p className="my-6">ترکیب: 100٪ پلی‌استر</p>
          <p className="my-6">ترکیب: 100٪ پلی‌استر</p>
          <p className="my-6">ترکیب: 100٪ پلی‌استر</p>
          <p className="my-6">ترکیب: 100٪ پلی‌استر</p>
          <p className="my-6">ترکیب: 100٪ پلی‌استر</p>
          <p className="my-6">ترکیب: 100٪ پلی‌استر</p>
        </Element>
        <Element name="sectionC">
          <div style={{ height: "50px" }}></div> {/* فضای اضافی */}
          <hr className="my-4" />
          <p class="my-6">پارچه پلی‌استر اصلی</p>
          <p className="my-6">ترکیب: 100٪ پلی‌استر</p>
          <p className="my-6">ترکیب: 100٪ پلی‌استر</p>
          <p className="my-6">ترکیب: 100٪ پلی‌استر</p>
          <p className="my-6">ترکیب: 100٪ پلی‌استر</p>
          <p className="my-6">ترکیب: 100٪ پلی‌استر</p>
          <p className="my-6">ترکیب: 100٪ پلی‌استر</p>
          <p className="my-6">ترکیب: 100٪ پلی‌استر</p>
          <p className="my-6">ترکیب: 100٪ پلی‌استر</p>
          <p className="my-6">ترکیب: 100٪ پلی‌استر</p>
          <p className="my-6">ترکیب: 100٪ پلی‌استر</p>
        </Element>
        <Element name="sectionD">
          <div style={{ height: "50px" }}></div> {/* فضای اضافی */}
          <hr className="my-4" />
          <p class="my-6">پارچه پلی‌استر اصلی</p>
          <p className="my-6">ترکیب: 100٪ پلی‌استر</p>
          <p className="my-6">ترکیب: 100٪ پلی‌استر</p>
          <p className="my-6">ترکیب: 100٪ پلی‌استر</p>
          <p className="my-6">ترکیب: 100٪ پلی‌استر</p>
        </Element>
      </div>
    </div>
  );
};

export default Home;
