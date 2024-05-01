"use-client";
import { useRef } from "react";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const NewCategories = () => {
  const titleRef = useRef();
  const slugRef = useRef();
  const imageUrlRef = useRef();
  const imageAltRef = useRef();
  const situationRef = useRef(true);
  const shortDescRef = useRef();
  const typeOfProductRef = useRef();

  const submitter = (e) => {
    e.preventDefault();
    const formData = {
      title: titleRef.current.value,
      slug: slugRef.current.value,
      image: imageUrlRef.current.value,
      imageAlt: imageAltRef.current.value,
      situation: situationRef.current.value,
      shortDesc: shortDescRef.current.value,
      typeOfProduct: typeOfProductRef.current.value,
      date: new Date().toLocaleDateString("fa-IR", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    const url = `https://7gardoon-servers.liara.run/api/newCategories`;

    console.log("title",titleRef.current.value);
    console.log("slug",slugRef.current.value);
    console.log("image",imageUrlRef.current.value);
    console.log("imageAlt",imageAltRef.current.value);
    console.log("situation",situationRef.current.value);
    console.log("shortdesc",shortDescRef.current.value);
    
    axios
      .post(url, formData)
      .then((d) => {
        if (formData.situation == "true") {
          toast.success("دسته با موفقیت منتشر شد", {
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

          setTimeout(() => {
            window.location.href = "/dashboard";
          }, 500);
        } else {
          toast.success("دسته بصورت پیش نویس ذخیره", {
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setTimeout(() => {
            window.location.href = "/dashboard";
          }, 500);
        }
      })
      .catch((e) => {
        let message = "متاسفانه ناموفق بود.";
        if (e.response.data.msg) {
          message = e.response.data.msg;
        }
        toast.error(message, {
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  const formKeysNotSubber = (event) => {
    if (event.key == "Enter") {
      event.preventDefault();
    }
  };
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-orange-500">دسته جدید</h2>
      <form
        onSubmit={submitter}
        className="flex flex-col gap-6"
        onKeyDown={formKeysNotSubber}
      >
        <div className="flex flex-col gap-2">
          <div>عنوان دسته محصول</div>
          <input
            required={true}
            ref={titleRef}
            type="text"
            className="p-2 rounded-md w-full outline-none border-zinc-300 border-2 focus:border-orange-400"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div>اسلاگ دسته محصول</div>
          <input
            required={true}
            ref={slugRef}
            type="text"
            className="inputLtr p-2 rounded-md w-full outline-none border-zinc-300 border-2 focus:border-orange-400"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div>آدرس عکس</div>
          <input
            required={true}
            ref={imageUrlRef}
            type="text"
            className="inputLtr p-2 rounded-md w-full outline-none border-zinc-300 border-2 focus:border-orange-400"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div>آلت عکس</div>
          <input
            required={true}
            ref={imageAltRef}
            type="text"
            className="p-2 rounded-md w-full outline-none border-zinc-300 border-2 focus:border-orange-400"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div>توضیحات کوتاه</div>
          <input
            required={true}
            ref={shortDescRef}
            type="text"
            className="p-2 rounded-md w-full outline-none border-zinc-300 border-2 focus:border-orange-400"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div>انتشار یا پیش نویس</div>
          <select
            ref={situationRef}
            className="p-2 rounded-md w-full outline-none border-zinc-300 border-2 focus:border-orange-400"
          >
            <option value={true}>انتشار</option>
            <option value={false}>پیش نویس</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <div>نوع دسته بندی محصول</div>
          <select
            ref={typeOfProductRef}
            className="p-2 rounded-md w-full outline-none border-zinc-300 border-2 focus:border-orange-400"
          >
            <option value={"book"}>کتاب</option>
            <option value={"app"}>اپلیکیشن</option>
            <option value={"graphic"}>فایل گرافیکی</option>
          </select>
        </div>
        <button
          type="submit"
          className="p-2 bg-indigo-500 text-white w-full rounded-md translate-all duration-500 hover:bg-orange-500"
        >
          ارسال
        </button>
      </form>
      <ToastContainer
        bodyClassName={() => "font-[IranSans] text-sm flex items-center"}
        position="top-right"
        autoClose={3000}
        theme="colored"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default NewCategories;
