"use client";

import Box from "./box";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const AllProductsForms = ({ setBannerDetail, setRandNumForBannerClick }) => {
  console.log("setBannerDetail", setBannerDetail);
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
  const [allPostsProducts, setAllPostsProducts] = useState(0);

  const [filterBtns, setFilterBtns] = useState([-1]);

  const [categoryUrl, setCategoryUrl] = useState("products");

  const paginate = 1;

  useEffect(() => {
    axios
      .get(
        `https://7gardoon-servers.liara.run/api/${categoryUrl}?pn=${pageNumber}&&pgn=${paginate}`
      )
      .then((res) => {
        console.log("res", res.data);
        setPosts(res.data.products);
        setNumberOfPage(
          Array.from(
            Array(Math.ceil(res.data.allPostsProducts / paginate)).keys()
          )
        );
        setAllPostsProducts(res.data.allPostsProducts);
      })
      .catch((err) => {
        toast.error("خطا در لود اطلاعات", {
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  }, [pageNumber, categoryUrl]);

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
      <div className="flex justify-end gap-2">
        <div className="text-xs text-black flex justify-end items-center gap-4">
          <button
            onClick={() => {
              categoryUrl == "products" ? console.log("") : setPosts([-1]);
              setCategoryUrl("products");
              setPageNumber(1);
            }}
            className={
              categoryUrl == "products"
                ? "bg-orange-500 p-2 rounded border-2 border-black"
                : "bg-yellow-400 p-2 rounded border-2 border-black"
            }
          >
            همه دسته بندی ها
          </button>
          <button
            onClick={() => {
              categoryUrl == "getProductOfType/book"
                ? console.log("")
                : setPosts([-1]);
              setCategoryUrl("getProductOfType/book");
              setPageNumber(1);
            }}
            className={
              categoryUrl == "getProductOfType/book"
                ? "bg-orange-500 p-2 rounded border-2 border-black"
                : "bg-yellow-400 p-2 rounded border-2 border-black"
            }
          >
            کتاب ها
          </button>
          <button
            onClick={() => {
              categoryUrl == "getProductOfType/app"
                ? console.log("")
                : setPosts([-1]);
              setCategoryUrl("getProductOfType/app");
              setPageNumber(1);
            }}
            className={
              categoryUrl == "getProductOfType/app"
                ? "bg-orange-500 p-2 rounded border-2 border-black"
                : "bg-yellow-400 p-2 rounded border-2 border-black"
            }
          >
            اپلیکیشن ها
          </button>
          <button
            onClick={() => {
              categoryUrl == "getProductOfType/graphic"
                ? console.log("")
                : setPosts([-1]);
              setCategoryUrl("getProductOfType/graphic");
              setPageNumber(1);
            }}
            className={
              categoryUrl == "getProductOfType/graphic"
                ? "bg-orange-500 p-2 rounded border-2 border-black"
                : "bg-yellow-400 p-2 rounded border-2 border-black"
            }
          >
            فایل های گرافیکی
          </button>
        </div>
        <div className="w-32 h-10 rounded bg-indigo-500 flex justify-center items-center text-white">
          {allPostsProducts} محصول
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
              محصولی موجود نیست
            </div>
          </div>
        ) : (
          posts.map((da, i) => (
            <Box
              key={i}
              data={da}
              setBannerDetail={setBannerDetail}
              setRandNumForBannerClick={setRandNumForBannerClick}
            />
          ))
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
            className={
              data+1 == pageNumber ? "bg-orange-400 text-white w-8 h-8 flex justify-center items-center rounded transition-all duration-500 hover:bg-orange-500" :
              "bg-indigo-500 text-white w-8 h-8 flex justify-center items-center rounded transition-all duration-500 hover:bg-orange-500"
            }
              onClick={() => {
                data+1==pageNumber?console.log(""):setPosts([-1]);
                setPageNumber(data + 1);
                goTopCtrl();
              }}
              key={i}
            >
              {data + 1}
            </button>
          ))
        )}
      </div>
      <ToastContainer
        bodyClassName={() => "font-[IranSans] text-sm flex items-center"}
        position="top-right"
        autoClose={3000}
        theme="colored"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default AllProductsForms;
