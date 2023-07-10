import VideoCarousel from "./components/videoCarousel";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Triangle from "./components/triangle";
import JobsCarousel from "./components/jobsCarrousel";
import Button from "./components/button";

function App() {
  return (
    <>
      <Navbar />
      <div id="home" className="h-screen flex flex-col ">
        <div className="flex flex-col h-full bg-[url('./assets/images/background_cameras.jpeg')] bg-cover">
          <div className="flex-grow flex flex-col items-center justify-center">
            <div className="text-white text-[40px] md:text-[80px] font-custom font-bold">
              AUDIOVISUAL
            </div>
            <div className="text-white text-[20px] md:text-[50px] font-custom font-bold	">
              FOR YOUR BUSINESS
            </div>
            <div className="my-8">
              <a
                href="h"
                className="
                inline-flex items-center justify-center h-12 px-10 py-0 text-xl text-center text-[15px] md:text-[25px]
              text-black align-middle border-2 border-white border-solid bg-white rounded-lg
                focus:shadow-xs focus:no-underline font-custom font-extrabold tracking-[0.55em]
              "
              >
                CONTACT ME
              </a>
            </div>
          </div>
        </div>
        <Triangle />
      </div>

      <div>
        <div id="projects" className=" h-screen flex justify-center">
          <VideoCarousel />
        </div>
      </div>
      <div id="about" className="h-screen flex flex-col px-44">
        <div className="flex flex-row justify-between">
          <img
            className="rounded-full"
            src="https://placehold.co/600x400"
            alt="Owner of NDI"
          />
          <p>About</p>
        </div>

        <div>
          <JobsCarousel />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
