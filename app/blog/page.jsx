import BlogPageComponent from "@/components/blogPage";

const BlogPage = async () => {
  return (
    <div className="containe mx-auto">
      <section className="flex flex-col gap-8">
        <h1 className="text-center text-xl text-indigo-600">
          وبلاگ فروشگاه فایل مرن فا
        </h1>
        <BlogPageComponent />
      </section>
    </div>
  );
};

export default BlogPage;
