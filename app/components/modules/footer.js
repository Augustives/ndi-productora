import Image from "next/image";
import Logo from "../../../public/blanco-02.jpg";

const Footer = () => {
  return (
    <footer className="w-full bg-darkBlue text-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-6">
        <div className="flex items-center">
          <Image
            className="mr-3 h-10 w-10 rounded-full"
            src={Logo}
            alt="Logo"
          />
          <h1 className="text-xl font-bold">NDI PRODUCTORA</h1>
        </div>
        <p className="text-sm">&copy; 2023 Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
