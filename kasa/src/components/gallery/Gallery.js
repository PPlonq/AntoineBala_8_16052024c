import React, { useState } from "react";
import "./Gallery.scss";

const Gallery = ({ pictures, title }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % pictures.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
    };

    return (
        <div className="gallery-container">
            <div className="logement-gallery">
                <img src={pictures[currentImageIndex]} alt={title} />
                {pictures.length > 1 && (
                    <div className="gallery-controls">
                        <button onClick={prevImage}>{"<"}</button>
                        <span>
                            {currentImageIndex + 1}/{pictures.length}
                        </span>
                        <button onClick={nextImage}>{">"}</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Gallery;
