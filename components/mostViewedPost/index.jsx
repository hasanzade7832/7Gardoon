"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";

const MostViewedPosts = () => {
  const [posts, setposts] = useState([-1]);

  useEffect(() => {
    axios
      .get("https://7gardoon-server.liara.run/api/mostViewPage")
      .then((d) => {
        setposts(d.data.posts);
        console.log("dataaaaaaaaaaaa", d.data);
      })
      .catch((e) => console.log("error"));
  }, []);

  return (
    <div className="flex flex-col gap-4 rounded-lg p-3 shadow-[0px_0px_8px_rgba(0,0,0,0.35)]">
      <h3 className="text-blue-400"> پرازدید ترین مقالات </h3>
      <ul className="flex flex-col gap-6">
        {posts[0] == -1 ? (
          <div className="flex justify-center items-center p-12">
            <Image alt="loading" width={40} height={40} src={"/loading.svg"} />
          </div>
        ) : posts.length < 1 ? (
          <div>مقاله ای یافت نشد</div>
        ) : (
          posts.length > 0 &&
          posts.map((po, i) => (
            <li>
              <Link
                className="p-2 justify-start items-center text-base sm:text-sm border-r-2 border-zinc-600"
                href={`/blog/${po.slug}`}
              >
                {po.title}
              </Link>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default MostViewedPosts;
