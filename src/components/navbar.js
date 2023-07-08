import Logo from "../assets/images/blanco-02.jpg";
import Button from "./button";

import { HiMenu } from "react-icons/hi";

export default function Navbar() {
  return (
    <nav className="flex flex-row justify-between px-6 py-1 bg-gradient-to-r to-darkBlue from-softBlue shadow-custom items-center relative z-10">
      <img
        className="h-20 w-20 rounded-full z-50 shadow-custom m-2 p-1"
        src={Logo}
        alt="Logo"
        title="Logo"
      />
      <div className="flex flex-row">
        <div className="mx-2">
          <Button text="Home" href="#home" />
        </div>

        <div className="mx-2">
          <Button text="Projects" href="#projects" />
        </div>

        <div className="mx-2">
          <Button text="About Us" href="#about" />
        </div>
      </div>
    </nav>
  );
}
