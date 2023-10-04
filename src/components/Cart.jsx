import { useContext, useEffect } from "react";
import { ShopData } from "../App";
import "../styles/Cart.css";
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";

const Cart = () => {
  const {
    cart,
    setCart,
    addItemToCart,
    decreaseCartAmount,
    deleteEntireProduct,
  } = useContext(ShopData);

  const total = cart.reduce(
    (price, object) => price + object.amount * object.price,
    0
  );

  useEffect(() => {
    if (cart.length === 0) {
      const cartStorage = localStorage.getItem("cart");
      setCart(JSON.parse(cartStorage));
    }
  }, []);

  return (
    <section className="cart-wrapper">
      <div className="cart-container">
        {cart.length === 0 && (
          <div className="empty-container">
            <p>Its empty here, add something to the cart!</p>
          </div>
        )}
        {cart.map((product) => {
          const amount = product.price * product.amount;
          return (
            <div className="cart-product">
              <div className="cart-img">
                <img src={product.imgUrl} />
              </div>
              <div className="product-content">
                <p className="cart-product-title">{product.productName}</p>
                <p className="cart-product-subcategory">
                  {product.subCategory}
                </p>
                <p className="cart-price">
                  <span className="pricing">${product.price}</span> per item
                  <span className="cart-total">${amount}</span>
                </p>
              </div>

              <div className="cart-buttons">
                <button onClick={() => addItemToCart(product)}>+</button>
                {product.amount}
                <button onClick={() => decreaseCartAmount(product)}>-</button>
              </div>
              <div className="delete-container">
                <button
                  className="delete-item"
                  onClick={() => deleteEntireProduct(product)}
                >
                  <BsTrash />
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="cart-summary-wrapper">
        <div className="cart-summary-container">
          <div>
            <h2>
              Total Price:<p> ${total}.00</p>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
