import React, { useRef, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "/images/products/book3.jpg",
  "/images/products/book3.png",
  "/images/products/redBooks.jpg",
];

const ImageSliderWithFixedThumbnails = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const slider = useRef(null);

  const mainSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    afterChange: (currentSlide) => {
      setSelectedIndex(currentSlide); 
    },
  };

  const handleThumbnailClick = (index) => {
    if (slider.current) {
      slider.current.slickGoTo(index);
    }
  };

  const handlePrev = () => {
    if (slider.current) {
      slider.current.slickPrev();
    }
  };

  const handleNext = () => {
    if (slider.current) {
      slider.current.slickNext();
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto mt-20 relative">
      {" "}
      <Slider {...mainSettings} ref={slider}>
        {images.map((src, index) => (
          <div key={index}>
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              width={700}
              height={700}
            />
          </div>
        ))}
      </Slider>
      <div className="absolute top-1/3 left-2 transform -translate-y-1/4 z-10">
        <button
          onClick={handlePrev}
          className="bg-white p-2 rounded-full shadow-lg"
        >
          <FaChevronLeft />
        </button>
      </div>
      <div className="absolute top-1/3 right-2 transform -translate-y-1/4 z-10">
        <button
          onClick={handleNext}
          className="bg-white p-2 rounded-full shadow-lg"
        >
          <FaChevronRight />
        </button>
      </div>
      <div className="flex justify-center mt-5">
        {images.map((src, index) => (
          <div
            key={index}
            style={{
              padding: "10px",
              border: selectedIndex === index ? "2px solid yellow" : "none", 
            }}
          >
            <Image
              src={src}
              alt={`Thumbnail ${index + 1}`}
              width={100}
              height={100}
              style={{ cursor: "pointer" }}
              onClick={() => handleThumbnailClick(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSliderWithFixedThumbnails;
