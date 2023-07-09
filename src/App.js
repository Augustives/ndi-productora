import Carousel from "./components/carousel";
import Footer from "./components/footer";
import Navbar from "./components/navbar1";
import SocialMedia from "./components/socialMedia";

import { BrowserRouter as Router } from 'react-router-dom';



function App() {
  const videos = [
    "KietLGcfX60",
    "32en3uQbKEQ",
    "j63OOIu8qww",
    "jm4nWVLAxzk",
    "ODCTr1MBM7w",
  ];

  return (
    <Router>
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
    </Router>
  );
}

export default App;
