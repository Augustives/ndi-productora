import Footer from "./components/footer";
import JobsCarousel from "./components/jobsCarrousel";
import Navbar from "./components/navbar";
import Triangle from "./components/triangle";
import VideoCarousel from "./components/videoCarousel";

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
                transition duration-500 hover:scale-110
              "
              >
                CONTACT ME
              </a>
            </div>
          </div>
        </div>
        <Triangle />
      </div>

      <div id="projects" className=" h-screen flex justify-center">
        <VideoCarousel />
      </div>

      <div id="about" className="h-screen flex justify-center">
        <div className="flex flex-col items-center">
          <div className="flex justify-between items-center w-[60rem]">
            <img
              className="rounded-full"
              src="https://placehold.co/600x400"
              alt="Owner of NDI"
            />
            <p className="ml-12">
              In hac habitasse platea dictumst. Proin laoreet fringilla felis,
              id ullamcorper neque suscipit ac. Class aptent taciti sociosqu ad
              litora torquent per conubia nostra, per inceptos himenaeos. Aenean
              nec pulvinar nibh. Maecenas mauris diam, fringilla et fermentum
              vitae, faucibus vel ex. Aenean volutpat vel nisl consectetur
              eleifend. Nam facilisis lectus at diam efficitur, ac aliquet
              ligula dictum. Etiam est velit, pellentesque in fermentum at,
              mattis pretium nisi.
            </p>
          </div>
          <div className="w-[60rem] h-56 mt-10 text-center">
            <p className="font-custom font-bold text-[30px] md:text-[60px]">
              Worked with:
            </p>
            <JobsCarousel />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
