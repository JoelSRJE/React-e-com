import React from "react";
import "../styles/Slides.css";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const Slides = ({ title, desc, cover, route }) => {
  return (
    <div className="slide-container">
      <div>
        <h1 className="slide-title">{title}</h1>
        <p className="slide-text">{desc}</p>
        <div className="slide-btn-container">
          <Link to={route}>
            <button className="slide-btn">Shop Now</button>
          </Link>
          <FiArrowLeft className="slide-btn-arrow bounce" />
        </div>
      </div>
      <div>
        <img src={cover} alt="" className="slide-img" />
      </div>
    </div>
  );
};

export default Slides;
