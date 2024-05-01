"use client";

import Image from "next/image";
import Link from "next/link";
import {
  PiTelegramLogoThin,
  PiYoutubeLogoThin,
  PiInstagramLogoThin,
} from "react-icons/pi";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoPersonSharp } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";

const Header = () => {
  return (
    // اضافه کردن کلاس‌های sticky و top-0
    <header className="py-1 sticky top-0 bg-white z-10 shadow-effect p-10">
      <div className="flex justify-between items-start">
        <div className="p-4 rounded-lg shadow-effect">
          <Link href={"/"}>
            <div className="flex justify-center items-center">
              <Image
                src={"/logo.png"}
                className="rounded-lg"
                width={100}
                height={100}
                alt="7Gardoon"
              />
            </div>
          </Link>
          <p className="mt-5">سایت آموزشی هفت گردون</p>
          <div className="flex justify-center mt-3 text-indigo-800">
            <span className="social-link">
              <Link
                href="https://www.google.com"
                target="_blank"
                rel="noreferrer"
              >
                <PiTelegramLogoThin className="mx-2 text-2xl cursor-pointer" />
              </Link>
            </span>
            <span className="social-link">
              <Link
                href="https://www.google.com"
                target="_blank"
                rel="noreferrer"
              >
                <PiYoutubeLogoThin className="mx-2 text-2xl cursor-pointer" />
              </Link>
            </span>
            <span className="social-link">
              <Link href="https://www.google.com" target="_blank">
                <PiInstagramLogoThin className="mx-2 text-2xl cursor-pointer" />
              </Link>
            </span>
          </div>
        </div>
        <div className="w-5/6 flex flex-col gap-16 h-40 py-10 justify-between">
          <div className="flex justify-between items-center w-full">
            <nav>
              <ul className="flex items-center justify-start gap-2">
                <li>
                  <Link legacyBehavior href="/">
                    <a className="w-32 h-10 rounded-md bg-zinc-200 flex justify-center items-center transition-all duration-300 hover:bg-orange-400 hover:text-white">
                      خانه
                    </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/">
                    <a className="w-32 h-10 rounded-md bg-zinc-200 flex justify-center items-center transition-all duration-300 hover:bg-orange-400 hover:text-white">
                      اپلیکیشن ها{" "}
                    </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/">
                    <a className="w-32 h-10 rounded-md bg-zinc-200 flex justify-center items-center transition-all duration-300 hover:bg-orange-400 hover:text-white">
                      کتاب ها
                    </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/">
                    <a className="w-32 h-10 rounded-md bg-zinc-200 flex justify-center items-center transition-all duration-300 hover:bg-orange-400 hover:text-white">
                      فایل های گرافیکی
                    </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/blog">
                    <a className="w-32 h-10 rounded-md bg-zinc-200 flex justify-center items-center transition-all duration-300 hover:bg-orange-400 hover:text-white">
                      وبلاگ
                    </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/dashboard">
                    <a className="w-32 h-10 rounded-md bg-zinc-200 flex justify-center items-center transition-all duration-300 hover:bg-orange-400 hover:text-white">
                      داشبورد
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="flex gap-4 items-center w-[20rem] justify-end">

            </div>
            <div className="flex flex-col items-end gap-2">
              <div className="flex gap-2 items-center">
                <div>09926559671</div>
                <div className="rotate-12 rounded bg-slate-200 p-1">
                  <FaPhoneAlt className="w-4 h-4 -rotate-12" />
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div>hasanzade.hoseyn27@gmail.com</div>
                <div class="rotate-12 rounded bg-slate-200 p-1">
                  <MdEmail className="w-4 h-4 -rotate-12" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="relative flex justify-start items-center w-full ml-8">
              <input
                className="outline-none w-full h-[3.2rem] p-3 rounded-lg shadow-[0px_0px_5px_rgba(0,0,0,0.15)] transition-all duration-500 focus:shadow-[0px_3px_7px_rgba(0,0,0,0.25)]"
                name="productsSearch"
                id="productsSearch"
                type="text"
                placeholder="جستجو بین محصولات..."
              />
              <label
                htmlFor="productsSearch"
                className="w-10 absolute left-0 cursor-pointer "
              >
                <CiSearch className="w-8 h-8" />
              </label>
            </div>
            <div className="flex gap-4 items-center w-[20rem] justify-end">
              <div>
                <Link href={"/account"}>
                  <IoPersonSharp className="bg-zinc-400 text-white rounded p-2 w-12 h-12" />
                </Link>
              </div>

              <Link href={"/cart"}>
                <div className="flex gap-2 justify-center bg-orange-400 p-2 items-center rounded-md">
                  <div className="text-orange-500 bg-white rounded-full w-8 h-8 flex justify-center items-center">
                    0
                  </div>
                  <div className="text-white">سبد خرید</div>
                  <div className="text-orange-500 bg-white rounded-lg w-8 h-8 flex justify-center items-center">
                    <LuShoppingCart className="cursor-pointer w-6 h-6" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .shadow-effect {
          transition: box-shadow 0.3s ease-in-out;
          box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.5);
        }
        .shadow-effect:hover {
          box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.75);
        }
      `}</style>
    </header>
  );
};

export default Header;
