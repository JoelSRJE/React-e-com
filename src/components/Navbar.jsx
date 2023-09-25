import React from "react";
import { BsFillCartFill } from "react-icons/bs";
import "../styles//Navbar.css";
import brand from "../assets/brand.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
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
              <button className="nav-btn">
                <BsFillCartFill />
                Cart
              </button>
              <button className="nav-btn">Register</button>
              <button className="nav-btn">Login</button>
            </div>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
