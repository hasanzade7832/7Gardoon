import DCBtn from "../btn";

const DashboardCtrl = ({setContentChanger}) => {
    return(
        <div className="rounded-lg w-60 bg-zinc-200 p-4 flex justify-center items-center">
            <div className="flex flex-col gap-6">
            <DCBtn title={"بنرهای تبلیغاتی"} content={"banners"} setContentChanger={setContentChanger}/>
            <DCBtn title={"اسلایدرها"} content={"sliders"} setContentChanger={setContentChanger}/>
            </div>
        </div>
    )
};

export default DashboardCtrl;