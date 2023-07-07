import Carousel from "./components/carousel";
import SocialMedia from "./components/socialMedia";
import Navbar from "./components/navbar";
import { Instagram, Youtube, Phone } from "react-feather";
import Background from "./assets/images/camera.jpg";
import Logo from "./assets/images/blanco-02.jpg";

function App() {
  const videos = [
    "UZcn4OF8fKA",
    "WaraI2chTew",
    "t6yN_NtTU6Q",
    "XJSOgV4VELk",
    "6lKXFyL1uMk",
  ];

  return (
    <>
      <img
        className="fixed top-5 left-5 h-20 w-20 rounded-full z-50 shadow-custom"
        src={Logo}
        alt="Logo"
        title="Logo"
      />
      <div id="home" className="bg-gray-300 h-screen flex flex-col">
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <img
            className="object-cover h-full w-full"
            src={Background}
            alt="Camera and desktop"
            title="Camera and desktop"
          />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 
                          -translate-y-1/2 text-white sm:text-4xl md:text-4xl
                          lg:text-5xl xl:text-7xl font-bold text-center">
              NDI PRODUCTORA
            </div>
        </div>
        <div className="relative top-[-110px]">
          <SocialMedia/>
        </div>
      </div>

      <div id="projects" className="bg-darkBlue h-screen flex justify-center"> 
        <Carousel slides={videos} />
      </div>
      <div className="bg-darkBlue h-screen"></div>
    </>
  );
}

export default App;
