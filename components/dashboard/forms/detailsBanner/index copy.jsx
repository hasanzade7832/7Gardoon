"use client";
import { useRef, useEffect, useState } from "react";
import axios from "axios";

const DetailsBannerForms = ({ bannerId }) => {
  const imageUrlRef = useRef();
  const imageAltRef = useRef();
  const imageLinkRef = useRef();
  const imageSituationRef = useRef();

  const submitter = (e) => {
    e.preventDefault();
    const formData = {
      goalId: bannerId,
      image: imageUrlRef.current.value,
      imageAlt: imageAltRef.current.value,
      situation: imageSituationRef.current.value,
      link: imageLinkRef.current.value,
    };
    const url = `https://7gardoon-server.liara.run/api/updateBanners`;

    axios
      .post(url, formData)
      .then((d) => console.log("ok"))
      .catch((e) => console.log("error"));
  };

  const [imageUrl, setImageUrl] = useState("");
  const [imageAlt, setImageAlt] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [imageSituation, setImageituation] = useState(true);

  useEffect(() => {
    axios
      .get(`https://7gardoon-server.liara.run/api/banners/${bannerId}`)
      .then((d) => {
        setImageUrl(d.data.image);
        setImageAlt(d.data.imageAlt);
        setImageLink(d.data.link);
        setImageituation(d.data.situation);
      })
      .catch((e) => console.log("error"));
  }, [bannerId]);

  console.log("imageUrl", imageUrl);
  console.log("imageAlt", imageAlt);
  console.log("imageLink", imageLink);
  console.log("imageSituation", imageSituation);

  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-orange-500">جزئیات بنر</h2>
      <form onSubmit={submitter} className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <div>آدرس جدید عکس</div>
          <input
            ref={imageUrlRef}
            id="text"
            className="p-2 rounded-md w-full outline-none border-zinc-300 border-2 focus:border-orange-400"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div>آلت جدید عکس</div>
          <input
            ref={imageAltRef}
            id="text"
            className="p-2 rounded-md w-full outline-none border-zinc-300 border-2 focus:border-orange-400"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div>لینک جدید عکس</div>
          <input
            ref={imageLinkRef}
            id="text"
            className="p-2 rounded-md w-full outline-none border-zinc-300 border-2 focus:border-orange-400"
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
          به روز رسانی
        </button>
      </form>
    </div>
  );
};

export default DetailsBannerForms;