import React from "react";
import "../styles/Slides.css";

const Slides = ({ title, desc, cover }) => {
  return (
    <div className="slide-container">
      <div>
        <h1 className="slide-title">{title}</h1>
        <p className="slide-text">{desc}</p>
        <button className="slide-btn">Hello there</button>
      </div>
      <div>
        <img src={cover} alt="" className="slide-img" />
      </div>
    </div>
  );
};

export default Slides;
