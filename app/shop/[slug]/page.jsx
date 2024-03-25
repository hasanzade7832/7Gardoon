import BreadCrumbs from "@/components/breadCrumbs";
import RelatedPosts from "@/components/relatedPosts";
import Image from "next/image";
import { HiOutlineEye } from "react-icons/hi";
import { FaRegComment } from "react-icons/fa";
import { BsCalendar2Week } from "react-icons/bs";
import {TiTickOutline} from "react-icons/ti"

const SingleBlug = () => {
  return (
    <div className="flex flex-col gap-12">
      <BreadCrumbs
        secondTitle={"فروشگاه"}
        secondLink={"/shop"}
        titleBlog={"فروشگاه هفت گردون"}
      />
      <section className="flex justify-center items-center rounded-xl p-4 shadow-[0px_0px_8px_rgba(0,0,0,0.25)]">
        <div className="flex justify-start items-center w-full gap-4">
          <div>
          <Image
          className="rounded-xl"
          width={400}
          height={200}
          alt={"this is blog picture"}
          src={"/images/products/book1.png"}
          priority={true}
        />
          </div>
          <div className="flex flex-col gap-8">
            <h1>دوره جاوا اسکریپت</h1>
            <ul className="flex flex-col gap-3">
              <li className="flex justify-between items-center gap-2 w-48">
              <div className="flex justify-start items-center gap-1"><TiTickOutline className="text-black"/><span>فرمت</span></div>
              <div className="text-black">PSD</div>
              </li>
              <li className="flex justify-between items-center gap-2 w-48">
              <div className="flex justify-start items-center gap-1"><TiTickOutline className="text-black"/><span>ابعاد</span></div>
              <div className="text-black">1080 * 720</div>
              </li>
              <li className="flex justify-between items-center gap-2 w-48">
              <div className="flex justify-start items-center gap-1"><TiTickOutline className="text-black"/><span>حجم فایل</span></div>
              <div className="text-black">1 گیگ</div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="flex justify-between items-center gap-8">
        <div className="w-[40rem] rounded-md flex justify-center items-center gap-2 bg-slate-200 p-4 transition-all duration-300 hover:bg-slate-300" >
         <div className="flex justify-start items-center">
         <Image
          className="rounded-xl"
          width={100}
          height={100}
          alt={"this is blog picture"}
          src={"/images/icon/feedback.png"}
          priority={true}
        />
        <div className="flex flex-col gap-3">
          <div className="font-bold text-base sm:text-sm">محصولات اوریجینال</div>
          <div className="text-base sm:text-xs">برترین های دنیای وب</div>
        </div>
         </div>
        </div>
        <div className="w-[40rem] rounded-md flex justify-center items-center gap-2 bg-slate-200 p-4 transition-all duration-300 hover:bg-slate-300" >
         <div className="flex justify-start items-center">
         <Image
          className="rounded-xl"
          width={100}
          height={100}
          alt={"this is blog picture"}
          src={"/images/icon/target1.png"}
          priority={true}
        />
        <div className="flex flex-col gap-3">
          <div className="font-bold text-base sm:text-sm">محصولات اوریجینال</div>
          <div className="text-base sm:text-xs">برترین های دنیای وب</div>
        </div>
         </div>
        </div>
        <div className="w-[40rem] rounded-md flex justify-center items-center gap-2 bg-slate-200 p-4 transition-all duration-300 hover:bg-slate-300" >
         <div className="flex justify-start items-center">
         <Image
          className="rounded-xl"
          width={100}
          height={100}
          alt={"this is blog picture"}
          src={"/images/icon/trophy.png"}
          priority={true}
        />
        <div className="flex flex-col gap-3">
          <div className="font-bold text-base sm:text-sm">محصولات اوریجینال</div>
          <div className="text-base sm:text-xs">برترین های دنیای وب</div>
        </div>
         </div>
        </div> 
      </section>
      <section className="flex flex-col gap-6 p-4 rounded-md shadow-[0px_0px_4px_rgba(0,0,0,0.25)]">
        <h2 className="text-lg">توضیحات کامل</h2>
        <p className="leading-9">
          این متن تستی است این متن تستی است این متن تستی است این متن تستی است
          این متن تستی است این متن تستی است این متن تستی است این متن تستی است
          این متن تستی است این متن تستی است این متن تستی استاین متن تستی است این
          متن تستی است این متن تستی است این متن تستی است این متن تستی است این
          متن تستی است این متن تستی است این متن تستی است این متن تستی است این
          متن تستی است این متن تستی است این متن تستی است این متن تستی است این
          متن تستی است این متن تستی است این متن تستی است این متن تستی است
        </p>
      </section>
      <section className="flex flex-col gap-4">
        {/* <h2 className="text-xl">مطالب مرتبط</h2> */}
        <RelatedPosts title={"محصولات مرتبط"}/>
      </section>
      <section className="flex flex-col gap-6">
        <h2 className="text-xl">دیدگاهها</h2>
        <form className="leading-9">
          <p className="bg-red-300 rounded-md h-48 ">دیدگاههای شما</p>
        </form>
      </section>
    </div>
  );
};

export default SingleBlug;
