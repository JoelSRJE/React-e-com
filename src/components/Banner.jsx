import React from "react";
import "../styles/Banner.css";

const Banner = ({ category }) => {
  // Ändra lite styling
  return (
    <>
      <div className="banner-container">
        <div alt="Product-title" />
        <div className="banner-text-container">
          <span>{category}</span>
        </div>
      </div>
    </>
  );
};

export default Banner;
