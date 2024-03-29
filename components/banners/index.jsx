import Image from "next/image";
import Link from "next/link";

const getData = async () => {
  const data = await fetch(
    "https://7gardoon-server.liara.run/api/activeBanners"
  );
  return data.json();
};

const Banners = async () => {
  const data = await getData();

  console.log("data", data);

  return (
    <section className="container mx-auto flex justify-between items-center gap-1 flex-wrap">
      {data.map((banner, i) => (
        <Link className="my-4" href={banner.link} key={i}>
          <Image
            className="rounded-xl alt"
            alt={banner.imageAlt}
            title={banner.imageAlt}
            width={600}
            height={100}
            src={banner.image}
          />
        </Link>
      ))}
    </section>
  );
};

export default Banners;
