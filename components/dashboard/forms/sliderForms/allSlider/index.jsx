"use client";

import Box from "./box";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const AllSlidersForms = ({ setBannerDetail, setRandNumForBannerClick }) => {
  console.log("setBannerDetail", setBannerDetail);
  const goTopCtrl = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  //اطلاعات کلی بنرها
  const [sliders, setSliders] = useState([-1]);

  //صفحه چندمیم
  const [pageNumber, setPageNumber] = useState(1);

  //تعداد صفحات
  const [numberOfPage, setNumberOfPage] = useState([-1]);

  //تعداد کل بنرها
  const [allSlidersNum, setAllBannersNum] = useState(0);

  const [filterBtns, setFilterBtns] = useState([-1]);

  const paginate =10;

  useEffect(() => {
    axios
      .get(
        `https://7gardoon-server3.liara.run/api/sliders?pn=${pageNumber}&&pgn=${paginate}`
      )
      .then((res) => {
        setSliders(res.data.sliders);
        setNumberOfPage(
          Array.from(Array(Math.ceil(res.data.allSliderNum / paginate)).keys())
        );
        setAllBannersNum(res.data.allSliderNum);
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
          {allSlidersNum} اسلایدر
        </div>
      </div>
      <div className="flex flex-col gap-6 ">
        {/* //در اینجا baanners.length بود */}
        {sliders[0] == -1 ? (
          <div className="flex justify-center items-center p-12">
            <Image
              alt="loading"
              width={120}
              height={120}
              src={"/loading.svg"}
            />
          </div>
        ) : sliders.length < 1 ? (
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center w-[32rem] p-8 bg-rose-600 text-white">
              اسلایدری موجود نیست
            </div>
          </div>
        ) : (
          sliders.map((ba, i) => (
            <Box
              key={i}
              data={ba}
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
              className="bg-indigo-500 text-white w-8 h-8 flex justify-center items-center rounded transition-all duration-500 hover:bg-orange-500"
              onClick={() => {
                setPageNumber(data + 1);
                setSliders([-1]);
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

export default AllSlidersForms;
