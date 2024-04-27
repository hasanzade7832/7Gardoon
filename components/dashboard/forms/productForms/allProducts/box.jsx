"use client";

import Image from "next/image";

const Box = ({ data, setBannerDetail, setRandNumForBannerClick }) => {
  console.log("setBannerDetail", setBannerDetail);
  return (
    <div
      onClick={() => {
        setBannerDetail(data._id);
        setRandNumForBannerClick(Math.random());
      }}
      className="relative flex justify-start px-4 items-center cursor-pointer p-6 w-full rounded-lg bg-zinc-100 border-2 border-zinc-200 transition-all duration-500 hover:border-orange-400"
    >
      {/* <div className="flex justify-start items-center"> */}
      <Image
        className="rounded-lg"
        src={data.image}
        alt={data.imageAlt}
        title={data.imageAlt}
        width={400}
        height={200}
      />
      {/* </div> */}
      <div className="flex flex-col gap-4 px-8 h-40">
        <div>{data.title}</div>
        <div className="absolute top-3 left-3 text-xs bg-blue-500 text-white px-3 py-1 rounded">
          {data.updatedAT}
        </div>
        <div className="absolute bottom-3 left-3 flex justify-end items-center gap-2">
          <div className="text-xs bg-orange-600 text-white px-6 py-1 rounded">
            بازدید {data.pageView}
          </div>
          {data.published == true ? (
            <div className="text-xs bg-green-600 text-white px-3 py-1 rounded">
              منتشر شده
            </div>
          ) : (
            <div className="text-xs bg-orange-500 text-white px-3 py-1 rounded">
              پیش نویس
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Box;
