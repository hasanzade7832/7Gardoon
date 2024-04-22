import BreadCrumbs from "@/components/breadCrumbs";
import RelatedPosts from "@/components/relatedPosts";
import Image from "next/image";
import { HiOutlineEye } from "react-icons/hi";
import { FaRegComment } from "react-icons/fa";
import { BsCalendar2Week } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { IoSendOutline } from "react-icons/io5";
import Link from "next/link";
import MostViewdPage from "@/components/mostViewedPost";

const getData = async (slug) => {
  const data = await fetch(
    `https://7gardoon-server1.liara.run/api/post/${slug}`,
    { cache: "no-store" }
  );
  return data.json();
};

const SingleBlug = async ({ params }) => {
  const data = await getData(params.slug);
  console.log("params", data.title);

  return (
    <div className="flex justify-between items-start container mx-auto gap-2">
      {data.msg ? (<div className="mt-10 ">مقاله ای با این عنوان هنوز منتشر نشده است ...</div>) : (<>
        <main className="w-[80%]">
          <div className="flex flex-col gap-12">
            <BreadCrumbs
              secondTitle={"وبلاگ"}
              secondLink={"/blog"}
              titleBlog={data.title}
            />
            <section className="flex justify-center items-center">
              <Image
                className="rounded-xl w-98 justify-center"
                width={700}
                height={300}
                alt={data.imageAlt}
                title={data.imageAlt}
                src={data.image}
                priority={true}
              />
            </section>
            <section className="flex flex-col gap-6">
              <h1 className="text-blue-400 text-lg text-center">{data.title}</h1>
              <div className="flex justify-center iems-center gap-4 text-base sm:text-sm">
                <div className="bg-zinc-100 rounded-md p-2 flex justigy-between items-center gap-3">
                  <HiOutlineEye className="w-6 h-6" />
                  <span>تعداد بازدید :</span>
                  <span>{data.pageView}</span>
                </div>
                <div className="bg-zinc-100 rounded-md p-2 flex justigy-between items-center gap-3">
                  <FaRegComment className="w-6 h-6" />
                  <span> تعداد دیدگاه :</span>
                  <span>{data.comments}</span>
                </div>
                <div className="bg-zinc-100 rounded-md p-2 flex justigy-between items-center gap-3">
                  <BsCalendar2Week className="w-6 h-6" />
                  <span> آخرین بروز رسانی :</span>
                  <span>{data.updatedAT}</span>
                </div>
              </div>
            </section>
            <section className="flex flex-col gap-6">
              <h2 className="text-xl">توضیحات کامل</h2>
              <p className="leading-9">{data.longDesc}</p>
            </section>
            <section className="flex flex-col gap-4">
              <h2 className="text-xl">مطالب مرتبط</h2>
              <RelatedPosts
                title={"پست های مرتبط"}
                relatedPostsData={data.relatedPosts}
              />
            </section>
            <section className="flex flex-col gap-6">
              <h2 className="text-xl">دیدگاهها</h2>
              <form className="leading-9">
                <p className="bg-red-300 rounded-md h-48 ">دیدگاههای شما</p>
              </form>
            </section>
          </div>
        </main>
        <aside className="flex flex-col gap-12 w-96 max-w-96  rounded-md  mt-20">
          <form className="flex justify-between items-center border-zinc-700 border-2 px-2 rounded-md ">
            <input
              type="text"
              className="bg-transparent py-200 outline-none text-sm"
              placeholder="جستجو در وبلاگ"
            />
            <CiSearch className="w-6 h-6" />
          </form>
          <div className="flex flex-col gap-4 rounded-lg p-3 shadow-[0px_0px_8px_rgba(0,0,0,0.35)]">
            <h3>توضیحات خلاصه </h3>
            <p className="leading-8 tesxt-base sm:text-sm text-justify">
              {data.shortDesc}
            </p>
          </div>
          <div className="flex flex-col gap-4 rounded-lg p-3 shadow-[0px_0px_8px_rgba(0,0,0,0.35)]">
            <h3 className="text-blue-400">بر چسب ها</h3>
            <div className="flex justify-start items-center gap-2 flex-wrap">
              {data.tags.map((ta, i) => (
                <Link
                  className="rounded-md hover:text-white p-2 justify-center items-center text-base sm:text-sm bg-zinc-100 transition-all duration-300 hover:bg-orange-500  
              "
                  href={`/search/tags/${ta}`}
                  key={i}
                >
                  {ta}
                </Link>
              ))}
            </div>
          </div>

          <MostViewdPage />

          <div className="flex flex-col gap-4 rounded-lg p-3 shadow-[0px_0px_8px_rgba(0,0,0,0.35)]">
            <h3 className="text-blue-400">پر فروش ترین محصولات</h3>
            <ul className="flex flex-col gap-6">
              <li>
                <Link
                  className="p-2 justify-center items-center text-base sm:text-sm border-r-2 border-zinc-600"
                  href={"/"}
                >
                  مقاله تستی اول
                </Link>
              </li>
            </ul>
          </div>
          {/* <div className="flex flex-col gap-4 rounded-lg p-3 shadow-[0px_0px_8px_rgba(0,0,0,0.35)]">
          <h3 className="text-blue-400">شرکت در خبرنامه</h3>
          <form className="flex justify-between items-center border-zinc-700 border-2 px-2 rounded-md ">
            <input
              type="text"
              className="bg-transparent py-200 outline-none text-sm"
              placeholder="ایمیل خود را وارد کنید ..."
            />
            <IoSendOutline className="w-6 h-6 rotate-180" />
          </form>
        </div> */}
        </aside>

      </>)}
    </div>
  );
};

export default SingleBlug;
