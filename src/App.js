import Carousel from "./components/carousel";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import SocialMedia from "./components/socialMedia";

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
      <div
        id="home"
        className="h-screen flex flex-col bg-[url('./assets/images/camera.jpg')] bg-cover"
      >
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-white">NDI PRODUCTORA</div>
        </div>
        <div className="flex-shrink-0 flex justify-start items-end">
          <SocialMedia />
        </div>
      </div>

      <div id="projects" className="bg-darkBlue h-screen flex justify-center">
        <Carousel slides={videos} />
      </div>

      <div id="about" className="bg-darkBlue h-screen ">
        <p>About</p>
      </div>
      <Footer />
    </>
  );
}

export default App;
