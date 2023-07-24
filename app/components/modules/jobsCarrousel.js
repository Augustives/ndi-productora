"use client";

import Image from "next/image";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function importAll(r) {
  return r.keys().map(r);
}

function JobsCarousel() {
  const slides = importAll(
    require.context("../../../public/clients", false, /\.(png|jpg|svg)$/),
  );

  const sliderThumbnails = slides.map((slide, index) => (
    <SwiperSlide
      key={index}
      className="flex items-center justify-center border-4 border-solid border-black text-center"
    >
      <Image
        className="h-full w-full rounded-xl p-1 "
        src={slide}
        alt={`Slide for video`}
        fill={true}
      />
    </SwiperSlide>
  ));

  return (
    <>
      <Swiper
        className="mb-12 h-[100%]"
        spaceBetween={5}
        navigation={true}
        autoplay={true}
        delay={5000}
        slidesPerView={2}
        breakpoints={{
          600: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
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
