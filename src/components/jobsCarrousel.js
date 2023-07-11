import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/thumbs";

function importAll(r) {
  return r.keys().map(r);
}

function JobsCarousel() {
  const slides = importAll(
    require.context("../assets/images/clients", false, /\.(png|jpe?g|svg)$/)
  );

  const sliderThumbnails = slides.map((slide, index) => (
    <SwiperSlide
      key={index}
      className="flex items-center justify-center text-center border-4 border-solid border-black"
    >
      <img
        className="p-1 rounded-xl h-full w-full "
        src={slide}
        alt={`Slide for video`}
      />
    </SwiperSlide>
  ));

  return (
    <>
      <p className="font-custom font-bold text-[30px] md:text-[40px] lg:text-[50px] text-center">
        Trabajó con:
      </p>
      <Swiper
        className="mb-12 h-[50%]"
        spaceBetween={5}
        navigation={true}
        autoplay={true}
        delay={5000}
        slidesPerView={"4"}
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
