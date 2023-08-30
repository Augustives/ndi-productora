"use client";

import * as images from "public/clients";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const JobsCarousel: React.FC = () => {
  const jobSlides = Object.values(images).map((slide, index) => (
    <SwiperSlide
      key={index}
      className="flex items-center justify-center border-4 border-solid border-black text-center"
    >
      <Image
        className="h-full w-full rounded-xl p-1 aspect-square"
        src={slide}
        alt={`Slide for video`}
        fill={true}
      />
    </SwiperSlide>
  ));

  return (
    <div className="flex flex-row h-full justify-center items-center content-center">
      <Swiper
        className="h-full w-full aspect-square"
        navigation={true}
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1250: {
            slidesPerView: 3,
          },
          1500: {
            slidesPerView: 4,
          },
        }}
      >
        {jobSlides}
      </Swiper>
    </div>
  );
};

export default JobsCarousel;
