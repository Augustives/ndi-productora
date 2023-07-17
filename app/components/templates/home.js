import JobsCarousel from "../modules/jobsCarrousel";
import Triangle from "../elements/triangle";
import VideoCarousel from "../modules/videoCarrousel";
import ProfilePic from "../../../public/profile.jpg";
import Image from "next/image";

const HomePage = () => (
  <>
    <div id="home" className="flex h-screen flex-col bg-darkBlue">
      <div className="flex h-full w-full flex-col bg-camerasBg bg-cover">
        <div className="flex flex-grow flex-col items-center justify-center">
          <div className="font-custom text-[40px] font-bold text-white md:text-[80px]">
            AUDIOVISUALES
          </div>
          <div className="font-custom text-[20px] font-bold text-white md:text-[50px]	">
            PARA TU NEGOCIO
          </div>
          <div className="my-8">
            <a
              href="https://wa.me/message/CDY5GP7JSURXD1"
              target="_blank"
              rel="noreferrer noopener"
              className="
                focus:shadow-xs inline-flex h-12 items-center justify-center rounded-lg border-2 border-solid border-white bg-white
                px-10 py-0 text-center align-middle font-custom text-[15px] text-xl
                font-extrabold tracking-[0.55em] text-black transition duration-500
                hover:scale-110 focus:no-underline md:text-[25px]
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
      className="flex h-screen w-full justify-center bg-darkBlue p-6"
    >
      <VideoCarousel />
    </div>

    <div id="about" className="flex w-full justify-center py-10">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center px-24 lg:flex-row lg:px-64">
          <Image
            className="h-[14rem] w-[14rem] rounded-full object-cover sm:h-[20rem] sm:w-[20rem] md:h-[22rem] md:w-[22rem] lg:h-[24rem] lg:w-[24rem]"
            src={ProfilePic}
            alt="Owner of NDI"
          />
          <div className="md:ml-12">
            <p className="my-6 overflow-hidden font-custom text-[20px]">
              NDI Productora Nace como un proyecto innovador que busca la
              excelencia y la creatividad, en todos los rubros y servicios que
              le podemos llegar a ofrecer. Nos gusta brindar lo mejor y siempre
              un poco más. Somos creativos y profesionales con un hambre de
              hacer que tu marca llegue al siguiente nivel. Como misión tenemos
              el desarrollar una producción audiovisual de calidad. Nos gustaría
              llevar tu marca a un nivel superior y con mucho profesionalismo.
            </p>
          </div>
        </div>
        <div
          id="worked-with"
          className="mt-10 h-[15rem] min-w-0 max-w-[95vw] px-10 lg:px-[20rem] "
        >
          <JobsCarousel />
        </div>
      </div>
    </div>
  </>
);

export default HomePage;
