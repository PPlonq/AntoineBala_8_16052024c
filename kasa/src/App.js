import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./views/home/Home";
import About from "./views/about/About";
import Error from "./views/error/error.js";
import Logement from "./views/logement/Logement";
import "./App.scss";

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Error />} />
                <Route path="/Logement/:id" element={<Logement />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
