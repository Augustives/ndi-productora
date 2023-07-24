"use client";

import Image from "next/image";
import { useState } from "react";
import { HiMenu, HiOutlineX } from "react-icons/hi";
import LogoImage from "../../../public/logoNDI-.png";
import Button from "../elements/button";
import SocialMedia from "./socialMedia";

const NavLinks = () => {
  return (
    <>
      <div className="mx-3 font-custom font-semibold">
        <Button text="Inicio" href="#home" />
      </div>
      <div className="mx-3 font-custom font-semibold">
        <Button text="Proyectos" href="#projects" />
      </div>
      <div className="mx-3 font-custom font-semibold">
        <Button text="Sobre" href="#about" />
      </div>
    </>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header
      className="
      fixed left-0 top-0 z-20 
      mx-auto flex w-full flex-wrap items-center justify-between border-b-8
      border-orange bg-darkBlue px-16 py-4 md:px-44 lg:px-16"
    >
      <Image className="h-32 w-32" src={LogoImage} alt="Logo" />
      <nav className="flex w-1/3 items-center justify-end">
        <div className="hidden w-full items-center justify-end xl:flex">
          <NavLinks />
          <div className="hiddem mx-6 flex xl:flex">
            <div className="h-24 border-r-2 border-white"></div>
            <SocialMedia />
          </div>
        </div>
        <div className="xl:hidden">
          <button onClick={toggleNavbar}>
            {isOpen ? (
              <HiOutlineX className="h-24 w-24 text-orange" />
            ) : (
              <HiMenu className="h-24 w-24 text-orange" />
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
}
