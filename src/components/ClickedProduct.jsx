import React, { useContext } from "react";
import Banner from "./Banner";
import { useParams } from "react-router-dom";
import { ProductList } from "../utils/Products";
import { ShopData } from "../App";

// Fixa styling för produkten.

const ClickedProduct = () => {
  const { id } = useParams();

  const { selectProduct, setSelectProduct } = useContext(ShopData);

  if (!selectProduct) {
    const storedProduct = localStorage.getItem(`selectedProduct ${id}`);
    setSelectProduct(JSON.parse(storedProduct));
  }

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
          <span className="product-price">${selectProduct?.price}</span>
        </div>
      </div>
    </article>
  );
};

export default ClickedProduct;
