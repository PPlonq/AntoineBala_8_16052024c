import React, { useState } from "react";
import leftArrow from "../../assets/arrowGallery/arrowLeft.svg";
import rightArrow from "../../assets/arrowGallery/arrowRight.svg";
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
                    <>
                        <div className="gallery-controls">
                            <div className="control" onClick={prevImage}>
                                <img src={leftArrow} className="arrowLeft" alt="Previous" />
                            </div>
                            <div className="control" onClick={nextImage}>
                                <img src={rightArrow} className="arrowRight" alt="Next" />
                            </div>
                        </div>
                        <div className="imgCounter">
                            {currentImageIndex + 1}/{pictures.length}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Gallery;
