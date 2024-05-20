import React from "react";
import Banner from "../../components/banner/Banner";
import Dropdown from "../../components/dropdown/Dropdown";
import "./About.css";

const About = () => {
    const dropdowns = [
        { id: 1, title: "Titre de la location", content: "Contenu de la location" },
        { id: 2, title: "Titre de la location", content: "Contenu de la location" },
        { id: 3, title: "Titre de la location", content: "Contenu de la location" },
        { id: 4, title: "Titre de la location", content: "Contenu de la location" },
    ];
    return (
        <div className="about">
            <Banner />
            <div className="dropdown-container">
                {dropdowns.map((element) => (
                    <Dropdown key={element.id} title={element.title} content={element.content} />
                ))}
            </div>
        </div>
    );
};

export default About;
