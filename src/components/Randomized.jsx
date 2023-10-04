import "../styles/Home.css";
import { useContext } from "react";
import { ShopData } from "../App";

const Randomized = ({ product }) => {
  const { addItemToCart } = useContext(ShopData);
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
        <button className="add-cart" onClick={() => addItemToCart(product)}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Randomized;
