import Image from "next/image";
import Link from "next/link";

const CatBox = ({ data }) => {
  return (
    <Link href={"/"}>
      <div className="flex items-center bg-slate-200 transition-all duration-300 hover:bg-slate-400 rounded-lg p-3 w-full mt-5">
        <div className="flex flex-col gap-2">
          <h3 className="text-black">{data.title}</h3>
          <p className="text-base sm:text-sm">{data.shortDesc}</p>
        </div>
        <div className="w-16">
          <Image
            alt={data.imageAlt}
            title={data.imageAlt}
            width={60}
            height={60}
            src={data.image}
            priority={true}
          />
        </div>
      </div>
    </Link>
  );
};

export default CatBox;
