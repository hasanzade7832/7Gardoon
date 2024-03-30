"use client";
import { useRef, useEffect, useState } from "react";
import axios from "axios";

const DetailsBannerForms = ({ bannerId }) => {
  const formKeysNotSubber = (event) => {
    if (event.key == "Enter") {
      event.preventDefault();
    }
  };
  const imageUrlRef = useRef();
  const imageAltRef = useRef();
  const imageLinkRef = useRef();
  const imageSituationRef = useRef();

  const updater = (e) => {
    e.preventDefault();
    const formData = {
      goalId: bannerId,
      image: imageUrlRef.current.value,
      imageAlt: imageAltRef.current.value,
      situation: imageSituationRef.current.value,
      link: imageLinkRef.current.value,
      date: new Date().toLocaleDateString("fa-IR", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    const url = `https://7gardoon-server.liara.run/api/updateBanners/${bannerId}`;

    axios
      .post(url, formData)
      .then((d) => console.log("ok"))
      .catch((e) => console.log("error"));
  };

  const remover = () => {
    const url = `https://7gardoon-server.liara.run/api/deleteBanners/${bannerId}`;

    axios
      .post(url)
      .then((d) => console.log("removed"))
      .catch((e) => console.log("error"));
  };

  const [imageUrl, setImageUrl] = useState("");
  const [imageAlt, setImageAlt] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [imageSituation, setImageituation] = useState(true);
  const [fullData, setFullData] = useState(true);

  useEffect(() => {
    axios
      .get(`https://7gardoon-server.liara.run/api/banners/${bannerId}`)
      .then((d) => {
        setImageUrl(d.data.image);
        setImageAlt(d.data.imageAlt);
        setImageLink(d.data.link);
        setImageituation(d.data.situation);
        setFullData(d.data);
      })
      .catch((e) => console.log("error"));
  }, [bannerId]);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <h2 className="text-orange-500">جزئیات بنر</h2>
        <button
          onClick={() => remover()}
          className="bg-rose-600 text-white px-6 py-3 rounded-md text-xs transition-all duration-500 hover:bg-rose-700"
        >
          حذف
        </button>
      </div>
      <div className="flex justify-between items-center">
        <div className="bg-zinc-200 rounded px-3 py-1 text-sm">
          شناسه بنر : {fullData._id ? fullData._id : ""}
        </div>
        <div className="bg-zinc-200 rounded px-3 py-1 text-sm">
          تاریخ بروز رسانی بنر : {fullData.date ? fullData.date : ""}
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
            defaultValue={imageUrl}
            ref={imageUrlRef}
            id="text"
            className="inputLtr p-2 rounded-md w-full outline-none border-zinc-300 border-2 focus:border-orange-400"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div>آلت جدید عکس</div>
          <input
            required={true}
            defaultValue={imageAlt}
            ref={imageAltRef}
            id="text"
            className="inputLtr p-2 rounded-md w-full outline-none border-zinc-300 border-2 focus:border-orange-400"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div>لینک جدید عکس</div>
          <input
            required={true}
            defaultValue={imageLink}
            ref={imageLinkRef}
            id="text"
            className="inputLtr p-2 rounded-md w-full outline-none border-zinc-300 border-2 focus:border-orange-400"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div>روشن و خاموش</div>
          <select
            defaultValue={imageSituation}
            ref={imageSituationRef}
            className="p-2 rounded-md w-full outline-none border-zinc-300 border-2 focus:border-orange-400"
          >
            {imageSituation == true ? (
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
    </div>
  );
};

export default DetailsBannerForms;
