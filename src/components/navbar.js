import { useRef, useState } from "react";
import "../styles/navbar.css";
import { Menu, X } from "react-feather";

export default function Navbar() {
    const navRef = useRef();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const showNavbar = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <header>
            <nav ref={navRef} className={isMenuOpen ? "responsive_nav" : ""}>
                <a href="#home">Home</a>
                <a href="#projects">Projects</a>
                <a href="#">About me</a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <X className="btn-navbar"/>
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar} style={{ display: isMenuOpen ? 'none' : 'block' }}>
                <Menu className="btn-navbar"/>
            </button>
        </header>
    );
}
