import { useContext, useEffect, useState } from "react";
import { BsFillCartFill } from "react-icons/bs";
import "../styles//Navbar.css";
import brand from "../assets/brand.png";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import { ShopData } from "../App";

const Navbar = () => {
  const [openLoginInModal, setOpenLoginModal] = useState(false);
  const [openRegisterModal, setOpenRegisterModal] = useState(false);

  /* Kallas från App.jsx för att visa hur många unika produkter är i Cart */
  const { cart, setCart } = useContext(ShopData);

  return (
    <div className="navbar-wrapper">
      <div className="navbar-content">
        <nav className="nav">
          <ul>
            <Link className="nav-link" to="/">
              <span className="navbar-options">Home</span>
            </Link>

            <Link className="nav-link" to="/Shop">
              <li className="navbar-options">Shop</li>
            </Link>
            <Link className="nav-link" to="/About">
              <li className="navbar-options">About</li>
            </Link>
            <Link className="nav-link" to="/Contact">
              <li className="navbar-options">Contact</li>
            </Link>
          </ul>
          <p id="divider">|</p>
        </nav>
      </div>

      <img className="logo" src={brand} alt="Brand Logo" />

      <div className="navbar-content">
        <nav className="nav">
          <div className="nav-btn-wrapper">
            <p id="divider">|</p>
            <Link to="/Cart">
              <button className="nav-btn cart">
                <BsFillCartFill />
                {cart.length}
              </button>
            </Link>

            <button
              onClick={() => setOpenRegisterModal(true)}
              className="nav-btn"
            >
              <p>Register</p>
            </button>
            <button
              onClick={() => setOpenLoginModal(true)}
              className="nav-btn login-modal"
            >
              <p>Login</p>
            </button>
          </div>
        </nav>
        {openLoginInModal && (
          <LoginModal setOpenLoginModal={setOpenLoginModal} />
        )}
        {openRegisterModal && (
          <RegisterModal setOpenRegisterModal={setOpenRegisterModal} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
