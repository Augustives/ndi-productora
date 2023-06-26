import Carousel from "./components/carousel";

function App() {
  const videos = [
    "https://i.ibb.co/ncrXc2V/1.png",
    "https://i.ibb.co/B3s7v4h/2.png",
    "https://i.ibb.co/XXR8kzF/3.png",
    "https://i.ibb.co/yg7BSdM/4.png",
  ];

  return (
    <div className="max-w-lg">
      <Carousel autoSlide={true}>
        {videos.map((video) => (
          <img src={video} alt="" />
        ))}
      </Carousel>
    </div>
  );
}

export default App;
