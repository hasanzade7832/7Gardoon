const getData = async () => {
  const data = await fetch(
    "https://7gardoon-server1.liara.run/api/activeCategories",
    { cache: "no-store" }
  );
  return data.json();
};

import CatBox from "./box";

const GraphicsCategories = async () => {
  const dataCategories = await getData();
  return (
    <>
      {dataCategories.length < 1 ? (
        <div></div>
      ) : (
        <section className="flex container mx-auto justify-center sm:justify-center items-center flex-wrap gap-2 mt-10">
          {dataCategories.map((da, i) => (
            <CatBox key={i} data={da} />
          ))}
        </section>
      )}
    </>
  );
};

export default GraphicsCategories;

// import CatBox from "./box";

// const GraphicsCategories = () => {
//   return (
//     <section className="flex container mx-auto items-center flex-wrap gap-1 mt-20">
//       <CatBox />
//       <CatBox />
//       <CatBox />

//     </section>
//   );
// };

// export default GraphicsCategories;
