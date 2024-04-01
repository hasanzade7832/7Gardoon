"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
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
  const titleRef = useRef();
  const slugRef = useRef();
  const imageRef = useRef();
  const shortDescRef = useRef();
  const longDescRef = useRef();
  const publishedRef = useRef();
  const [tag, setTag] = useState([]);
  const tagRef = useRef();

  const tagSuber = (e) => {
    if (e.key === "Enter") {
      let tagList = [...tag];
      const data = tagRef.current.value;
      if (data.length > 0) {
        tagList = [...tag, data];
        setTag(tagList);
      }
      tagRef.current.value = "";
    }
  };
  const tagDeleter = (indexToRemove) => {
    setTag(tag.filter((_, index) => index !== indexToRemove));
  };

  const [posts, setPosts] = useState([-1]);
  useEffect(() => {
    const postsUrl = `https://7gardoon-server.liara.run/api/postRel`;
    axios
      .get(postsUrl)
      .then((d) => {
        setPosts(d.data);
        console.log(d.data);
      })
      .catch((e) => console.log("error"));
  }, []);

  console.log("posts", posts);

  const [relPosts, setRelPosts] = useState([]);
  const postRelated = (v) => {
    let related = [...relPosts];
    if (v.target.checked) {
      related = [...related, v.target.value];
    } else {
      related.splice(relPosts.indexOf(v.target.value), 1);
    }
    setRelPosts(related);
  };

  console.log("relPosts", relPosts);

  const updater = (e) => {
    e.preventDefault();
    const formData = {
      title: titleRef.current.value,
      updatedAt: new Date().toLocaleDateString("fa-IR", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      slug: slugRef.current.value,
      image: imageRef.current.value,
      imageAlt: imageAltRef.current.value,
      shortDesc: shortDescRef.current.value,
      longDesc: longDescRef.current.value,
      tags: tag,
      published: publishedRef.current.value,
      relatedPosts: relPosts,
    };

    const url = `https://7gardoon-server.liara.run/api/updatePost/${bannerId}`;

    console.log("formData", formData);

    axios
      .post(url, formData)
      .then((d) => console.log("ok"))
      .catch((e) => console.log("error"));
  };

  const remover = () => {
    const url = `https://7gardoon-server.liara.run/api/deletePost/${bannerId}`;

    axios
      .post(url)
      .then((d) => console.log("removed", d))
      .catch((e) => console.log("error"));
  };

  const [fullData, setFullData] = useState(true);

  useEffect(() => {
    axios
      .get(`https://7gardoon-server.liara.run/api/postById/${bannerId}`)
      .then((d) => {
        setFullData(d.data);
        setTag(d.data.tags);
      })
      .catch((e) => console.log("error"));
  }, [bannerId]);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <h2 className="text-orange-500">جزئیات پست</h2>
        <button
          onClick={() => remover()}
          className="bg-rose-600 text-white px-6 py-3 rounded-md text-xs transition-all duration-500 hover:bg-rose-700"
        >
          حذف
        </button>
      </div>
      <div className="flex justify-between items-center">
        <div className="bg-zinc-200 rounded px-3 py-1 text-sm">
          شناسه پست : {fullData._id ? fullData._id : ""}
        </div>
        <div className="bg-zinc-200 rounded px-3 py-1 text-sm">
          تاریخ ایجاد پست : {fullData.createdAt ? fullData.createdAt : ""}
        </div>
        <div className="bg-zinc-200 rounded px-3 py-1 text-sm">
          تاریخ بروز رسانی پست : {fullData.updatedAT ? fullData.updatedAT : ""}
        </div>
        <div className="bg-zinc-200 rounded px-3 py-1 text-sm">
          بازدید : {fullData.pageView ? fullData.pageView : 0}
        </div>
      </div>
      <form
        onKeyDown={formKeysNotSubber}
        onSubmit={updater}
        className="flex flex-col gap-6"
      >
        <div className="flex flex-col gap-2">
          <div>عنوان جدید مقاله</div>
          <input
            defaultValue={fullData.title ? fullData.title : ""}
            required={true}
            ref={titleRef}
            id="text"
            className=" p-2 rounded-md w-full outline-none border-zinc-300 border-2 focus:border-orange-400"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div>اسلاگ جدید پست</div>
          <input
            defaultValue={fullData.slug ? fullData.slug : ""}
            required={true}
            ref={slugRef}
            id="text"
            className="inputLtr p-2 rounded-md w-full outline-none border-zinc-300 border-2 focus:border-orange-400"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div>آدرس جدید عکس</div>
          <input
            defaultValue={fullData.image ? fullData.image : ""}
            required={true}
            ref={imageRef}
            id="text"
            className="inputLtr p-2 rounded-md w-full outline-none border-zinc-300 border-2 focus:border-orange-400"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div>آلت جدید عکس</div>
          <input
            defaultValue={fullData.imageAlt ? fullData.imageAlt : ""}
            required={true}
            ref={imageAltRef}
            id="text"
            className="p-2 rounded-md w-full outline-none border-zinc-300 border-2 focus:border-orange-400"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div>توضیحات جدید کوتاه</div>
          <input
            defaultValue={fullData.shortDesc ? fullData.shortDesc : ""}
            required={true}
            ref={shortDescRef}
            id="text"
            className="p-2 rounded-md w-full outline-none border-zinc-300 border-2 focus:border-orange-400"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div>توضیحات کامل جدید</div>
          <textarea
            defaultValue={fullData.longDesc ? fullData.longDesc : ""}
            required={true}
            ref={longDescRef}
            id="text"
            className="p-2 rounded-md w-full outline-none border-zinc-300 border-2 focus:border-orange-400"
            rows="8"
          />
        </div>
        <div className="tags flex flex-col gap-2">
          <h>برچسب های جدید</h>
          <div className="tags w-full flex flex-col gap-4">
            <div className="input flex gap-2 items-center">
              <input
                defaultValue={fullData.tags ? fullData.tags : ""}
                type="text"
                onKeyDown={tagSuber}
                ref={tagRef}
                className="p-2 rounded-md w-full outline-none border-zinc-300 border-2 focus:border-orange-400"
                placeholder="تگ را وارد کنید و انتر بزنید..."
              />
            </div>
            <div className="tagResults flex gap-3 justify-start flex-wrap">
              {tag.map((t, index) => {
                return (
                  <div
                    key={t}
                    className="res flex gap-1 text-sm py-1 px-2 rounded-md border border-zinc-600"
                  >
                    <i
                      className="text-indigo-500 flex items-center"
                      onClick={() => {
                        tagDeleter(index);
                      }}
                    >
                      <span className="text-blue text-sm">{t}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </i>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div>
          {posts[0] == -1 ? (
            <Image alt="loading" width={40} height={40} src={"/loading.svg"} />
          ) : posts.length < 1 ? (
            <div className="p-3">مقاله ای یافت نشد</div>
          ) : (
            <div className="flex justify-start items-center flex-wrap gap-2">
              {posts.map((po, i) => (
                <div key={i} className="bg-zinc-100 px-2 py-1 rounded">
                  {po.title}
                  {fullData.relatedPosts &&
                  fullData.relatedPosts.includes(po._id) ? (
                    <input
                      value={po._id}
                      onChange={postRelated}
                      type="checkbox"
                      className="m-2"
                      defaultChecked
                    />
                  ) : (
                    <input
                      value={po._id}
                      onChange={postRelated}
                      type="checkbox"
                      className="m-2"
                    />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <div>منتشر شود ؟</div>
          <select
            ref={publishedRef}
            className="p-2 rounded-md w-full outline-none border-zinc-300 border-2 focus:border-orange-400"
          >
            {fullData.published && fullData.published == true ? (
              <>
                <option value={true}>انتشار</option>
                <option value={false}>پیش نویس</option>
              </>
            ) : fullData.published && fullData.published == false ? (
              <>
                <option value={false}>پیش نویس</option>
                <option value={true}>انتشار</option>
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
    </div>
  );
};

export default DetailsBannerForms;
