"use client";

import { useState, useEffect } from "react";
// import AllBannerForms from "./allBanner";
import AllPostForms from "../postForms/allPost/index";
import NewPostForms from "./newPost/index";
// import NewPostForms from "./newBanner";
import DetailsPostForms from "../postForms/detailsPosts/index";

const PostForms = () => {
  const [bannerDetail, setBannerDetail] = useState("");
  const [randNumForBannerClick, setRandNumForBannerClick] = useState(1);
  const [allOrNew, setAllOrNew] = useState(
    <AllPostForms
      setBannerDetail={setBannerDetail}
      setRandNumForBannerClick={setRandNumForBannerClick}
    />
  );

  useEffect(() => {
    if (bannerDetail != "") {
      setAllOrNew(<DetailsPostForms bannerId={bannerDetail} />);
    }
  }, [bannerDetail, randNumForBannerClick]);

  return (
    <div className="flex flex-col gap-8">
      <section className="flex justify-between items-center gap-2">
        <h1 className="text-blue-500 text-lg">پست ها</h1>
        <div className="flex justify-end items-center gap-2">
          <button
            onClick={() =>
              setAllOrNew(
                <AllPostForms
                  setBannerDetail={setBannerDetail}
                  setRandNumForBannerClick={setRandNumForBannerClick}
                />
              )
            }
            className="flex justify-center items-center w-32 h-10 px-3 py-1 bg-indigo-600 text-white transition-all duration-500 hover:bg-orange-500"
          >
            همه
          </button>
          <button
            onClick={() => setAllOrNew(<NewPostForms />)}
            className="flex justify-center items-center w-32 h-10 px-3 py-1 bg-indigo-600 text-white transition-all duration-500 hover:bg-orange-500"
          >
            پست جدید
          </button>
        </div>
      </section>
      <section>{allOrNew}</section>
    </div>
  );
};

export default PostForms;
