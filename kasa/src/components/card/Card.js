// src/components/card/Card.js
import React from "react";
import "./Card.scss";

const Card = ({ title, cover }) => {
    return (
        <div className="card">
            <img src={cover} alt={title} className="card-cover" />
            <h2>{title}</h2>
        </div>
    );
};

export default Card;
