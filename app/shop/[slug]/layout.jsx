import Link from "next/link";
import { IoSendOutline } from "react-icons/io5";

const BlogLayout = ({ children }) => {
  return (
    <div className="flex justify-between items-start container mx-auto gap-8">
      <main className="w-[80%]">{children}</main>
      <aside className="flex flex-col gap-12 w-96 max-w-96  rounded-md  mt-20">
        <div className="flex flex-col gap-4">
          <button className="flex justify-cente items-center text-center bg-orange-500 transition-all duration-300 hover:bg-orange-600 text-white rounded-md p-2 w-full">
            افزودن به سبد خرید - 30000 تومان
          </button>
          <button className="flex justify-cente items-center text-center bg-blue-500 transition-all duration-300 hover:bg-blue-600 text-white rounded-md p-2 w-full">
            افزودن به علاقه مندی ها
          </button>
        </div>
        <div className="rounded-lg p-3 shadow-[0px_0px_8px_rgba(0,0,0,0.35)]">
          <ul className="flex flex-col gap-4">
            <li className="flex justify-between items-center">
              <span>تعداد خرید</span>
              <span>85</span>
            </li>
            <li className="flex justify-between items-center">
              <span>تعداد بازدید</span>
              <span>69</span>
            </li>
            <li className="flex justify-between items-center">
              <span>تعداد دیدگاه</span>
              <span>96</span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 rounded-lg p-3 shadow-[0px_0px_8px_rgba(0,0,0,0.35)]">
          <h3>معرفی کوتاه </h3>
          <p className="text-sm text-justify leading-10 ">
            این معرفی کوتاه است این معرفی کوتاه است این معرفی کوتاه است این
            معرفی کوتاه است این معرفی کوتاه است این معرفی کوتاه است این معرفی
            کوتاه است این معرفی کوتاه است این معرفی کوتاه است این معرفی کوتاه
            است این معرفی کوتاه است این معرفی کوتاه است
          </p>
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
          <h3 className="text-blue-400">دسته بندی ها</h3>
          <div className="flex justify-start items-center gap-2 flex-wrap">
            <Link
              className="rounded-md hover:text-white p-2 justify-center items-center text-base sm:text-sm bg-zinc-100 transition-all duration-300 hover:bg-orange-500  
                "
              href={"/"}
            >
              دسته 1
            </Link>
            <Link
              className="rounded-md hover:text-white p-2 justify-center items-center text-base sm:text-sm bg-zinc-100 transition-all duration-300 hover:bg-orange-500  
                "
              href={"/"}
            >
              دسته 1
            </Link>
            <Link
              className="rounded-md hover:text-white p-2 justify-center items-center text-base sm:text-sm bg-zinc-100 transition-all duration-300 hover:bg-orange-500  
                "
              href={"/"}
            >
              دسته 1
            </Link>
            <Link
              className="rounded-md hover:text-white p-2 justify-center items-center text-base sm:text-sm bg-zinc-100 transition-all duration-300 hover:bg-orange-500  
                "
              href={"/"}
            >
              دسته 1
            </Link>
            <Link
              className="p-2 justify-center items-center text-base sm:text-sm bg-zinc-100 transition-all duration-300 hover:bg-orange-500  
                "
              href={"/"}
            >
              دسته 1
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
