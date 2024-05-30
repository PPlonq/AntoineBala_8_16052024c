import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Houses from "../../data/houses.json";
import Dropdown from "../../components/dropdown/Dropdown";
import "./Logement.scss";

const Logement = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const house = Houses.find((house) => house.id === id);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        if (!house) {
            navigate("/error");
        }
    }, [house, navigate]);

    if (!house) {
        return null; // This return is necessary to avoid rendering the rest of the component before redirect
    }

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % house.pictures.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + house.pictures.length) % house.pictures.length);
    };

    return (
        <div className="logement">
            <div className="gallery-container">
                <div className="logement-gallery">
                    <img src={house.pictures[currentImageIndex]} alt={house.title} />
                    {house.pictures.length > 1 && (
                        <div className="gallery-controls">
                            <button onClick={prevImage}>{"<"}</button>
                            <span>
                                {currentImageIndex + 1}/{house.pictures.length}
                            </span>
                            <button onClick={nextImage}>{">"}</button>
                        </div>
                    )}
                </div>
            </div>
            <div className="info-container">
                <div className="logement-info">
                    <h1>{house.title}</h1>
                    <p>{house.location}</p>
                    <div className="tags">
                        {house.tags.map((tag, index) => (
                            <span key={index} className="tag">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className="host">
                        <img src={house.host.picture} alt={house.host.name} />
                        <p>{house.host.name}</p>
                    </div>
                    <div className="rating">
                        {Array.from({ length: 5 }, (v, i) => (
                            <span key={i} className={i < house.rating ? "star filled" : "star"}>
                                ★
                            </span>
                        ))}
                    </div>
                </div>
                <div className="dropdown-container">
                    <Dropdown title="Description">
                        <p>{house.description}</p>
                    </Dropdown>
                    <Dropdown title="Équipements">
                        <ul>
                            {house.equipments.map((equipment, index) => (
                                <li key={index}>{equipment}</li>
                            ))}
                        </ul>
                    </Dropdown>
                </div>
            </div>
        </div>
    );
};

export default Logement;
