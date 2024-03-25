import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
SwiperCore.use([Autoplay]);

import Image from "next/image";

const SliderFour = () => {
  return (
    <section className="container mx-auto mt-7">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination
        autoplay={{ delay: 3000 }}
        scrollbar={{ draggable: true }}
        //   breakpoints={{
        //     300: {
        //       slidesPerView: 1,
        //     },
        //     600: {
        //       slidesPerView: 2,
        //     },
        //     1024: {
        //       slidesPerView: 3,
        //     },
        //     1280: {
        //       slidesPerView: 4,
        //     },
        //   }}
      >
        <SwiperSlide>
          <div className="flex justify-center items-center">
            <Image
              src={"/images/slider/slide1.jpg"}
              // objectFit="cover"
              className="rounded-lg"
              width={1320}
              height={310}
              alt="alt"
              // layout="fixed"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center">
            <Image
              src={"/images/slider/slide2.jpg"}
              // objectFit="cover"
              className="rounded-lg"
              width={1320}
              height={310}
              alt="alt"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center">
            <Image
              src={"/images/slider/slide3.jpg"}
              // objectFit="cover"
              className="rounded-lg"
              width={1320}
              height={310}
              alt="alt"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default SliderFour;
