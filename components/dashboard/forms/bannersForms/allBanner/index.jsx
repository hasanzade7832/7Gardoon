"use client";

import Box from "./box";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

const AllBannerForms = ({ setBannerDetail, setRandNumForBannerClick }) => {
  console.log("setBannerDetail", setBannerDetail);
  const goTopCtrl = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  //اطلاعات کلی بنرها
  const [banners, setBanners] = useState([-1]);

  //صفحه چندمیم
  const [pageNumber, setPageNumber] = useState(1);

  //تعداد صفحات
  const [numberOfPage, setNumberOfPage] = useState([-1]);
  console.log("numberOfPage", numberOfPage);

  useEffect(() => {
    axios
      .get(`https://7gardoon-server.liara.run/api/banners?pn=${pageNumber}`)
      .then((res) => {
        setBanners(res.data.banners);
        setNumberOfPage(
          Array.from(Array(Math.ceil(res.data.allBannersNum / 2)).keys())
        );
      })
      .catch((err) => console.log(err));
  }, [pageNumber]);

  return (
    <div className="p-4 flex flex-col gap-8">
      <div className="flex flex-col gap-6 ">
        {/* //در اینجا baanners.length بود */}
        {numberOfPage[0] == -1 ? (
          <div className="flex justify-center items-center p-12">
            <Image
              alt="loading"
              width={120}
              height={120}
              src={"/loading.svg"}
            />
          </div>
        ) : (
          banners.map((ba, i) => (
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
        {numberOfPage[0] == -1 ? (
          <div className="flex justify-center items-center p-12">
            <Image alt="loading" width={40} height={40} src={"/loading.svg"} />
          </div>
        ) : (
          numberOfPage.map((data, i) => (
            <button
              className="bg-indigo-500 text-white w-8 h-8 flex justify-center items-center rounded"
              onClick={() => {
                setPageNumber(data + 1);
                setBanners([]);
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

export default AllBannerForms;
