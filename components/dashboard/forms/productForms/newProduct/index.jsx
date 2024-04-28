"use-client";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const NewProductsForms = () => {
  const titleRef = useRef();
  const slugRef = useRef();
  const mainFileRef = useRef();
  const priceRef = useRef();
  const typeOfProductRef = useRef();
  const imageRef = useRef();
  const shortDescRef = useRef();
  const longDescRef = useRef();
  const imageAltRef = useRef();
  const publishedRef = useRef();

  const [products, setProducts] = useState([-1]);
  useEffect(() => {
    const productsUrl = `https://7gardoon-server3.liara.run/api/productRel`;
    axios
      .get(productsUrl)
      .then((d) => {
        setProducts(d.data);
        console.log(d.data);
      })
      .catch((e) => console.log("error"));
  }, []);

  const [relProducts, setRelProducts] = useState([]);
  const productRelated = (v) => {
    let related = [...relProducts];
    if (v.target.checked) {
      related = [...related, v.target.value];
    } else {
      related.splice(relProducts.indexOf(v.target.value), 1);
    }
    setRelProducts(related);
  };


  const [Categories, setCategories] = useState([-1]);
  useEffect(() => {
    const categoriesUrl = `https://7gardoon-server3.liara.run/api/categoryRel`;
    axios
      .get(categoriesUrl)
      .then((d) => {
        setCategories(d.data);
      })
      .catch((e) => console.log("error"));
  }, []);


  const [relCategories, setRelCategories] = useState([]);
  const categoriesRelated = (v) => {
    let related = [...relCategories];
    if (v.target.checked) {
      related = [...related, v.target.value];
    } else {
      related.splice(relCategories.indexOf(v.target.value), 1);
    }
    setRelCategories(related);
  };

  const tagRef = useRef();
  const [tag, setTags] = useState([]);
  const tagSuber = (e) => {
    if (e.key === "Enter") {
      let tagList = [...tag];
      const data = tagRef.current.value;
      if (data.length > 0) {
        tagList = [...tag, data];
        setTags(tagList);
      }
      tagRef.current.value = "";
    }
  };
  const tagDeleter = (indexToRemove) => {
    setTags(tag.filter((_, index) => index !== indexToRemove));
  };

  const featuresRef = useRef();
  const [features, setFeatures] = useState([]);
  const featuresSuber = (e) => {
    if (e.key === "Enter") {
      let featuresList = [...features];
      const data = featuresRef.current.value;
      if (data.length > 0) {
        featuresList = [...features, data];
        setFeatures(featuresList);
      }
      featuresRef.current.value = "";
    }
  };
  const featuresDeleter = (indexToRemove) => {
    setFeatures(features.filter((_, index) => index !== indexToRemove));
  };

  const formKeysNotSubber = (event) => {
    if (event.key == "Enter") {
      event.preventDefault();
    }
  };


  const submitter = (e) => {
    e.preventDefault();
    const formData = {
      title: titleRef.current.value,
      createdAt: new Date().toLocaleDateString("fa-IR", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      updatedAt: new Date().toLocaleDateString("fa-IR", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      slug: slugRef.current.value,
      mainFile: mainFileRef.current.value,
      price: priceRef.current.value,
      image: imageRef.current.value,
      imageAlt: imageAltRef.current.value,
      shortDesc: shortDescRef.current.value,
      longDesc: longDescRef.current.value,
      tags: tag,
      features: features,
      typeOfProduct:typeOfProductRef.current.value,
      pageView: 0,
      published: publishedRef.current.value,
      comments: [],
      categories:relCategories,
      relatedProducts: relProducts,
    };

    const url = `https://7gardoon-server3.liara.run/api/newProduct`;

    // setRelProducts([]);
    // const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    // checkboxes.forEach((checkbox) => {
    //   checkbox.checked = false;
    // });

    console.log("fffff",formData)

    axios
      .post(url, formData)
      .then((d) => {
        if (formData.published == "true") {
          toast.success("محصول با موفقیت منتشر شد", {
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

          setTimeout(()=>{
            window.location.href = "/dashboard";
          },500)
        } else {
          toast.success("محصول بصورت پیش نویس ذخیره", {
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

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

  

  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-orange-500">محصول جدید</h2>
      <form
        onSubmit={submitter}
        className="flex flex-col gap-6"
        onKeyDown={formKeysNotSubber}
      >
        <div className="flex flex-col gap-2">
          <div>عنوان محصول</div>
          <input
            required={true}
            ref={titleRef}
            type="text"
            className=" p-2 rounded-md w-full outline-none border-zinc-300 border-2 focus:border-orange-400"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div>اسلاگ محصول</div>
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
            ref={imageRef}
            type="text"
            className="inputLtr p-2 rounded-md w-full outline-none border-zinc-300 border-2 focus:border-orange-400"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div>آدرس فایل اصلی محصول</div>
          <input
            required={true}
            ref={mainFileRef}
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
          <div>قیمت محصول (تومان)</div>
          <input
            required={true}
            ref={priceRef}
            type="number"
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
            rows="8"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div>توضیحات کامل</div>
          <textarea
            required={true}
            ref={longDescRef}
            type="text"
            className="p-2 rounded-md w-full outline-none border-zinc-300 border-2 focus:border-orange-400"
            rows="8"
          />
        </div>
        <div className="tags flex flex-col gap-2">
          <h3>برچسب ها</h3>
          <div className="tags w-full flex flex-col gap-4">
            <div className="input flex gap-2 items-center">
              <input
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
                      className="text-indigo-500 flex items-center cursor-pointer"
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
        <div className="tags flex flex-col gap-2">
          <h3>ویژگی ها</h3>
          <div className="tags w-full flex flex-col gap-4">
            <div className="input flex gap-2 items-center">
              <input
                type="text"
                onKeyDown={featuresSuber}
                ref={featuresRef}
                className="p-2 rounded-md w-full outline-none border-zinc-300 border-2 focus:border-orange-400"
                placeholder="ویژگی را وارد کنید و انتر بزنید..."
              />
            </div>
            <div className="tagResults flex gap-3 justify-start flex-wrap">
              {features.map((t, index) => {
                return (
                  <div
                    key={t}
                    className="res flex gap-1 text-sm py-1 px-2 rounded-md border border-zinc-600"
                  >
                    <i
                      className="text-indigo-500 flex items-center cursor-pointer"
                      onClick={() => {
                        featuresDeleter(index);
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
        <div className="flex flex-col gap-2">
          <div>نوع محصول</div>
          <select
            ref={typeOfProductRef}
            className="p-2 rounded-md w-full outline-none border-zinc-300 border-2 focus:border-orange-400"
          >
            <option value={"book"}>کتاب</option>
            <option value={"app"}>فایل گرافیکی</option>
            <option value={"graphic"}>اپلیکیشن</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <h>دسته بندی ها</h>
          {Categories[0] == -1 ? (
            <Image alt="loading" width={40} height={40} src={"/loading.svg"} />
          ) : Categories.length < 1 ? (
            <div className="p-3">دسته ای یافت نشد</div>
          ) : (
            <div className="flex justify-start items-center flex-wrap gap-2">
              {Categories.map((po, i) => (
                <div key={i} className="bg-zinc-100 px-2 py-1 rounded">
                  {po.title}
                  <input
                    value={po._id}
                    onChange={categoriesRelated}
                    type="checkbox"
                    className="m-2"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <h>محصولات مرتبط</h>
          {products[0] == -1 ? (
            <Image alt="loading" width={40} height={40} src={"/loading.svg"} />
          ) : products.length < 1 ? (
            <div className="p-3">محصولی یافت نشد</div>
          ) : (
            <div className="flex justify-start items-center flex-wrap gap-2">
              {products.map((po, i) => (
                <div key={i} className="bg-zinc-100 px-2 py-1 rounded">
                  {po.title}
                  <input
                    value={po._id}
                    onChange={productRelated}
                    type="checkbox"
                    className="m-2"
                  />
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
            <option value={true}>انتشار</option>
            <option value={false}>پیش نویس</option>
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

export default NewProductsForms;
