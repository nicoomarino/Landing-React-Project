import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavBar.css";

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
        );
    };

    return (
        <header className="header">
            <h3 className="logo">Log<b>Media</b></h3>
            <nav ref={navRef}>
                <a href="#">Home</a>
                <a href="#">About Us</a>
                <a href="#">Our Work</a>
                <a href="#">Contact Us</a>
                <button
                    className="nav-btn nav-close-btn"
                    onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button
                className="nav-btn"
                onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}

export default Navbar;
