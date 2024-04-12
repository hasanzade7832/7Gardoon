"use client";

import Box from "../blogs/blogBox";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

const BlogPageComponent = () => {
  const goTopCtrl = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  //اطلاعات کلی بنرها
  const [posts, setPosts] = useState([-1]);

  //صفحه چندمیم
  const [pageNumber, setPageNumber] = useState(1);

  //تعداد صفحات
  const [numberOfPage, setNumberOfPage] = useState([-1]);

  //تعداد کل بنرها
  const [allPostsNum, setAllBannersNum] = useState(0);

  const [filterBtns, setFilterBtns] = useState([-1]);

  const paginate = 2;

  useEffect(() => {
    axios
      .get(
        `https://7gardoon-server.liara.run/api/postPage?pn=${pageNumber}&pgn=${paginate}`
      )
      .then((res) => {
        console.log("res", res.data);
        setPosts(res.data.posts);
        setNumberOfPage(
          Array.from(Array(Math.ceil(res.data.allPostsNum / paginate)).keys())
        );
        setAllBannersNum(res.data.allPostsNum);
      })
      .catch((err) => console.log(err));
  }, [pageNumber]);

  useEffect(() => {
    if (numberOfPage[0] !== -1 && numberOfPage.length > 0) {
      const arr = [];
      numberOfPage.map((n) => {
        if (
          n == 0 ||
          (n < pageNumber + 1 && n > pageNumber - 3) ||
          n == numberOfPage.length - 1
        ) {
          arr.push(n);
        }
      });
      setFilterBtns(arr);
    } else if (numberOfPage.length == 0) {
      setFilterBtns([]);
    }
  }, [numberOfPage]);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-end">
        <div className="w-32 h-10 rounded bg-indigo-500 flex justify-center items-center text-white">
          {allPostsNum} پست
        </div>
      </div>
      <div className="flex flex-col gap-6 ">
        {/* //در اینجا baanners.length بود */}
        {posts[0] == -1 ? (
          <div className="flex justify-center items-center p-12">
            <Image
              alt="loading"
              width={120}
              height={120}
              src={"/loading.svg"}
            />
          </div>
        ) : posts.length < 1 ? (
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center w-[32rem] p-8 bg-rose-600 text-white">
              پستی موجود نیست
            </div>
          </div>
        ) : (
          <div className="flex flex-wrap justify-start items-center gap-1">
            {posts.map((da, i) => (
              <Box key={i} data={da} />
            ))}
          </div>
        )}
      </div>
      <div className="flex justify-center items-center gap-4">
        {filterBtns[0] == -1 ? (
          <div className="flex justify-center items-center p-12">
            <Image alt="loading" width={40} height={40} src={"/loading.svg"} />
          </div>
        ) : (
          filterBtns.map((data, i) => (
            <button
              className="bg-indigo-500 text-white w-8 h-8 flex justify-center items-center rounded transition-all duration-500 hover:bg-orange-500"
              onClick={() => {
                setPageNumber(data + 1);
                setPosts([-1]);
                goTopCtrl();
              }}
              key={i}
            >
              {data + 1}
            </button>
          ))
        )}
      </div>
    </div>
  );
};

export default BlogPageComponent;
