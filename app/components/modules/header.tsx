"use client";

import Image from "next/image";

import { useState } from "react";
import { HiMenu, HiOutlineX } from "react-icons/hi";

import LogoImage from "public/logo-ndi.png";
import Button from "app/components/elements/button";
import SocialMedia from "app/components/modules/socialMedia";

const NavLinks: React.FC = () => {
  return (
    <ul>
      <li className="mx-3 font-custom font-semibold">
        <Button text="Inicio" href="#home" />
      </li>
      <li className="mx-3 font-custom font-semibold">
        <Button text="Proyectos" href="#projects" />
      </li>
      <li className="mx-3 font-custom font-semibold">
        <Button text="Sobre" href="#about" />
      </li>
    </ul>
  );
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleNavbar = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <header
      className="
      fixed left-0 top-0 z-20 
      mx-auto flex w-full flex-wrap items-center justify-between border-b-8
      border-orange bg-darkBlue px-16  md:px-44 lg:px-16"
    >
      <Image className="h-24 w-24" src={LogoImage} alt="Logo" />
      <nav className="flex w-1/3 items-center justify-end">
        <div className="hidden w-full items-center justify-end xl:flex">
          <NavLinks />
          <div className="hiddem mx-6 flex items-center">
            <div className="h-14 border-r-2 border-white"></div>
            <SocialMedia />
          </div>
        </div>
        <div className="xl:hidden">
          <button onClick={toggleNavbar}>
            {isOpen ? (
              <HiOutlineX className="h-16 w-16 text-orange" />
            ) : (
              <HiMenu className="h-16 w-16 text-orange" />
            )}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="mt-4 flex basis-full flex-col items-center gap-4">
          <NavLinks />
          <SocialMedia />
        </div>
      )}
    </header>
  );
};

export default Navbar;
