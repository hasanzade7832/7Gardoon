"use client";

import { useState, useEffect } from "react";
import AllProductForms from "../productForms/allProducts";
import NewProductForms from "../productForms/newProduct";
import DetailsProductForms from "../productForms/detailsProduct";

const ProductForms = () => {
  const [bannerDetail, setBannerDetail] = useState("");
  const [randNumForBannerClick, setRandNumForBannerClick] = useState(1);
  const [allOrNew, setAllOrNew] = useState(
    <AllProductForms
      setBannerDetail={setBannerDetail}
      setRandNumForBannerClick={setRandNumForBannerClick}
    />
  );

  useEffect(() => {
    if (bannerDetail != "") {
      setAllOrNew(<DetailsProductForms bannerId={bannerDetail} />);
    }
  }, [bannerDetail, randNumForBannerClick]);

  return (
    <div className="flex flex-col gap-8">
      <section className="flex justify-between items-center gap-2">
        <h1 className="text-blue-500 text-lg">محصولات</h1>
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
            onClick={() => setAllOrNew(<NewProductForms />)}
            className="flex justify-center items-center w-32 h-10 px-3 py-1 bg-indigo-600 text-white transition-all duration-500 hover:bg-orange-500"
          >
            محصول جدید
          </button>
        </div>
      </section>
      <section>{allOrNew}</section>
    </div>
  );
};

export default ProductForms;
