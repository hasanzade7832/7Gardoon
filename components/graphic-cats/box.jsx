import Image from "next/image";
import Link from "next/link";

const CatBox = () => {
  return (
    <Link href={"/"}>
      <div className="flex items-center bg-slate-200 transition-all duration-300 hover:bg-slate-400 rounded-lg p-3 w-full mt-5">
        <div className="flex flex-col gap-2">
          <h3 className="text-black">فایل لاایه باز فتوشاپ</h3>
          <p className="text-base sm:text-sm">وکتورهای گرافیکی قدرتمند</p>
        </div>
        <div className="w-16">
          <Image
            alt="alt"
            width={60}
            height={60}
            src={"/images/categories/Ai.webp"}
            // layout="fixed"
            // objectFit="cover"
          />
        </div>
      </div>
    </Link>
  );
};

export default CatBox;
