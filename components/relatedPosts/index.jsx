"use client";

import BlogBox from "../blogs/blogBox";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import Image from "next/image";


const RelatedPosts = ({ title, relatedPostsData }) => {
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
  const sendingDataForRel = { goalIds: relatedPostsData }
  const [relPostsData, setRelPostsData] = useState([-1]);

  useEffect(() => {
    const url = "https://7gardoon-server.liara.run/api/relatedPosts";
    axios.post(url, sendingDataForRel)
      .then(d => {
        console.log("ddd", d.data)
        setRelPostsData(d.data)
      })
      .catch(e => console.log("eeeeee", e))
  }, [relatedPostsData])

  return (
    <div className="container mx-auto ">
      <div className="container mx-auto py-8">
        <div className="flex flex-col gap-4 px-2">
          <header className=" flex justify-between items-center">
            <h2 className=" text-2xl border-r-white-400 border-r-2 pr-1 text-black">
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
            </div>
          </header>
          <div
            ref={carouselRef}
            className="sliderContainer w-full max-w-7xl overflow-x-scroll px-5  "
          >
            <div className=" flex justify-start items-center gap-1 w-full">
              {
                relPostsData[0] == -1 ? <div>
                  <Image alt="loading" width={40} height={40} src={"/loading.svg"} />
                </div> : (relPostsData.posts.length < 1) ? <div className="justify-center flex items-center p-4"> مقاله مرتبطی موجود نیست</div> :

                  relPostsData.posts.map((po, i) => (

                    <BlogBox key={i} data={po} />
                  ))

              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedPosts;
