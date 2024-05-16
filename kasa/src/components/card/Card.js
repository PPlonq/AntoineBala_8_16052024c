import React from "react";
import "./Card.css";

const Card = ({ title }) => {
    return (
        <div className="card">
            <div className="card-content">
                <div className="card-title">{title}</div>
            </div>
        </div>
    );
};

export default Card;
