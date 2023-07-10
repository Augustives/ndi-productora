import React from "react";
import Logo from "../assets/images/blanco-02.jpg";

const Footer = () => {
  return (
    <footer className="bg-darkBlue text-white">
      <div className="container mx-auto flex items-center justify-between py-6 px-4">
        <div className="flex items-center">
          <img className="rounded-full w-10 h-10 mr-3" src={Logo} alt="Logo" />
          <h1 className="text-xl font-bold">NDI PRODUCTORA</h1>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
