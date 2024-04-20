"use-client";
import { useRef } from "react";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const NewSliderForms = () => {
  const imageUrlRef = useRef();
  const imageAltRef = useRef();
  const sorterRef = useRef();
  const imageLinkRef = useRef();
  const imageSituationRef = useRef();

  const submitter = (e) => {
    console.log("link", imageLinkRef.current.value);
    e.preventDefault();
    const formData = {
      image: imageUrlRef.current.value,
      imageAlt: imageAltRef.current.value,
      sorter: sorterRef.current.value,
      situation: imageSituationRef.current.value,
      link: imageLinkRef.current.value,
      date: new Date().toLocaleDateString("fa-IR", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    const url = `https://7gardoon-server1.liara.run/api/newSliders`;

    axios
      .post(url, formData)
      .then((d) => {
  
        if (formData.situation == "true") {
          toast.success("اسلایدر با موفقیت منتشر شد", {
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          imageLinkRef.current.value = "";
          imageUrlRef.current.value = "";
          sorterRef.current.value = null;
          imageAltRef.current.value = "";
          imageSituationRef.current.value = true;
          setTimeout(()=>{
            window.location.href = "/dashboard";
          },500)
        } else {
          toast.success("اسلایدر بصورت پیش نویس ذخیره", {
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          imageLinkRef.current.value = "";
          imageUrlRef.current.value = "";
          imageAltRef.current.value = "";
          imageSituationRef.current.value = true;
          sorterRef.current.value = null;
          setTimeout(()=>{
            window.location.href = "/dashboard";
          },500)
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
      <h2 className="text-orange-500">اسلایدر جدید</h2>
      <form
        onSubmit={submitter}
        className="flex flex-col gap-6"
        onKeyDown={formKeysNotSubber}
      >
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
          <div>سورتر اسلایدر</div>
          <input
            required={true}
            ref={sorterRef}
            type="number"
            className="p-2 rounded-md w-full outline-none border-zinc-300 border-2 focus:border-orange-400"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div>لینک عکس</div>
          <input
            required={true}
            ref={imageLinkRef}
            type="text"
            className="inputLtr p-2 rounded-md w-full outline-none border-zinc-300 border-2 focus:border-orange-400"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div>روشن و خاموش</div>
          <select
            ref={imageSituationRef}
            className="p-2 rounded-md w-full outline-none border-zinc-300 border-2 focus:border-orange-400"
          >
            <option value={true}>روشن</option>
            <option value={false}>خاموش</option>
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

export default NewSliderForms;
