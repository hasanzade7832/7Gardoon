import Image from "next/image";
import Link from "next/link";

const BlogBox = () => {
  return (
    <article className="sliderItem p-2 hover:pt-0 transition-all duration-300">
      <Link href={"/shop"} target={"_blank"}>
        <div className="relative bg-white shadow-[0px_1px_8px_rgba(0,0,0,0.2)] h-[25rem] w-72 rounded-lg">
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
              <h3 className="line-clamp-2">
                این عنوان محصول است این عنوان محصول است این عنوان محصول است این
                عنوان محصول استاین عنوان محصول است
              </h3>
              <p className="text-base sm:text-sm text-justify line-clamp-3">
                این متن تستی 2 متن تستی 2 متن تستس 2 متن تستس 2 این متن تستی 2
                متن تستی 2 متن تستس 2 متن تستس 2 این متن تستی 2 متن تستی 2 متن
                تستس 2 متن تستس 2
              </p>
              {/* <div className="h-1 w-[90%] bg-zinc-300 rounded-full mx-auto "></div> */}
              <hr className="mb-10" />
              <div className="absolute bottom-2 right-2 left-2 flex justify-between items-center -mt-14">
                <div className="text-base sm:text-sm bg-zinc-200 rounded-md py-1 px-3">
                  1402/04/15
                </div>
                <div className="text-base sm:text-sm bg-zinc-200 rounded-md py-1 px-3">
                  5 دیدگاه
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default BlogBox;
