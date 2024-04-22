"use client";

import { useState, useEffect } from "react";
import AllSlidersForms from "./allCategory/index";
import NewSlider from "./newCategory/index";
import DetailsSliderForms from "./detailsCategory/index";

const CategoryForms = () => {
  const [bannerDetail, setBannerDetail] = useState("");
  const [randNumForBannerClick, setRandNumForBannerClick] = useState(1);
  const [allOrNew, setAllOrNew] = useState(
    <AllSlidersForms
      setBannerDetail={setBannerDetail}
      setRandNumForBannerClick={setRandNumForBannerClick}
    />
  );

  useEffect(() => {
    if (bannerDetail != "") {
      setAllOrNew(<DetailsSliderForms bannerId={bannerDetail} />);
    }
  }, [bannerDetail, randNumForBannerClick]);

  return (
    <div className="flex flex-col gap-8">
      <section className="flex justify-between items-center gap-2">
        <h1 className="text-blue-500 text-lg">دسته های محصولات</h1>
        <div className="flex justify-end items-center gap-2">
          <button
            onClick={() =>
              setAllOrNew(
                <AllSlidersForms
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
            onClick={() => setAllOrNew(<NewSlider />)}
            className="flex justify-center items-center w-32 h-10 px-3 py-1 bg-indigo-600 text-white transition-all duration-500 hover:bg-orange-500"
          >
            دسته جدید
          </button>
        </div>
      </section>
      <section>{allOrNew}</section>
    </div>
  );
};

export default CategoryForms;
