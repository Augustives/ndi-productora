import LogoImage from "../assets/images/logoNDI-.png";
import { HiMenu, HiOutlineX } from "react-icons/hi";
import { useState } from "react";
import Button from "./button";
import SocialMedia from "./socialMedia";

const NavLinks = () => {
  return (
    <>
      <div className="mx-3 font-custom font-semibold">
        <Button text="Home" href="#home" />
      </div>
      <div className="mx-3 font-custom font-semibold">
        <Button text="Projects" href="#projects" />
      </div>
      <div className="mx-3 font-custom font-semibold">
        <Button text="About" href="#about" />
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
      bg-darkBlue flex-wrap z-20 mx-auto 
      flex items-center justify-between py-4 px-16 lg:px-36 md:px-44
      fixed top-0 left-0 w-full border-b-8 border-orange"
    >
      <img className="h-32 w-32" src={LogoImage} alt="Logo" />
      <nav className="w-1/3 flex justify-end items-center">
        <div className="hidden w-full items-center justify-end xl:flex">
          <NavLinks />
          <div class="flex mx-6 hiddem xl:flex">
            <div class="border-r-2 border-white h-24"></div>
            <SocialMedia />
          </div>
        </div>
        <div className="xl:hidden">
          <button onClick={toggleNavbar}>
            {isOpen ? (
              <HiOutlineX className="text-orange h-24 w-24" />
            ) : (
              <HiMenu className="text-orange h-24 w-24" />
            )}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="flex basis-full flex-col items-center gap-4 mt-4">
          <NavLinks />
          <SocialMedia />
        </div>
      )}
    </header>
  );
}
