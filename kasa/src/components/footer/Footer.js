import React from "react";
import "./Footer.scss";
import logo from "../../assets/logo/LOGO.svg";

const Footer = () => {
    return (
        <footer>
            <img src={logo} alt="Kasa Logo" className="logoFooter" />
            <p>&copy; 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;
