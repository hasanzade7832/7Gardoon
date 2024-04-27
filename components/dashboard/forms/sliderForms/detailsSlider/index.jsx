"use client";
import { useRef, useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const DetailsSliderForms = ({ bannerId }) => {
  const formKeysNotSubber = (event) => {
    if (event.key == "Enter") {
      event.preventDefault();
    }
  };
  const imageUrlRef = useRef();
  const imageAltRef = useRef();
  const sorterRef = useRef();
  const imageLinkRef = useRef();
  const imageSituationRef = useRef();

  const updater = (e) => {
    e.preventDefault();
    const formData = {
      goalId: bannerId,
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
    const url = `https://7gardoon-server3.liara.run/api/updateSliders/${bannerId}`;

    axios
      .post(url, formData)
      .then((d) => {
        if (formData.situation == "true") {
          toast.success("اسلایدر با موفقیت بروز رسانی شد", {
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          toast.success("اسلایدر بصورت پیش نویس ذخیره شد", {
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
    const url = `https://7gardoon-server3.liara.run/api/deleteSlider/${bannerId}`;
    axios
      .post(url)
      .then((d) => {
        toast.success("اسلایدر با موفقیت حذف شد", {
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
        toast.error("هنگام حذف اسلایدر خطایی رخ داد", {
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
      .get(`https://7gardoon-server3.liara.run/api/slider/${bannerId}`)
      .then((d) => {
        setFullData(d.data);
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

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <h2 className="text-orange-500">جزئیات اسلایدر</h2>
        <button
          onClick={() => remover()}
          className="bg-rose-600 text-white px-6 py-3 rounded-md text-xs transition-all duration-500 hover:bg-rose-700"
        >
          حذف
        </button>
      </div>
      <div className="flex justify-between items-center">
        <div className="bg-zinc-200 rounded px-3 py-1 text-sm">
          شناسه اسلایدر : {fullData._id ? fullData._id : ""}
        </div>
        <div className="bg-zinc-200 rounded px-3 py-1 text-sm">
          تاریخ بروز رسانی اسلایدر : {fullData.date ? fullData.date : ""}
        </div>
      </div>
      <form
        onKeyDown={formKeysNotSubber}
        onSubmit={updater}
        className="flex flex-col gap-6"
      >
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
          <div>سورتر جدید</div>
          <input
            required={true}
            defaultValue={fullData.sorter}
            ref={sorterRef}
            type="number"
            className="inputLtr p-2 rounded-md w-full outline-none border-zinc-300 border-2 focus:border-orange-400"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div>لینک جدید عکس</div>
          <input
            required={true}
            defaultValue={fullData.link}
            ref={imageLinkRef}
            type="text"
            className="inputLtr p-2 rounded-md w-full outline-none border-zinc-300 border-2 focus:border-orange-400"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div>روشن و خاموش</div>
          <select
            defaultValue={fullData.situation}
            ref={imageSituationRef}
            className="p-2 rounded-md w-full outline-none border-zinc-300 border-2 focus:border-orange-400"
          >
            {fullData.situation == true ? (
              <>
                <option value={true}>روشن</option>
                <option value={false}>خاموش</option>
              </>
            ) : (
              <>
                <option value={false}>خاموش</option>
                <option value={true}>روشن</option>
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

export default DetailsSliderForms;
