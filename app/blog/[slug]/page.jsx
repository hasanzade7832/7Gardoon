import BreadCrumbs from "@/components/breadCrumbs";
import RelatedPosts from "@/components/relatedPosts";
import Image from "next/image";
import { HiOutlineEye } from "react-icons/hi";
import { FaRegComment } from "react-icons/fa";
import { BsCalendar2Week } from "react-icons/bs";

const SingleBlug = () => {
  return (
    <div className="flex flex-col gap-12">
      <BreadCrumbs
        secondTitle={"وبلاگ"}
        secondLink={"/blog"}
        titleBlog={"آموزش جاوا اسکریپت با هفت گردون"}
      />
      <section className="flex justify-center items-center">
        <Image
          className="rounded-xl w-98 justify-center"
          width={700}
          height={300}
          alt={"this is blog picture"}
          src={"/images/products/book1.png"}
          // objectFit="cover"
          // layout="fixed"
          priority={true}
        />
      </section>
      <section className="flex flex-col gap-6">
        <h1 className="text-blue-400 text-lg text-center">
          آموزش جاوا اسکریپت با هفت گردون
        </h1>
        <div className="flex justify-center iems-center gap-4 text-base sm:text-sm">
          <div className="bg-zinc-100 rounded-md p-2 flex justigy-between items-center gap-3">
            <HiOutlineEye className="w-6 h-6" />
            <span>تعداد بازدید :</span>
            <span>5</span>
          </div>
          <div className="bg-zinc-100 rounded-md p-2 flex justigy-between items-center gap-3">
            <FaRegComment className="w-6 h-6" />
            <span> تعداد دیدگاه :</span>
            <span>5</span>
          </div>
          <div className="bg-zinc-100 rounded-md p-2 flex justigy-between items-center gap-3">
            <BsCalendar2Week className="w-6 h-6" />
            <span> آخرین بروز رسانی :</span>
            <span>1404/24/05</span>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-6">
        <h2 className="text-xl">توضیحات کامل</h2>
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
        <RelatedPosts title={"مقالات مرتبط"} />
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
