import React, { useState } from "react";
import "./Dropdown.scss";
import arrow from "../../assets/arrow/Arrow.svg";

const Dropdown = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown">
            <div className={`dropdown-header`} onClick={toggleDropdown}>
                <span>{title}</span>
                <span className={`arrow ${isOpen ? "down" : "right"}`}>
                    <img src={arrow} alt="Arrow" />
                </span>
            </div>
            {isOpen && <div className="dropdown-content">{content}</div>}
        </div>
    );
};

export default Dropdown;
