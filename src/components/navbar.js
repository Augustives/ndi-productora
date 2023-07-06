import { useRef, useState } from "react";
import "../styles/navbar.css";
import CloseButton from '../assets/images/close.svg';
import MenuOpen from '../assets/images/menu.svg';

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
                    <img className="btn-navbar" src={CloseButton} alt='Close button' title='Close button'/>
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar} style={{ display: isMenuOpen ? 'none' : 'block' }}>
                <img className="btn-navbar" src={MenuOpen} alt='Menu button' title='Menu button'/>
            </button>
        </header>
    );
}
