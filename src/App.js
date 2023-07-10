import Footer from "./components/footer";
import JobsCarousel from "./components/jobsCarrousel";
import Navbar from "./components/navbar";
import Triangle from "./components/triangle";
import VideoCarousel from "./components/videoCarousel";

function App() {
  return (
    <div>
      <Navbar />
      <div id="home" className="h-screen flex flex-col bg-darkBlue">
        <div className="flex flex-col w-full h-full bg-[url('./assets/images/background_cameras.jpeg')] bg-cover">
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

      <div
        id="projects"
        className="h-screen w-full flex justify-center bg-darkBlue p-6"
      >
        <VideoCarousel />
      </div>

      <div id="about" className="w-full flex justify-center py-10">
        <div className="flex flex-col items-center">
          <div className="flex flex-col lg:flex-row items-center px-24 lg:px-64">
            <img
              className="rounded-full h-[14rem] w-[14rem] sm:h-[20rem] sm:w-[20rem] md:h-[22rem] md:w-[22rem] lg:h-[24rem] lg:w-[24rem] object-cover"
              src="https://placehold.co/600x400"
              alt="Owner of NDI"
            />
            <div className="md:ml-12">
              <p className="my-6 overflow-hidden">
                In hac habitasse platea dictumst. Proin laoreet fringilla felis,
                id ullamcorper neque suscipit ac. Class aptent taciti sociosqu
                ad litora torquent per conubia nostra, per inceptos himenaeos.
                Aenean nec pulvinar nibh. Maecenas mauris diam, fringilla et
                fermentum vitae, faucibus vel ex. Aenean volutpat vel nisl
                consectetur eleifend. Nam facilisis lectus at diam efficitur, ac
                aliquet ligula dictum. Etiam est velit, pellentesque in
                fermentum at, mattis pretium nisi.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="worked-with" className=" mt-10 px-2">
        <JobsCarousel />
      </div>

      <Footer />
    </div>
  );
}

export default App;
