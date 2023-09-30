import React from "react";
import "../styles/DisplayProduct.css";
import Banner from "./Banner";

const DisplayProduct = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-logo">
        <img src={product.imgUrl} />
      </div>
      <hr className="breakline" />
      <div className="product-title-container">
        <span>{product.productName}</span>
      </div>
      <div className="product-sub-container">
        <span className="product-price">${product.price}</span>
      </div>
    </div>
  );
};

export default DisplayProduct;
