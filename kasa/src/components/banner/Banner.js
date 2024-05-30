import React from "react";
import "./Banner.scss";

const Banner = ({ backgroundImage, children }) => {
    return (
        <div className="banner" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="banner-overlay">{children}</div>
        </div>
    );
};

export default Banner;
