import "../styles/Home.css";
import { useContext } from "react";
import { ShopData } from "../App";
import { useNavigate } from "react-router-dom";

const Randomized = ({ product }) => {
  /* Hämtar från App.jsx */
  const { addItemToCart, setSelectProduct } = useContext(ShopData);

  /* Routar med navigate */
  const router = useNavigate();

  /* Routing tillsammans med navigate till Clickedproduct, samt den produkt du klickade på */
  const onClick = () => {
    setSelectProduct(product);
    localStorage.setItem(
      `selectProduct-${product.id}`,
      JSON.stringify(product)
    );
    /* Routar det alternativ man klickar på */
    router(`/ClickedProduct/${product.id}`);
  };

  return (
    <div className="product-card">
      <div className="product-logo">
        <img src={product.imgUrl} onClick={onClick} />
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
