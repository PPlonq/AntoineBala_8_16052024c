import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo/LOGO.svg";

const Header = () => {
    return (
        <header>
            <Link to="/" className="logo">
                <img src={logo} alt="Kasa Logo" />
            </Link>
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/about">À Propos</Link>
            </nav>
        </header>
    );
};

export default Header;
