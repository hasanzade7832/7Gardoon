"use client";
import { useRef, useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const ProductsDetails = ({ bannerId }) => {
  // FOR SPLIT CATEGORIES
  const spliterForCategories = (value) => {
    return value.split("*");
  };

  const titleRef = useRef();
  const slugRef = useRef();
  const mainFileRef = useRef();
  const imageRef = useRef();
  const imageAltRef = useRef();
  const priceRef = useRef();
  const shortDescRef = useRef();
  const longDescRef = useRef();
  const typeOfProductRef = useRef();
  const publishedRef = useRef();

  // TAG MANAGING
  const tagRef = useRef();
  const [tag, setTag] = useState([]);
  const tagSuber = (e) => {
    if (e.key === "Enter") {
      let tagList = [...tag];
      const data = tagRef.current.value;
      if (data.length > 0) {
        tagList = [...tag, data.replace(/\s+/g, "_").toLowerCase()];
        setTag(tagList);
      }
      tagRef.current.value = "";
    }
  };
  const tagDeleter = (indexToRemove) => {
    setTag(tag.filter((_, index) => index !== indexToRemove));
  };

  // FEATURE MANAGING
  const featuresRef = useRef();
  const [feature, setfeatue] = useState([]);
  const featureSuber = (e) => {
    if (e.key === "Enter") {
      let featuresList = [...feature];
      const data = featuresRef.current.value;
      if (data.length > 0) {
        featuresList = [...feature, data];
        setfeatue(featuresList);
      }
      featuresRef.current.value = "";
    }
  };
  const featureDeleter = (indexToRemove) => {
    setfeatue(feature.filter((_, index) => index !== indexToRemove));
  };

  // RELATED PRODUCTS
  const [products, setproducts] = useState([-1]);
  useEffect(() => {
    const productsUrl = "https://7gardoon-servers.liara.run/api/productRel";
    axios
      .get(productsUrl)
      .then((d) => {
        setproducts(d.data);
      })
      .catch((e) => console.log("error in loading posts"));
  }, []);
  const [relProducts, setrelProducts] = useState([]);
  const productsRelatedMan = (v) => {
    let related = [...relProducts];
    if (v.target.checked) {
      related = [...related, v.target.value];
    } else {
      related.splice(relProducts.indexOf(v.target.value), 1);
    }
    setrelProducts(related);
  };

  // CATEGORIES
  const [categories, setcategories] = useState([-1]);
  useEffect(() => {
    const categoriesUrl = "https://7gardoon-servers.liara.run/api/categoryRel";
    axios
      .get(categoriesUrl)
      .then((d) => {
        setcategories(d.data);
      })
      .catch((e) => console.log("error in loading posts"));
  }, []);
  const [relCategories, setrelCategories] = useState([]);

  const productsCategoriesMan = (v) => {
    let related = [...relCategories];
    if (v.target.checked) {
      related = [...related, v.target.value];
    } else {
      related.splice(relCategories.indexOf(v.target.value), 1);
    }
    setrelCategories(related);
  };

  // FORM SHOULD BE NOT SEND WITH ENTER KEY
  const formKeyNotSuber = (event) => {
    if (event.key == "Enter") {
      event.preventDefault();
    }
  };

  const updater = (e) => {
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
      image: imageRef.current.value,
      imageAlt: imageAltRef.current.value,
      price: priceRef.current.value,
      shortDesc: shortDescRef.current.value,
      longDesc: longDescRef.current.value,
      tags: tag,
      features: feature,
      typeOfProduct: typeOfProductRef.current.value,
      pageView: 0,
      published: publishedRef.current.value,
      comments: [],
      relatedProducts: relProducts,
      categories: relCategories,
    };

    const url = `https://7gardoon-servers.liara.run/api/updateProduct/${bannerId}`;
    axios
      .post(url, formData)
      .then((d) => {
        formData.published == "true"
          ? toast.success("محصول با موفقیت به روز رسانی منتشر شد.", {
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            })
          : toast.success(
              "محصول با موفقیت به روزرسانی و به صورت پیشنویس ذخیره شد.",
              {
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              }
            );
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
    const url = `https://7gardoon-servers.liara.run/api/deleteProduct/${bannerId}`;
    axios
      .post(url)
      .then((d) => {
        toast.success("محصول با موفقیت حذف شد.", {
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
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

  // LOADING DEFAULT VALUES
  const [fullData, setfullData] = useState([-1]);
  useEffect(() => {
    axios
      .get(`https://7gardoon-servers.liara.run/api/productById/${bannerId}`)
      .then((d) => {
        setfullData(d.data);
        setTag(d.data.tags);
        setfeatue(d.data.features);
        setrelProducts(d.data.relatedProducts);
        setrelCategories(d.data.categories);
      })
      .catch((e) =>
        toast.error("خطا در لود اطلاعات", {
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      );
  }, [bannerId]);

  return (
    <div className=" flex flex-col gap-8">
      {fullData[0] == -1 ? (
        <div className=" flex justify-center items-center p-12">
          <Image alt="loading" width={120} height={120} src={"/loading.svg"} />
        </div>
      ) : (
        <div className=" flex flex-col gap-8">
          <div className=" flex justify-between items-center">
            <h2 className=" text-orange-500">جزئیات محصول</h2>
            <div className=" flex justify-end items-center gap-4">
              <Link
                href={`/shop/${fullData.slug}`}
                className=" bg-blue-600 text-white px-4 py-1 rounded-md text-sm transition-all duration-500 hover:bg-blue-700"
              >
                لینک محصول
              </Link>
              <button
                onClick={() => remover()}
                className=" bg-rose-600 text-white px-4 py-1 rounded-md text-xs transition-all duration-500 hover:bg-rose-700"
              >
                حذف
              </button>
            </div>
          </div>
          <div className=" flex justify-between items-center">
            <div className=" bg-zinc-100 rounded px-3 py-1 text-sm">
              {fullData._id ? fullData._id : ""}
            </div>
            <div className=" bg-zinc-100 rounded px-3 py-1 text-sm">
              تاریخ ایجاد{fullData.createdAt ? fullData.createdAt : ""}
            </div>
            <div className=" bg-zinc-100 rounded px-3 py-1 text-sm">
              به روز رسانی{fullData.updatedAt ? fullData.updatedAt : ""}
            </div>
            <div className=" bg-zinc-100 rounded px-3 py-1 text-sm">
              {fullData.pageView ? fullData.pageView : 0} بازدید
            </div>
            <div className=" bg-zinc-100 rounded px-3 py-1 text-sm">
              {fullData.buyNumber ? fullData.buyNumber : 0} فروش
            </div>
          </div>
          <form
            onKeyDown={formKeyNotSuber}
            onSubmit={updater}
            className=" flex flex-col gap-6"
          >
            <div className=" flex flex-col gap-2">
              <div>عنوان جدید محصول</div>
              <input
                defaultValue={fullData.title ? fullData.title : ""}
                required={true}
                ref={titleRef}
                type="text"
                className=" p-2 rounded-md w-full outline-none border-2 border-zinc-300 focus:border-orange-400"
              />
            </div>
            <div className=" flex flex-col gap-2">
              <div>اسلاگ جدید محصول</div>
              <input
                defaultValue={fullData.slug ? fullData.slug : ""}
                required={true}
                ref={slugRef}
                type="text"
                className=" inputLtr p-2 rounded-md w-full outline-none border-2 border-zinc-300 focus:border-orange-400"
              />
            </div>
            <div className=" flex flex-col gap-2">
              <div>URL فایل اصلی جدید محصول</div>
              <input
                defaultValue={fullData.mainFile ? fullData.mainFile : ""}
                required={true}
                ref={mainFileRef}
                type="text"
                className=" inputLtr p-2 rounded-md w-full outline-none border-2 border-zinc-300 focus:border-orange-400"
              />
            </div>
            <div className=" flex flex-col gap-2">
              <div>آدرس جدید عکس</div>
              <input
                defaultValue={fullData.image ? fullData.image : ""}
                required={true}
                ref={imageRef}
                type="text"
                className=" inputLtr p-2 rounded-md w-full outline-none border-2 border-zinc-300 focus:border-orange-400"
              />
            </div>
            <div className=" flex flex-col gap-2">
              <div>آلت جدید عکس</div>
              <input
                defaultValue={fullData.imageAlt ? fullData.imageAlt : ""}
                required={true}
                ref={imageAltRef}
                type="text"
                className=" p-2 rounded-md w-full outline-none border-2 border-zinc-300 focus:border-orange-400"
              />
            </div>
            <div className=" flex flex-col gap-2">
              <div>قیمت جدید محصول ( تومان)</div>
              <input
                defaultValue={fullData.price ? fullData.price : ""}
                required={true}
                ref={priceRef}
                type="number"
                className=" p-2 rounded-md w-full outline-none border-2 border-zinc-300 focus:border-orange-400"
              />
            </div>
            <div className=" flex flex-col gap-2">
              <div>توضیحات کوتاه جدید</div>
              <input
                defaultValue={fullData.shortDesc ? fullData.shortDesc : ""}
                required={true}
                ref={shortDescRef}
                type="text"
                className=" p-2 rounded-md w-full outline-none border-2 border-zinc-300 focus:border-orange-400"
              />
            </div>
            <div className=" flex flex-col gap-2">
              <div>توضیحات کامل جدید</div>
              <textarea
                defaultValue={fullData.longDesc ? fullData.longDesc : ""}
                required={true}
                ref={longDescRef}
                type="text"
                className=" p-2 rounded-md w-full outline-none border-2 border-zinc-300 focus:border-orange-400"
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
                    className=" p-2 rounded-md w-full outline-none border-2 border-zinc-300 focus:border-orange-400"
                    placeholder="تگ را وارد کنید و انتر بزنید..."
                  />
                </div>
                <div className="tagResults flex gap-3 justify-start flex-wrap">
                  {tag.map((t, index) => {
                    return (
                      <div
                        key={t}
                        className="res flex gap-1 text-sm py-1 px-2 rounded-md border-2 border-zinc-300"
                      >
                        <i
                          className="text-indigo-500 flex items-center"
                          onClick={() => {
                            tagDeleter(index);
                          }}
                        >
                          <span className="text-xs">{t}</span>
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
              <h3>ویژگی های جدید</h3>
              <div className="tags w-full flex flex-col gap-4">
                <div className="input flex gap-2 items-center">
                  <input
                    type="text"
                    onKeyDown={featureSuber}
                    ref={featuresRef}
                    className=" p-2 rounded-md w-full outline-none border-2 border-zinc-300 focus:border-orange-400"
                    placeholder=" نام ویژگی : توضیحات ویژگی"
                  />
                </div>
                <div className="tagResults flex gap-3 justify-start flex-wrap">
                  {feature.map((t, index) => {
                    return (
                      <div
                        key={t}
                        className="res flex gap-1 text-sm py-1 px-2 rounded-md border-2 border-zinc-300"
                      >
                        <i
                          className="text-indigo-500 flex items-center cursor-pointer"
                          onClick={() => {
                            featureDeleter(index);
                          }}
                        >
                          <span className="text-xs">{t}</span>
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
            <div className=" flex flex-col gap-2">
              <div>نوع محصول</div>
              <select
                ref={typeOfProductRef}
                className=" p-2 rounded-md w-full outline-none border-2 border-zinc-300 focus:border-orange-400"
              >
                {fullData.typeOfProduct && fullData.typeOfProduct == "book" ? (
                  <>
                    <option value={"book"}>کتاب</option>
                    <option value={"app"}>اپلیکیشن</option>
                    <option value={"gr"}>فایل گرافیکی</option>
                  </>
                ) : fullData.typeOfProduct &&
                  fullData.typeOfProduct == "app" ? (
                  <>
                    <option value={"app"}>اپلیکیشن</option>
                    <option value={"book"}>کتاب</option>
                    <option value={"gr"}>فایل گرافیکی</option>
                  </>
                ) : (
                  <>
                    <option value={"gr"}>فایل گرافیکی</option>
                    <option value={"app"}>اپلیکیشن</option>
                    <option value={"book"}>کتاب</option>
                  </>
                )}
              </select>
            </div>

            <div className="tags flex flex-col gap-2">
              <h3>دسته های محصول</h3>
              {categories[0] == -1 ? (
                <div className=" flex justify-center items-center p-12">
                  <Image
                    alt="loading"
                    width={40}
                    height={40}
                    src={"/loading.svg"}
                  />
                </div>
              ) : categories.length < 1 ? (
                <div className=" p-3">محصولی ای یافت نشد</div>
              ) : (
                <div className=" flex justify-start items-center flex-wrap gap-2">
                  {categories.map((po, i) => (
                    <div key={i} className=" px-2 py-1 bg-zinc-100 rounded">
                      <label htmlFor={po._id}>{po.title}</label>{" "}
                      {fullData.categories &&
                      fullData.categories.includes(po._id) ? (
                        <input
                          name={po._id}
                          id={po._id}
                          value={po._id}
                          onChange={productsCategoriesMan}
                          type="checkbox"
                          defaultChecked
                        />
                      ) : (
                        <input
                          name={po._id}
                          id={po._id}
                          value={po._id}
                          onChange={productsCategoriesMan}
                          type="checkbox"
                        />
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="tags flex flex-col gap-2">
              <h3>محصولات مرتبط</h3>
              {products[0] == -1 ? (
                <div className=" flex justify-center items-center p-12">
                  <Image
                    alt="loading"
                    width={40}
                    height={40}
                    src={"/loading.svg"}
                  />
                </div>
              ) : products.length < 1 ? (
                <div className=" p-3">محصولی ای یافت نشد</div>
              ) : (
                <div className=" flex justify-start items-center flex-wrap gap-2">
                  {products.map((po, i) => (
                    <div key={i} className=" px-2 py-1 bg-zinc-100 rounded">
                      <label htmlFor={po._id}>{po.title}</label>{" "}
                      {fullData.relatedProducts &&
                      fullData.relatedProducts.includes(po._id) ? (
                        <input
                          name={po._id}
                          id={po._id}
                          value={po._id}
                          onChange={productsRelatedMan}
                          type="checkbox"
                          defaultChecked
                        />
                      ) : (
                        <input
                          name={po._id}
                          id={po._id}
                          value={po._id}
                          onChange={productsRelatedMan}
                          type="checkbox"
                        />
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className=" flex flex-col gap-2">
              <div>منتشر شود</div>
              <select
                ref={publishedRef}
                className=" p-2 rounded-md w-full outline-none border-2 border-zinc-300 focus:border-orange-400"
              >
                {fullData.published && fullData.published == true ? (
                  <>
                    <option value={true}>انتشار</option>
                    <option value={false}>پیشنویس</option>
                  </>
                ) : (
                  <>
                    <option value={false}>پیشنویس</option>
                    <option value={true}>انتشار</option>
                  </>
                )}
              </select>
            </div>
            <button
              type="submit"
              className=" p-2 bg-indigo-600 text-white w-full rounded-md transition-all duration-500 hover:bg-orange-500"
            >
              به روز رسانی
            </button>
          </form>
        </div>
      )}

      <ToastContainer
        bodyClassName={() => "font-[shabnam] text-sm flex items-center"}
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

export default ProductsDetails;
