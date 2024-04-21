"use client";

import SlideBox from "../../components/product-slider-box/index";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { useRef } from "react";
import Link from "next/link";

const ProductsSlider = ({ title, linkComp }) => {
  const carouselRef = useRef();
  const carouselSwitcher = (data) => {
    if (carouselRef.current) {
      const width = carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo(
        carouselRef.current.scrollLeft + width * data,
        0
      );
    }
  };

  return (
    <div className="bg-indigo-500 container mx-auto mt-20">
      <div className="container mx-auto py-8">
        <section className="flex flex-col gap-4 px-2">
          <header className=" flex justify-between items-center">
            <h2 className=" text-2xl border-r-white-400 border-r-2 pr-1 text-white">
              {title}
            </h2>
            <div className="flex gap-1 items-center">
              <div className=" flex items-center gap-1 ">
                <FaChevronRight
                  onClick={() => {
                    carouselSwitcher(1);
                  }}
                  className="hover:text-white cursor-pointer bg-zinc-200 transition-all duration-300 hover:bg-orange-400 w-10 h-10 p-2 rounded"
                />
                <FaChevronLeft
                  onClick={() => {
                    carouselSwitcher(-1);
                  }}
                  className="hover:text-white cursor-pointer bg-zinc-200 transition-all duration-300 hover:bg-orange-400 w-10 h-10 p-2 rounded"
                />
              </div>
              <Link href={`/${linkComp}`}>
                <span className="text-white border-white border-2 bg-orange-500 px-4 py-2 rounded-md transition-all duration-500 hover:bg-orange-600">
                  مشاهده همه
                </span>{" "}
              </Link>
            </div>
          </header>
          <div
            ref={carouselRef}
            className="sliderContainer w-full max-w-10xl overflow-x-scroll px-4  "
          >
            <div className=" flex justify-between items-center gap-4 ">
              <SlideBox />
              <SlideBox />
              <SlideBox />
              <SlideBox />
              <SlideBox />
              <SlideBox />
              <SlideBox />
              <SlideBox />
              <SlideBox />
              <SlideBox />
              <SlideBox />
              <SlideBox />
              <SlideBox />
              <SlideBox />
              <SlideBox />
              <SlideBox />
              <SlideBox />
              <SlideBox />
              <SlideBox />
              <SlideBox />
              <SlideBox />
              <SlideBox />
              <SlideBox />
              <SlideBox />
              <SlideBox />
              <SlideBox />
              <SlideBox />
              <SlideBox />
              <SlideBox />
              <SlideBox />
              <SlideBox />
              <SlideBox />
              <SlideBox />
              <SlideBox />
              <SlideBox />
              <SlideBox />
              <SlideBox />
              <SlideBox />
              <SlideBox />
              <SlideBox />
              <SlideBox />
              <SlideBox />
              <SlideBox />
              <SlideBox />
              <SlideBox />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductsSlider;
