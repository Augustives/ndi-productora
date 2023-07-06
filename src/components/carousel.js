import { useState } from "react";

import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/thumbs";

function Carousel({ slides }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const sliderVideos = slides.map((videoId, index) => (
    <SwiperSlide
      className="flex text-center justify-center items-center"
      key={index}
    >
      <iframe
        key={index}
        className="w-full h-[24rem] lg:h-[24rem] md:h-[30rem] sm:h-[24rem] rounded-xl"
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
    <div className="w-9/12 py-5">
      <Swiper
        className="py-6"
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
        className="my-6"
        spaceBetween={10}
        slidesPerView={2}
        breakpoints={{
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

export default Carousel;
