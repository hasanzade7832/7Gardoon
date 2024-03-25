import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { IoSendOutline } from "react-icons/io5";

const BlogLayout = ({ children }) => {
  return (
    <div className="flex justify-between items-start container mx-auto gap-8">
      <main className="w-[80%]">{children}</main>
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
            این خلاصه است این خلاصه است این خلاصه است این خلاصه است این خلاصه
            است این خلاصه است این خلاصه است این خلاصه است این خلاصه است این
            خلاصه است
          </p>
        </div>
        <div className="flex flex-col gap-4 rounded-lg p-3 shadow-[0px_0px_8px_rgba(0,0,0,0.35)]">
          <h3 className="text-blue-400"> پرازدید ترین مقالات </h3>
          <ul className="flex flex-col gap-6">
            <li>
             
            </li>
            <li>
              <Link
                className="p-2 justify-center items-center text-base sm:text-sm border-r-2 border-zinc-600"
                href={"/"}
              >
                مقاله تستی اول
              </Link>
            </li>
            <li>
              <Link
                className="p-2 justify-center items-center text-base sm:text-sm border-r-2 border-zinc-600"
                href={"/"}
              >
                مقاله تستی اول
              </Link>
            </li>
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
        <div className="flex flex-col gap-4 rounded-lg p-3 shadow-[0px_0px_8px_rgba(0,0,0,0.35)]">
          <h3 className="text-blue-400">بر چسب ها</h3>
          <div className="flex justify-start items-center gap-2 flex-wrap">
          <Link
                className="rounded-md hover:text-white p-2 justify-center items-center text-base sm:text-sm bg-zinc-100 transition-all duration-300 hover:bg-orange-500  
                "
                href={"/"}
              >
                مقاله تستی اول
              </Link>
              <Link
                className="rounded-md hover:text-white p-2 justify-center items-center text-base sm:text-sm bg-zinc-100 transition-all duration-300 hover:bg-orange-500  
                "
                href={"/"}
              >
                مقاله تستی اول
              </Link>
              <Link
                className="rounded-md hover:text-white p-2 justify-center items-center text-base sm:text-sm bg-zinc-100 transition-all duration-300 hover:bg-orange-500  
                "
                href={"/"}
              >
                مقاله تستی اول
              </Link>
              <Link
                className="rounded-md hover:text-white p-2 justify-center items-center text-base sm:text-sm bg-zinc-100 transition-all duration-300 hover:bg-orange-500  
                "
                href={"/"}
              >
                مقاله تستی اول
              </Link>
              <Link
                className="p-2 justify-center items-center text-base sm:text-sm bg-zinc-100 transition-all duration-300 hover:bg-orange-500  
                "
                href={"/"}
              >
                مقاله تستی اول
              </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4 rounded-lg p-3 shadow-[0px_0px_8px_rgba(0,0,0,0.35)]">
          <h3 className="text-blue-400">شرکت در خبرنامه</h3>
          <form className="flex justify-between items-center border-zinc-700 border-2 px-2 rounded-md ">
            <input
              type="text"
              className="bg-transparent py-200 outline-none text-sm"
              placeholder="ایمیل خود را وارد کنید ..."
            />
            <IoSendOutline className="w-6 h-6 rotate-180" />
          </form>
        </div>
      </aside>
    </div>
  );
};

export default BlogLayout;
