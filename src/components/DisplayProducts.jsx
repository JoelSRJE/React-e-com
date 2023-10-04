import { useContext } from "react";
import "../styles/DisplayProduct.css";
import { useNavigate } from "react-router-dom";
import { ShopData } from "../App";

const DisplayProducts = ({ product }) => {
  const { setSelectProduct, addItemToCart } = useContext(ShopData);

  const router = useNavigate();

  const onClick = () => {
    setSelectProduct(product);
    localStorage.setItem(
      `selectProduct-${product.id}`,
      JSON.stringify(product)
    );
    router(`/ClickedProduct/${product.id}`);
  };

  return (
    <div className="product-card">
      <div className="product-logo">
        <img src={product.imgUrl} onClick={() => onClick()} />
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

export default DisplayProducts;
