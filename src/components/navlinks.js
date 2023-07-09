import {NavLink} from "react-router-dom";
import { HiMenu, HiOutlineX } from "react-icons/hi";
import { useState } from "react";
import Button from "./button";

const NavLinks = () => {
    return (
        <>
            <NavLink to="#home">
                <div className="mx-1">
                    <Button text="Home" href="#home" />
                </div>
            </NavLink>
            <NavLink to="#projects">
                <div className="mx-1">
                <Button text="Projects" href="#projects" />
                </div>
            </NavLink>
            <NavLink to="#about">
                <div className="mx-1">
                <Button text="About" href="#about" />
                </div>
            </NavLink>
        </>
    );
};

export default function Nav() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return(
        <>
            <nav className="w-1/3 flex justify-end">
                <div></div>
                <div className="hidden w-full justify-end md:flex">
                    <NavLinks/>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleNavbar}>{isOpen ? <HiOutlineX className="text-orange text-2xl"/> : <HiMenu className="text-orange text-2xl"/>}</button>
                </div>
            </nav>
            {isOpen && (
                <div className="flex basis-full flex-col items-center gap-4 mt-4">
                    <NavLinks/>
                </div>
            )}
        </>
    );
};