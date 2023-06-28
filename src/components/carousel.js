import { Navigation, Thumbs, FreeMode, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/thumbs";
import { useState } from "react";

function Carousel({ slides }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const sliderVideos = slides.map((videoId, index) => (
    <SwiperSlide
      className="flex text-center justify-center items-center"
      key={index}
    >
      <iframe
        key={index}
        className="w-full h-[36rem] rounded-xl"
        title="YouTube Video"
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    </SwiperSlide>
  ));

  const sliderThumbnails = slides.map((videoId, index) => (
    <SwiperSlide
      className="flex text-center justify-center items-center"
      key={index}
    >
      <img
        className="p-0.5 rounded-xl"
        src={`https://i3.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
        alt={`Slide for video`}
      />
    </SwiperSlide>
  ));

  return (
    <div className="flex flex-col text-center justify-center items-center px-10">
      <Swiper
        className="w-1/2 h-4/5 m-5 mt-16"
        spaceBetween={10}
        navigation={true}
        autoplay={true}
        delay={5000}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
      >
        {sliderVideos}
      </Swiper>

      <Swiper
        className="w-full h-1/5 m-5"
        spaceBetween={10}
        slidesPerView={4}
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

export default Carousel;
