"use client"

import { useState ,useEffect } from "react";
import AllBannerForms from "./allBanner";
import NewBannerForms from "./newBanner";

const BannerForms = () => {

    const [allOrNew,setAllOrNew] =useState(<AllBannerForms/>);
    return(
        <div className="flex flex-col gap-8">
            <section  className="flex justify-between items-center gap-2">
                <h1 className="text-blue-500 text-lg">بنرهای تبلیغاتی</h1>
                <div className="flex justify-end items-center gap-2">
                    <button onClick={()=>setAllOrNew(<AllBannerForms/>)} className="px-3 py-1 bg-indigo-600 text-white transition-all duration-500 hover:bg-orange-500">همه</button>
                    <button onClick={()=>setAllOrNew(<NewBannerForms/>)} className="px-3 py-1 bg-indigo-600 text-white transition-all duration-500 hover:bg-orange-500">بنر جدید</button>
                </div>
            </section>
            <section>
                {allOrNew}
            </section>
        </div>
    )
};

export default BannerForms;