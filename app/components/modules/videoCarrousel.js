"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function VideoCarousel() {
  const slides = ["KietLGcfX60", "32en3uQbKEQ", "j63OOIu8qww", "ODCTr1MBM7w"];
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const playerRefs = useRef([]);

  const sliderVideos = slides.map((videoId, index) => (
    <SwiperSlide
      className="flex h-[65%] items-center justify-center text-center "
      key={index}
    >
      <iframe
        key={index}
        className="h-full w-full rounded-xl "
        title="YouTube Video"
        src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&version=3&playerapiid=ytplayer`}
        allow="autoplay; encrypted-media"
        allowFullScreen
        ref={(el) => (playerRefs.current[index] = el)}
      />
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
        layout="fill"
        objectFit="cover"
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
    <div className="w-7/12 py-5">
      <Swiper
        className="h-[60%] rounded-lg py-6"
        spaceBetween={10}
        navigation={true}
        autoplay={true}
        delay={5000}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
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
