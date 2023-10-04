import React, { useContext, useState } from "react";
import Banner from "./Banner";
import { useParams } from "react-router-dom";
import { ShopData } from "../App";
import "../styles/ClickedProduct.css";
// Fixa styling för produkten.

const ClickedProduct = () => {
  const [count, setCount] = useState(1);

  const { selectProduct, setSelectProduct, addItemToCart } =
    useContext(ShopData);

  const { id } = useParams();

  if (!selectProduct) {
    const storedProduct = localStorage.getItem(`selectedProduct-${id}`);
    setSelectProduct(JSON.parse(storedProduct));
  }

  const addProduct = (selectProduct, count) => {
    addItemToCart(selectProduct, count);
  };

  return (
    <section className="clicked-section">
      <Banner category={selectProduct.productName} />
      <div className="product-wrapper">
        <div className="product-container">
          <div className="product-logo-container">
            <div className="product-logo">
              <img src={selectProduct.imgUrl} />
            </div>
          </div>
          <div className="product-information">
            <div className="product-title">
              <span>{selectProduct.productName}</span>
            </div>

            <div className="product-subcategory">
              <span>Category | {selectProduct.subCategory}</span>
            </div>

            <div className="product-description">
              <span>{selectProduct.description}</span>
            </div>
            <div className="count-buttons">
              <button
                className="count-active"
                onClick={() => setCount(count + 1)}
              >
                +
              </button>
              <button className="counter">{count}</button>
              <button
                className="count-active"
                onClick={() => setCount(count - 1)}
              >
                -
              </button>
            </div>

            <div className="product-price">
              <span>${selectProduct.price}</span>
              <button onClick={() => addProduct(selectProduct, count)}>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClickedProduct;
