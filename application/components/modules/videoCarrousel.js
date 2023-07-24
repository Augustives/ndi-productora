"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { LuYoutube } from "react-icons/lu";

import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function VideoCarousel() {
  const slides = ["KietLGcfX60", "32en3uQbKEQ", "j63OOIu8qww", "ODCTr1MBM7w"];
  const [activeSlide, setActiveSlide] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const playerRefs = useRef([]);

  const sliderVideos = slides.map((videoId, index) => (
    <SwiperSlide
      className="relative flex items-center justify-center text-center"
      key={index}
    >
      <Image
        key={index}
        className={`h-full w-full rounded-xl ${
          activeSlide === index ? "hidden" : "block"
        }`}
        src={`https://i3.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
        alt={`Slide for video`}
        fill={true}
        ref={(el) => (playerRefs.current[index] = el)}
      />

      {activeSlide !== index && (
        <div
          onClick={() => setActiveSlide(index)}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform cursor-pointer text-white"
        >
          <LuYoutube className="border-solid-white h-20 w-20 rounded-full border-4 bg-darkBlue p-4" />
        </div>
      )}

      {activeSlide === index && (
        <iframe
          key={index}
          className="h-full w-full rounded-xl"
          title="YouTube Video"
          src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&version=3&playerapiid=ytplayer`}
          allow="autoplay; encrypted-media"
          allowFullScreen
          ref={(el) => (playerRefs.current[index] = el)}
        />
      )}
    </SwiperSlide>
  ));

  const sliderThumbnails = slides.map((videoId, index) => (
    <SwiperSlide
      className="flex items-center justify-center text-center"
      key={index}
    >
      <Image
        className="h-full w-full rounded-xl p-6"
        src={`https://i3.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
        alt={`Slide for video`}
        fill={true}
      />
    </SwiperSlide>
  ));

  const handleSlideChange = (swiper) => {
    const previousSlideIndex = swiper.previousIndex;
    const previousIframe = playerRefs.current[previousSlideIndex];

    if (
      previousIframe &&
      previousIframe.contentWindow &&
      previousIframe.contentWindow.postMessage
    ) {
      previousIframe.contentWindow.postMessage(
        '{"event":"command","func":"pauseVideo","args":""}',
        "*",
      );
    }
  };

  return (
    <div className="w-full py-5 md:w-7/12">
      <Swiper
        className="h-[60%] rounded-lg py-6"
        spaceBetween={10}
        navigation={true}
        autoplay={true}
        delay={8000}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Navigation, Thumbs, FreeMode, Autoplay]}
        onSlideChange={handleSlideChange}
      >
        {sliderVideos}
      </Swiper>

      <Swiper
        className="my-6 h-[25%] border-b-8 border-t-8 border-dotted border-orange bg-darkBlue"
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={{
          600: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        freeMode={true}
        watchSlidesProgress={true}
        onSwiper={setThumbsSwiper}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
      >
        {sliderThumbnails}
      </Swiper>
    </div>
  );
}

export default VideoCarousel;
