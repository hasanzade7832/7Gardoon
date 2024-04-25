"use client";
import { useState, useEffect } from "react";

import DashboardCtrl from "../dashbordCtrl/index";
import BannerForms from "../forms/bannersForms";
import SlidersForms from "../forms/sliderForms";
import PostForms from "../forms/postForms";
import CategoryForms from "../forms/categoryForms";

const MainDashboard = () => {
  const [contentChanger, setContentChanger] = useState("banners");
  const [details, setDetails] = useState(<BannerForms />);

  useEffect(() => {
    if (contentChanger == "banners") {
      setDetails(<BannerForms />);
    } else if (contentChanger == "sliders") {
      setDetails(<SlidersForms />);
    } else if (contentChanger == "posts") {
      setDetails(<PostForms />);
    } else if (contentChanger == "Categories") {
      setDetails(<CategoryForms />);
    }
  }, [contentChanger]);

  return (
    <div className="flex justify-between items-start gap-4 container mx-auto mt-20">
      <div className="sticky top-8 right-0 bottom-8">
        <DashboardCtrl setContentChanger={setContentChanger} />
      </div>
      <div className="w-full">{details}</div>
    </div>
  );
};

export default MainDashboard;
