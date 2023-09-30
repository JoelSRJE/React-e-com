import React, { useContext } from "react";
import Banner from "./Banner";
import { useParams } from "react-router-dom";
import { ShopData } from "../App";

// Fixa styling för produkten.

const ClickedProduct = () => {
  const { id } = useParams();

  const { selectProduct, setSelectProduct, addItemToCart, cart } =
    useContext(ShopData);

  if (!selectProduct) {
    const storedProduct = localStorage.getItem(`selectedProduct ${id}`);
    setSelectProduct(JSON.parse(storedProduct));
  }

  const addProduct = (selectProduct, quantity) => {
    addItemToCart(selectProduct, quantity);
  };

  return (
    <article>
      <Banner category={selectProduct?.name} />
      <div className="product-card">
        <div className="product-logo">
          <img src={selectProduct?.imgUrl} />
        </div>
        <hr className="breakline" />
        <div className="product-title-container">
          <span>{selectProduct?.productName}</span>
        </div>
        <div className="product-sub-container">
          <span className="product-price">
            ${selectProduct?.price}
            <button onClick={() => addProduct(selectProduct)}>Add</button>
          </span>
        </div>
      </div>
    </article>
  );
};

export default ClickedProduct;
