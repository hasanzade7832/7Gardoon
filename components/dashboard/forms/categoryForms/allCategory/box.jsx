"use client";

import Image from "next/image";

const Box = ({ data, setBannerDetail, setRandNumForBannerClick }) => {
  console.log("data.typeOfProduct", data);
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
        width={100}
        height={100}
      />
      {/* </div> */}
      <div className="flex flex-col gap-4 px-8 h-20">
        <div>{data.title}</div>
        <div className="text-xs absolute bottom-3 left-3 flex justify-end items-center gap-2">
        <div className="bg-blue-600 text-white px-3 py-1 rounded">{data.typeOfProduct}</div>
          <div>
          {data.situation == true ? (
            <div className="bg-green-600 px-3 py-1 rounded text-white">
              منتشر شده
            </div>
          ) : (
            <div className="bg-orange-500">
              پیش نویس
            </div>
          )}
          </div>
         <div>
         
         </div>
        </div>
      </div>
    </div>
  );
};

export default Box;
