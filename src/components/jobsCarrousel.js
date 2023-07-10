import { useState, useRef } from "react";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/thumbs";

function JobsCarousel() {
  const slides = [
    "https://placehold.co/600x400",
    "https://placehold.co/600x400",
    "https://placehold.co/600x400",
    "https://placehold.co/600x400",
  ];

  const sliderThumbnails = slides.map((slide, index) => (
    <SwiperSlide
      className="flex text-center justify-center items-center"
      key={index}
    >
      <img className="p-1 rounded-xl" src={slide} alt={`Slide for video`} />
    </SwiperSlide>
  ));

  return (
    <>
      <p className="font-custom font-bold text-[30px] md:text-[60px] text-center">
        Worked with:
      </p>
      <Swiper
        className="w-[70%] mb-12"
        spaceBetween={5}
        navigation={true}
        autoplay={true}
        delay={5000}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
      >
        {sliderThumbnails}
      </Swiper>
    </>
  );
}

export default JobsCarousel;
