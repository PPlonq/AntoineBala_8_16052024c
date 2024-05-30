import React, { useState } from "react";
import Banner from "../../components/banner/Banner";
import { Link } from "react-router-dom";
import Card from "../../components/card/Card";
import Houses from "../../data/houses.json";
import bannerHome from "../../assets/images/IMG.png";
import "./Home.scss";

const Home = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 6;

    // Calculate the indices of the cards to display
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = Houses.slice(indexOfFirstCard, indexOfLastCard);

    const nextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const prevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    return (
        <div className="home">
            <Banner backgroundImage={bannerHome}>
                <h1>Chez vous, partout et ailleurs</h1>
            </Banner>
            <div className="card-container">
                {currentCards.map((house) => (
                    <Link key={house.id} to={`/Logement/${house.id}`}>
                        <Card title={house.title} cover={house.cover} />
                    </Link>
                ))}
            </div>
            <div className="pagination-buttons">
                {currentPage > 1 && (
                    <button onClick={prevPage} className="pagination-btn">
                        Previous
                    </button>
                )}
                {indexOfLastCard < Houses.length && (
                    <button onClick={nextPage} className="pagination-btn">
                        Next
                    </button>
                )}
            </div>
        </div>
    );
};

export default Home;
