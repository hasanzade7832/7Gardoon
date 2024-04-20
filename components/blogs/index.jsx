import BlogBox from "./blogBox";

const getData = async () => {
  const maindata = await fetch("https://7gardoon-server1.liara.run/api/activePost");
  return maindata.json();
};

const Blogs = async () => {
  const dataBlog = await getData();
  console.log("bbb", dataBlog);
  return (
    <section className="flex flex-col gap-4 container mx-auto">
      <header className="flex items-center mt-20">
        <h2 className="text-2xl border-r-zinc-700 border-r-2 pr-1 text-1">
          آخرین پست ها
        </h2>
      </header>
      <div className="flex items-center flex-wrap gap-1">
        {dataBlog.map((bl, i) => (
          <BlogBox key={i} data={bl} />
        ))}
      </div>
    </section>
  );
};

export default Blogs;
