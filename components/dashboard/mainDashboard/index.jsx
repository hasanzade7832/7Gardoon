"use client"
import { useState, useEffect } from "react";

import DashboardCtrl from "../dashbordCtrl/index";
import BannerForms from "../forms/bannersForms";
import SlidersForms from "../forms/sliderForms";


const MainDashboard = () => {
    const [contentChanger, setContentChanger] = useState("banners");
    const [details, setDetails] = useState(<BannerForms />);

    useEffect(() => {
        if (contentChanger == "banners") {
            setDetails(<BannerForms />)

        } else if (contentChanger == "sliders") {
            setDetails(<SlidersForms />)
        }

    }, [contentChanger])

    return (
        <div className="flex justify-between items-start gap-4 container mx-auto mt-20">
            <DashboardCtrl setContentChanger={setContentChanger} />
            <div className="w-full">{details}</div>
        </div>
    )
};

export default MainDashboard