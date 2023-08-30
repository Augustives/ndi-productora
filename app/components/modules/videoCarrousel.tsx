"use client";

import "swiper/css";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import YouTubeVideo from "@components/elements/youtubeVideo";

const VideoCarousel: React.FC = () => {
  const videosIds = [
    "KietLGcfX60",
    "32en3uQbKEQ",
    "XOYC3S2KZUA",
    "ODCTr1MBM7w",
  ];

  const videoSlides = videosIds.map((videoId, index) => (
    <SwiperSlide key={index}>
      <YouTubeVideo id={videoId} />
    </SwiperSlide>
  ));

  return (
    <div className="flex flex-row h-[65%] justify-center content-center border-b-8 border-t-8 border-dotted border-orange py-6 mx-10">
      <Swiper
        className="h-full w-full aspect-square"
        navigation={true}
        modules={[Navigation]}
        spaceBetween={50}
        breakpoints={{
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
      >
        {videoSlides}
      </Swiper>
    </div>
  );
};

export default VideoCarousel;
