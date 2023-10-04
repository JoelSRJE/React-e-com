import React from "react";
import "../styles/LoginModal.css";

const LoginModal = ({ setOpenLoginModal }) => {
  return (
    <div className="login-overlay">
      <div className="login-container">
        <button
          className="close-btn"
          onClick={() => {
            setOpenLoginModal(false);
          }}
        >
          X
        </button>
        <h1>Login</h1>
        <hr className="breakline" />
        <form>
          <div className="login-field">
            <label className="login-title">Email</label>
            <input
              className="email"
              type="email"
              placeholder="Example@hotmail.com"
              required
            />
          </div>

          <div className="login-field">
            <label className="login-title">Password</label>
            <input
              className="password"
              type="password"
              placeholder="*******"
              required
            />
          </div>
          <button className="login-button">Sign in</button>
        </form>
        <p className="login-bottom-text">
          Dont have an account?
          <button className="register-btn">Register</button>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
