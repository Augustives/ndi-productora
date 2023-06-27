import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

function Carousel({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(slides[0]);
  const [iframesLoaded, setIframesLoaded] = useState(false);

  useEffect(() => {
    setIframesLoaded(true);

    const interval = setInterval(() => {
      const currentIndex = slides.findIndex(
        (videoId) => videoId === currentSlide
      );
      const nextIndex = (currentIndex + 1) % slides.length;
      setCurrentSlide(slides[nextIndex]);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [slides, currentSlide]);

  const handleClick = (index) => {
    setCurrentSlide(slides[index]);
  };

  const handleNextSlide = () => {
    const currentIndex = slides.findIndex(
      (videoId) => videoId === currentSlide
    );
    const nextIndex = (currentIndex + 1) % slides.length;
    setCurrentSlide(slides[nextIndex]);
  };

  const handlePreviousSlide = () => {
    const currentIndex = slides.findIndex(
      (videoId) => videoId === currentSlide
    );
    const previousIndex = (currentIndex - 1 + slides.length) % slides.length;
    setCurrentSlide(slides[previousIndex]);
  };

  return (
    <div className="flex flex-col bg-red-600 w-full items-center justify-center m-5 p-5">
      <div className="mb-7">
        {iframesLoaded &&
          slides.map((videoId, index) => (
            <iframe
              key={index}
              title="YouTube Video"
              src={`https://www.youtube.com/embed/${videoId}`}
              allow="autoplay; encrypted-media"
              height="400rem"
              width="650rem"
              allowFullScreen
              className={`transition-opacity duration-300 ${
                currentSlide === videoId ? "opacity-100" : "opacity-0"
              }`}
              style={{ display: currentSlide === videoId ? "block" : "none" }}
            />
          ))}
      </div>
      <div className="flex flex-row w-full items-center justify-center">
        <button
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
          onClick={handlePreviousSlide}
        >
          <ChevronLeft size={40} />
        </button>
        {slides.map((videoId, index) => (
          <div
            key={index}
            className={`h-1/4 w-1/4 m-4 rounded-xl transition-colors duration-300 ${
              currentSlide === videoId
                ? "border-4 border-gray-300 border-opacity-50"
                : ""
            }`}
            onClick={() => handleClick(index)}
          >
            <img
              className="h-full w-full"
              src={`https://i3.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
              alt={`Thumbnail for video ${videoId}`}
            />
          </div>
        ))}
        <button
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
          onClick={handleNextSlide}
        >
          <ChevronRight size={40} />
        </button>
      </div>
    </div>
  );
}

export default Carousel;
