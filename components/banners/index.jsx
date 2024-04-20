import Image from "next/image";
import Link from "next/link";

const getData = async () => {
  const mainData = await fetch(
    "https://7gardoon-server1.liara.run/api/activeBanners",
    { cache: "no-store" }
  );
  return mainData.json();
};

const Banners = async () => {
  const dataBanner = await getData();

  return (
    <section className="container mx-auto flex justify-between items-center gap-12 flex-wrap">
      {dataBanner.map((banner, i) => (
        <Link href={banner.link} key={i}>
          <Image
            className="rounded-xl alt"
            alt={banner.imageAlt}
            title={banner.imageAlt}
            width={500}
            height={200}
            src={banner.image}
          />
        </Link>
      ))}
    </section>
  );
};

export default Banners;
