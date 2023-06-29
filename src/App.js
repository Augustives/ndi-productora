import Carousel from "./components/carousel";
import { Instagram, Youtube, Phone } from "react-feather";

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
      <div className="bg-gray-300 h-screen flex flex-col">
        <div className="bg-blue-300 flex items-center justify-between h-18 p-2">
          <div className="ml-4">Logo</div>
          <div className="mr-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Button 1
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2">
              Button 2
            </button>
          </div>
        </div>
        <div className="flex flex-grow bg-blue-500  items-center justify-center">
          Title
        </div>
        <div className="bg-blue-700 flex flex-row h-18 p-2">
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

      <div className="bg-gray-500 h-screen flex items-center justify-center">
        <Carousel slides={videos} />;
      </div>
      <div className="bg-gray-700 h-screen"></div>
    </>
  );
}

export default App;
