import { useContext, useEffect } from "react";
import { ShopData } from "../App";
import "../styles/Cart.css";
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";

const Cart = () => {
  /* Skickar detta med useContext */
  const {
    cart,
    setCart,
    addItemToCart,
    decreaseCartAmount,
    deleteEntireProduct,
  } = useContext(ShopData);

  /* Beräknar totala priset */
  const total = cart.reduce(
    (price, object) => price + object.amount * object.price,
    0
  );

  /* Hämtar cart, en gång */
  useEffect(() => {
    if (cart.length === 0) {
      const cartStorage = localStorage.getItem("cart");
      setCart(JSON.parse(cartStorage));
    }
  }, []);

  return (
    <section className="cart-wrapper">
      <div className="cart-container">
        {/* Om cart(array) är tom, placera denna div istället */}
        {cart.length === 0 && (
          <div className="empty-container">
            <p>Its empty here, add something to the cart!</p>
          </div>
        )}
        {/* Mappar ut produkter om cart har något i array:en*/}
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
      {/* Ska arbeta vidare på denna, för en detaljerad lista över produkterna, dvs allt förutom bilderna*/}
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
