import Image from "next/image";
import { HiShoppingBag } from "react-icons/hi";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";

const SlideBox = () => {
  return (
    <article className="sliderItem p-2 hover:pt-0 transition-all duration-300">
      <Link href={"/shop"} target={"_blank"}>
        <div className="relative bg-white h-[25rem] w-72 rounded-lg">
          <div className="flex justify-center items-center pt-4">
            <Image
              width={260}
              height={150}
              className="rounded-md"
              src={"/images/products/book.webp"}
              alt="alt"
            />
          </div>
          <div>
            <div className="flex flex-col gap-6 p-2">
              <h3 className="line-clamp-3">
                عنوان محصول هستنوان محصول هستنوان محصول هستنوان محصول هستنوان
                محصول هست این عنوان محصول هستنوان محصول هستنوان محصول هستنوان
                محصول هستنوان محصول هست اینعنوان محصول هستنوان محصول هستنوان
                محصول هستنوان محصول هستنوان محصول هست اینعنوان محصول هستنوان
                محصول هستنوان محصول هستنوان محصول هستنوان محصول هست این
              </h3>
              <div className="categories flex justify-start items-center flex-wrap gap-1">
                <Link legacyBehavior href={"/"}>
                  <span className="py-1 px-2 rounded bg-zinc-200 transition-all duration-300 hover:bg-zinc-300">
                    رمان
                  </span>
                </Link>
                <Link legacyBehavior href={"/"}>
                  <span className="py-1 px-2 rounded bg-zinc-200 transition-all duration-300 hover:bg-zinc-300">
                    رمان
                  </span>
                </Link>
              </div>
            </div>
            <div className=" absolute bottom-2  w-full flex justify-between items-center">
              <div className="flex gap-2 justify-start items-center">
                <CiBookmark className=" mr-1 w-10 h-10 p-2 rounded bg-zinc-200 text-indigo-600 cursor-pointer transition-all duration-300 hover:bg-orange-500 hover:text-white" />
                <CiSearch className=" mr-1 w-10 h-10 p-2 rounded bg-zinc-200 text-indigo-600 cursor-pointer transition-all duration-300 hover:bg-orange-500 hover:text-white" />
              </div>
              <div className="flex gap-2 justify-start items-end">
                <LuShoppingCart className=" mr-1 w-10 h-10 p-2 rounded bg-zinc-200 text-indigo-600 cursor-pointer transition-all duration-300 hover:bg-orange-500 hover:text-white" />
                <div className="ml-1 bg-zinc-500 text-white p-2 rounded rounded-br-md ">
                  5000 تومان
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default SlideBox;
