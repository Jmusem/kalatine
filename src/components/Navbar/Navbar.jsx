import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";

import logo from "../../assets/images/Logo.png";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector(".navbar");

            if (window.scrollY > 50) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () =>
            window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className="navbar">

            <div className="logo-container">

                <img
                    src={logo}
                    alt="Kalatine Girls Secondary School"
                    className="school-logo"
                />

                <div className="logo-text">
                    <h2>Kalatine Girls</h2>
                    <span>Senior School</span>
                </div>

            </div>

            <ul className={menuOpen ? "nav-links active" : "nav-links"}>

                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#academics">Academics</a></li>
                <li><a href="#clubs">Clubs</a></li>
                <li><a href="#departments">Departments</a></li>
                <li><a href="#gallery">Gallery</a></li>

            </ul>

            <button className="admission-btn">
                Enquire Now
            </button>

            <div
                className="menu-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? <FaTimes /> : <FaBars />}
            </div>

        </nav>
    );
}

export default Navbar;