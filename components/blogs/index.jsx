import BlogBox from "./blogBox";
const Blogs = () => {
  return (
    <section className="flex flex-col gap-4 container mx-auto">
      <header className="flex items-center mt-20">
        <h2 className="text-2xl border-r-zinc-700 border-r-2 pr-1 text-1">
          آخرین مقالات
        </h2>
      </header>
      <div className="flex items-center flex-wrap gap-1">
        <BlogBox />
        <BlogBox />
        <BlogBox />
        <BlogBox />
        <BlogBox />
      </div>
    </section>
  );
};

export default Blogs;
