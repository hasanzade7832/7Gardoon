"use client";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowSmUp } from "react-icons/hi";
import { LiaAngleLeftSolid } from "react-icons/lia";

const Footer = () => {
  const goTopCtrl = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="container mx-auto flex flex-col py-6 gap-8 mt-20">
      <div className="flex justify-between items-center p-8 bg-zinc-100 rounded-lg ">
        {/* //ستون اول */}
        <div className="w-72 max-w-72 flex-col gap-4">
          <div className="flex justify-center mb-4">
            <Image
              src={"/logo.png"}
              className="rounded-lg"
              // objectFit="cover"
              // layout="fixed"
              width={100}
              height={100}
              alt="7Gardoon"
            />
          </div>
          <p className="text-center text-base sm:text-sm">
            سایت آموزشی هفت گردون
          </p>
        </div>
        {/* //ستون دوم */}
        <div className="flex justify-around items-start gap-48">
          <div className="flex flex-col gap-4">
            <div className="text-xl">دسترسی سریع</div>
            <ul className="flex flex-col gap-4 text-base sm:text-sm">
              <li>
                <Link
                  href={"/"}
                  className="w-32 flex gap-1 items-center transition-all duration-300 hover:gap-3 hover:text-orange-400"
                >
                  <LiaAngleLeftSolid />
                  <span>درباره ما</span>
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="w-32 flex gap-1 items-center transition-all duration-300 hover:gap-3 hover:text-orange-400"
                >
                  <LiaAngleLeftSolid />
                  <span>تماس با ما</span>
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="w-32 flex gap-1 items-center transition-all duration-300 hover:gap-3 hover:text-orange-400"
                >
                  <LiaAngleLeftSolid />
                  <span>حریم خصوصی</span>
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="w-32 flex gap-1 items-center transition-all duration-300 hover:gap-3 hover:text-orange-400"
                >
                  <LiaAngleLeftSolid />
                  <span>وبلاگ</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-xl">راهنمای خرید</div>
            <ul className="flex flex-col gap-4 text-base sm:text-sm">
              <li>
                <Link
                  href={"/"}
                  className="w-32 flex gap-1 items-center transition-all duration-300 hover:gap-2 hover:text-orange-400"
                >
                  <LiaAngleLeftSolid />
                  <span>سوالات متداول</span>
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="w-32 flex gap-1 items-center transition-all duration-300 hover:gap-2 hover:text-orange-400"
                >
                  <LiaAngleLeftSolid />
                  <span>قوانین سایت</span>
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="w-36 flex gap-1 items-center transition-all duration-300 hover:gap-2 hover:text-orange-400"
                >
                  <LiaAngleLeftSolid />
                  <span>چگونه خرید کنیم ؟</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex justify-center gap-4 items-center">
            <Image
              src={"/images/license/1.webp"}
              className="rounded-lg"
              // objectFit="cover"
              // layout="fixed"
              width={120}
              height={120}
              alt="7Gardoon"
            />
            <Image
              src={"/images/license/2.webp"}
              className="rounded-lg"
              // objectFit="cover"
              // layout="fixed"
              width={120}
              height={120}
              alt="7Gardoon"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <p>
          تمامی حقوق مادی و معنوی این سایت متعلق به گروه آموزشی هفت گردون میباشد
        </p>
        <HiOutlineArrowSmUp
          onClick={() => goTopCtrl()}
          className="bg-yellow-500 fixed left-4 bottom-4 w-12 h-12 p-2 rounded-md bg-zinc-200 transition-all duration-500 hover:bg-indigo-400 hover:text-white border-2 border-black cursor-pointer text-black"
        />
      </div>
    </footer>
  );
};

export default Footer;
