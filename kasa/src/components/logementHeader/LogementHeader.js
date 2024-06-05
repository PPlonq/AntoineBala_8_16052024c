import React from "react";
import "./LogementHeader.scss";

const LogementHeader = ({ title, location, tags, host, rating }) => {
    return (
        <div className="logement-header">
            <div className="left-section">
                <h1>{title}</h1>
                <p>{location}</p>
                <div className="tags">
                    {tags.map((tag, index) => (
                        <span key={index} className="tag">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
            <div className="right-section">
                <div className="host">
                    <p>{host.name}</p>
                    <img src={host.picture} alt={host.name} />
                </div>
                <div className="rating">
                    {Array.from({ length: 5 }, (v, i) => (
                        <span key={i} className={i < rating ? "star filled" : "star"}>
                            ★
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LogementHeader;
