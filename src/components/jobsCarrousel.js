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
      key={index}
      className="flex items-center justify-center text-center"
    >
      <img
        className="p-1 rounded-xl h-full w-full block object-cover"
        src={slide}
        alt={`Slide for video`}
      />
    </SwiperSlide>
  ));

  return (
    <>
      <p className="font-custom font-bold text-[30px] md:text-[40px] lg:text-[50px] text-center">
        Worked with:
      </p>
      <Swiper
        className="mb-12 h-[50%]"
        spaceBetween={5}
        navigation={true}
        autoplay={true}
        delay={5000}
        slidesPerView={"3"}
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
