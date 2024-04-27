"use client";
import { useRef, useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const DetailsCategoryForms = ({ bannerId }) => {
  const formKeysNotSubber = (event) => {
    if (event.key == "Enter") {
      event.preventDefault();
    }
  };
  const titleRef = useRef();
  const slugRef = useRef();
  const imageUrlRef = useRef();
  const imageAltRef = useRef();
  const shortDescRef = useRef();
  const situationRef = useRef(true);
  const typeOfProductRef = useRef();

  const updater = (e) => {
  e.preventDefault();
  const formData = {
    goalId: bannerId,
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
  const url = `https://7gardoon-server3.liara.run/api/updateCategories/${bannerId}`;
  
  axios
  .post(url, formData)
  .then((d) => {
    if (formData.situation == "true") {
      toast.success("دسته با موفقیت بروز رسانی شد", {
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
        } else {
          toast.success("دسته بصورت پیش نویس ذخیره شد", {
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
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

  const remover = () => {
    const url = `https://7gardoon-server3.liara.run/api/deleteCategories/${bannerId}`;
    axios
      .post(url)
      .then((d) => {
        toast.success("دسته با موفقیت حذف شد", {
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
      })
      .catch((e) => {
        toast.error("هنگام حذف دسته خطایی رخ داد", {
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  const [fullData, setFullData] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://7gardoon-server3.liara.run/api/get-categoryById/${bannerId}`
      )
      .then((d) => {
        setFullData(d.data);
        console.log("aaaaaaaa", d.data)
      })
      .catch((e) => {
        toast.error("هنگام لود اطلاعات خطایی رخ داد", {
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  }, [bannerId]);

  console.log("fullData.typeOfProduct", fullData.typeOfProduct)

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <h2 className="text-orange-500">جزئیات دسته</h2>
        <button
          onClick={() => remover()}
          className="bg-rose-600 text-white px-6 py-3 rounded-md text-xs transition-all duration-500 hover:bg-rose-700"
        >
          حذف
        </button>
      </div>
      <div className="flex justify-between items-center">
        <div className="bg-zinc-200 rounded px-3 py-1 text-sm">
          شناسه دسته : {fullData._id ? fullData._id : ""}
        </div>
        <div className="bg-zinc-200 rounded px-3 py-1 text-sm">
          تاریخ بروز رسانی دسته : {fullData.date ? fullData.date : ""}
        </div>
      </div>
      <form
        onKeyDown={formKeysNotSubber}
        onSubmit={updater}
        className="flex flex-col gap-6"
      >
        <div className="flex flex-col gap-2">
          <div>عنوان جدید دسته</div>
          <input
            required={true}
            defaultValue={fullData.title}
            ref={titleRef}
            type="text"
            className="p-2 rounded-md w-full outline-none border-zinc-300 border-2 focus:border-orange-400"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div>اسلاگ جدید دسته</div>
          <input
            required={true}
            defaultValue={fullData.slug}
            ref={slugRef}
            type="text"
            className="inputLtr p-2 rounded-md w-full outline-none border-zinc-300 border-2 focus:border-orange-400"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div>آدرس جدید عکس</div>
          <input
            required={true}
            defaultValue={fullData.image}
            ref={imageUrlRef}
            type="text"
            className="inputLtr p-2 rounded-md w-full outline-none border-zinc-300 border-2 focus:border-orange-400"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div>آلت جدید عکس</div>
          <input
            required={true}
            defaultValue={fullData.imageAlt}
            ref={imageAltRef}
            type="text"
            className="inputLtr p-2 rounded-md w-full outline-none border-zinc-300 border-2 focus:border-orange-400"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div>توضیحات کوتاه جدید </div>
          <input
            required={true}
            defaultValue={fullData.shortDesc}
            ref={shortDescRef}
            type="text"
            className=" p-2 rounded-md w-full outline-none border-zinc-300 border-2 focus:border-orange-400"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div>نوع دسته بندی محصول</div>
          <select
            ref={typeOfProductRef}
            className="p-2 rounded-md w-full outline-none border-zinc-300 border-2 focus:border-orange-400"
          >
            {fullData.typeOfProduct == "book" ? (
              <>
                <option value={"book"}>کتاب</option>
                <option value={"app"}>اپلیکیشن</option>
                <option value={"graphic"}>فایل گرافیکی</option>
              </>
            ) : (fullData.typeOfProduct == "app") ?
              <>
                <option value={"book"}>اپلیکیشن</option>
                <option value={"app"}>کتاب</option>
                <option value={"graphic"}>فایل گرافیکی</option>
              </> :
              <>
                <option value={"graphic"}>فایل گرافیکی</option>
                <option value={"app"}>کتاب</option>
                <option value={"book"}>اپلیکیشن</option>
              </>
            }
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <div>انتشار و پیش نویس</div>
          <select
            ref={situationRef}
            className="p-2 rounded-md w-full outline-none border-zinc-300 border-2 focus:border-orange-400"
          >
            {fullData.situation == true ? (
              <>
                <option value={true}>انتشار</option>
                <option value={false}>پیش نویس</option>
              </>
            ) : (
              <>
                <option value={false}>پیش نویس</option>
                <option value={true}>انتشار</option>
              </>
            )}
          </select>
        </div>
        <button
          type="submit"
          className="p-2 bg-indigo-500 text-white w-full rounded-md translate-all duration-500 hover:bg-orange-500"
        >
          به روز رسانی
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

export default DetailsCategoryForms;
