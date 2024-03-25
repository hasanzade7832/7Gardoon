import Link from "next/link";

const BreadCrumbs = ({ titleBlog, secondTitle, secondLink }) => {
  return (
    <div className="flex justify-start items-center gap-1 mt-20">
      <Link
        href={"/"}
        className="text-blue-400 transition-all duration-200 hover:text-blue-500"
      >
        خانه
      </Link>
      <span>/</span>
      <Link
        href={secondLink}
        className="text-blue-400 transition-all duration-200 hover:text-blue-500"
      >
        {secondTitle}
      </Link>
      <span>/</span>
      <div>{titleBlog}</div>
    </div>
  );
};

export default BreadCrumbs;
