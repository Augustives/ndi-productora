import Footer from "./components/footer";
import JobsCarousel from "./components/jobsCarrousel";
import Navbar from "./components/navbar";
import Triangle from "./components/triangle";
import VideoCarousel from "./components/videoCarousel";
import ProfilePic from "./assets/images/profile.jpg";

function App() {
  return (
    <div>
      <Navbar />
      <div id="home" className="h-screen flex flex-col bg-darkBlue">
        <div className="flex flex-col w-full h-full bg-[url('./assets/images/background_cameras.jpeg')] bg-cover">
          <div className="flex-grow flex flex-col items-center justify-center">
            <div className="text-white text-[40px] md:text-[80px] font-custom font-bold">
              AUDIOVISUALES
            </div>
            <div className="text-white text-[20px] md:text-[50px] font-custom font-bold	">
              PARA TU NEGOCIO
            </div>
            <div className="my-8">
              <a
                href="https://wa.me/message/CDY5GP7JSURXD1" 
                target="_blank"
                className="
                inline-flex items-center justify-center h-12 px-10 py-0 text-xl text-center text-[15px] md:text-[25px]
              text-black align-middle border-2 border-white border-solid bg-white rounded-lg
                focus:shadow-xs focus:no-underline font-custom font-extrabold tracking-[0.55em]
                transition duration-500 hover:scale-110
              "
              >
                CONTÁCTAME
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
              src={ProfilePic}
              alt="Owner of NDI"
            />
            <div className="md:ml-12">
              <p className="my-6 overflow-hidden font-custom text-[20px]">
                NDI Productora Nace como un proyecto innovador que busca la
                excelencia y la creatividad, en todos los rubros y servicios que
                le podemos llegar a ofrecer. Nos gusta brindar lo mejor y
                siempre un poco más. Somos creativos y profesionales con un
                hambre de hacer que tu marca llegue al siguiente nivel. Como
                misión tenemos el desarrollar una producción audiovisual de
                calidad. Nos gustaría llevar tu marca a un nivel superior y con
                mucho profesionalismo.
              </p>
            </div>
          </div>
          <div
            id="worked-with"
            className="mt-10 px-10 lg:px-[20rem] max-w-[95vw] min-w-0 "
          >
            <JobsCarousel />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
