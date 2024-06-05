import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Houses from "../../data/houses.json";
import Dropdown from "../../components/dropdown/Dropdown";
import LogementHeader from "../../components/logementHeader/LogementHeader";
import Gallery from "../../components/gallery/Gallery";
import "./Logement.scss";

const Logement = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const house = Houses.find((house) => house.id === id);

    useEffect(() => {
        if (!house) {
            navigate("/error");
        }
    }, [house, navigate]);

    if (!house) {
        return null;
    }

    return (
        <div className="logement">
            <Gallery pictures={house.pictures} title={house.title} />
            <div className="info-container">
                <div className="logement-info">
                    <LogementHeader title={house.title} location={house.location} tags={house.tags} host={house.host} rating={house.rating} />
                    <div className="dropdown-container">
                        <Dropdown title="Description" content={<p>{house.description}</p>} />
                        <Dropdown
                            title="Équipements"
                            content={
                                <ul>
                                    {house.equipments.map((equipment, index) => (
                                        <li key={index}>{equipment}</li>
                                    ))}
                                </ul>
                            }
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Logement;
