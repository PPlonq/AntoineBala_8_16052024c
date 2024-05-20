import React from "react";
import Banner from "../../components/banner/Banner";
import Card from "../../components/card/Card";
import "./Home.css";

const Home = () => {
    const cards = [
        { id: 1, title: "Titre de la location" },
        { id: 2, title: "Titre de la location" },
        { id: 3, title: "Titre de la location" },
        { id: 4, title: "Titre de la location" },
        { id: 5, title: "Titre de la location" },
        { id: 6, title: "Titre de la location" },
    ];

    return (
        <div className="home">
            <Banner />
            <div className="card-container">
                {cards.map((card) => (
                    <Card key={card.id} title={card.title} />
                ))}
            </div>
        </div>
    );
};

export default Home;
