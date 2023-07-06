import Carousel from "./components/carousel";
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
        className="fixed top-5 left-5 h-20 w-20 rounded-full"
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
        </div>
        <div className="bg-blue-700 bg-opacity-40 flex flex-row h-18 p-2 mt-[-72px]">
          <a href="https://www.instagram.com/ndiproductora?hl=es-la">
            <Instagram className="h-auto w-14 mx-6" />
          </a>

          <a href="https://www.youtube.com/@ndiproductora7060/">
            <Youtube className="h-auto w-14 mr-6" />
          </a>

          <a href="">
            <Phone className="h-auto w-14 mr-6" />
          </a>
        </div>
      </div>

      <div className="bg-gray-500 h-screen flex justify-center">
        <Carousel slides={videos} />
      </div>
      <div className="bg-gray-700 h-screen"></div>
    </>
  );
}

export default App;
