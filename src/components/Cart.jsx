import { useContext, useEffect } from "react";
import { ShopData } from "../App";
import "../styles/Cart.css";
import { ProductList } from "../utils/Products";

const Cart = ({ setOpenCartModal }) => {
  const {
    cart,
    setCart,
    addItemToCart,
    removeItemFromCart,
    increaseCartAmount,
    decreaseCartAmount,
  } = useContext(ShopData);

  useEffect(() => {
    if (cart.length === 0) {
      const cartStorage = localStorage.getItem("cart");
      setCart(JSON.parse(cartStorage));
    }
  }, []);

  {
    cart.length === 0 && (
      <h1 className="no-items product">No Items are add in Cart</h1>
    );
  }

  // Styling behövs

  console.log(cart);
  return (
    <div className="cart-overlay">
      <div className="cart-container">
        <button
          className="close-btn"
          onClick={() => {
            setOpenCartModal(false);
          }}
        >
          X
        </button>
        <h1>Cart</h1>
        <hr className="breakline" />
        <div className="return-div">
          {cart.map((product) => {
            return (
              <div className="cart-items" key={product.id}>
                <div className="cart-product-logo">
                  <img src={product.product.imgUrl} />
                </div>
                <div className="cart-product-title">
                  <span>{product.product.productName}</span>
                </div>
                <div className="cart-product-price">
                  <span>{product.product.price}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cart;
