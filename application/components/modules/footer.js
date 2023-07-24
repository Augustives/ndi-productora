import Image from "next/image";
import LogoSMA from "../../../public/logo-sma.png";

const Footer = () => {
  return (
    <footer className="w-full bg-darkBlue text-white">
      <div className="container mx-auto flex flex-col items-center justify-between px-4 md:flex-row">
        <div className="flex items-center">
          <Image
            className="mr-3 h-24 w-36 rounded-full"
            src={LogoSMA}
            alt="Logo"
          />
        </div>
        <p className="text-sm">&copy; 2023 Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
