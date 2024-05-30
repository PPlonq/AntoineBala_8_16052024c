import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/logo/LOGO.svg";

const Header = () => {
    const location = useLocation();

    return (
        <header>
            <Link to="/" className="logo">
                <img src={logo} alt="Kasa Logo" />
            </Link>
            <nav>
                <Link to="/" className={location.pathname === "/" ? "active" : ""}>
                    Accueil
                </Link>
                <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>
                    À Propos
                </Link>
            </nav>
        </header>
    );
};

export default Header;
