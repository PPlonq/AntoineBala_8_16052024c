import React from "react";
import Banner from "../../components/banner/Banner";
import { Link } from "react-router-dom";
import Card from "../../components/card/Card";
import Houses from "../../data/houses.json";
import bannerHome from "../../assets/images/IMG.png";
import "./Home.scss";

const Home = () => {
    return (
        <div className="home">
            <Banner backgroundImage={bannerHome}>
                <h1>Chez vous, partout et ailleurs</h1>
            </Banner>
            <div className="card-container">
                {Houses.map((house) => (
                    <Link key={house.id} to={`/logement/${house.id}`}>
                        <Card title={house.title} cover={house.cover} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Home;
