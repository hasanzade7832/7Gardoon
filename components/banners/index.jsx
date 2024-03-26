import Image from "next/image";

const Banners = () => {
  return (
    <section className="container mx-auto flex justify-between items-center gap-1">
      <Image
        className="rounded-xl alt"
        alt="alt"
        width={600}
        height={100}
        src={"/images/banners/1.jpg"}
      />
      <Image
        className="rounded-xl alt"
        alt="alt"
        width={600}
        height={100}
        src={"/images/banners/2.jpg"}
      />
    </section>
  );
};

export default Banners;
