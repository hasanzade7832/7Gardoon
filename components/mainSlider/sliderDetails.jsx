"use client";

import Image from "next/image";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

import { useState } from "react";
import "animate.css";

const SliderDetails = ({ data }) => {


    const [nowSlide, setnowSlide] = useState(0);
    const sliderChangingHandler = (inp) => {
        let newNumber = nowSlide + inp;
        if (newNumber > data.length - 1) {
            newNumber = 0;
        }
        if (newNumber < 0) {
            newNumber = data.length - 1;
        }
        setnowSlide(newNumber);
    };
    const [slideHandler, setslideHandler] = useState(1);

    return (

        <>
        {data.length < 1 ? (
          <div></div>
        ) : (
          <section className="container mx-auto flex flex-col gap-40 relative p-2 mt-10">
            <div className="z-30 btns absolute left-4 top-4 flex gap-1">
              <FaChevronRight
                onClick={() => {
                  setslideHandler(0);
                  setTimeout(() => {
                    sliderChangingHandler(-1);
                    setslideHandler(1);
                  }, 1000);
                }}
                className="bg-white w-10 h-10 p-2 rounded border-zinc-800 border-[.2rem] cursor-pointer hover:border-zinc-500 transition-all duration-500"
              />
  
              <FaChevronLeft
                onClick={() => {
                  setslideHandler(0);
                  setTimeout(() => {
                    sliderChangingHandler(1);
                    setslideHandler(1);
                  }, 1000);
                }}
                className="bg-white w-10 h-10 p-2 rounded border-zinc-800 border-[.2rem] cursor-pointer hover:border-zinc-500 transition-all duration-500"
              />
            </div>
            <Link href={data[nowSlide].link} className="z-20 flex justify-center items-center gap-6">
              <Image
                width={1280}
                height={300}
                className={
                  slideHandler === 1
                    ? 'rounded-xl animate__animated animate__bounceIn animate__slow'
                    : 'rounded-xl animate__animated animate__bounceOut animate__slow'
                }
                alt={data[nowSlide].imageAlt}
                src={data[nowSlide].image}
              />
            </Link>
          </section>
        )}
      </>
  
    );
};

export default SliderDetails;
