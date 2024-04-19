import Image from "next/image";
import Link from "next/link";

const BlogBox = ({ data }) => {
  console.log("AAAAAAAA", data);
  return (
    <article className="sliderItem p-2 hover:pt-0 transition-all duration-300">
      <div className="relative bg-white shadow-[0px_1px_8px_rgba(0,0,0,0.2)] h-[25rem] w-72 rounded-lg">
        <div className="flex justify-center items-center pt-4">
          <Link href={`/blog/${data.slug}`} target={"_blank"}>
            <Image
              width={260}
              height={150}
              className="rounded-md"
              src={data.image}
              alt={data.imageAlt}
              title={data.imageAlt}
            />
          </Link>
        </div>
        <div>
          <div className="flex flex-col gap-6 p-2">
            <h3 className="line-clamp-2 ">{data.title}</h3>
            <p className="text-base sm:text-sm text-justify line-clamp-3">
              {data.shortDesc}
            </p>
            {/* <div className="h-1 w-[90%] bg-zinc-300 rounded-full mx-auto "></div> */}
            {/* <hr className="mb-10" /> */}
            <div className="h-1 w-[90%] absolute bottom-12 right-2 left-2 bg-zinc-300 rounded-full mx-auto" />
            <div className="absolute bottom-2 right-2 left-2 flex justify-between items-center -mt-14">
              <div className="text-base sm:text-sm bg-zinc-200 rounded-md py-1 px-3">
                {data.updatedAT}
              </div>
              <div className="text-base sm:text-sm bg-zinc-200 rounded-md py-1 px-3">
                {data.pageView} بازدید
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogBox;
