import { useContext } from "react";
import "../styles/DisplayProduct.css";
import { useNavigate } from "react-router-dom";
import { ShopData } from "../App";

const DisplayProducts = ({ product }) => {
  const { setSelectProduct } = useContext(ShopData);

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
    <div className="product-card" onClick={() => onClick()}>
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

export default DisplayProducts;
