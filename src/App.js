import Carousel from "./components/carousel";

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
      <div className="bg-gray-300 h-screen"></div>
      <div className="bg-gray-500 h-screen">
        <Carousel slides={videos} />;
      </div>
      <div className="bg-gray-700 h-screen"></div>
    </>
  );
}

export default App;
