import React from "react";
import "../styles/RegisterModal.css";

const RegisterModal = ({ setOpenRegisterModal }) => {
  return (
    <div className="register-overlay">
      <div className="register-container">
        <button
          className="close-btn"
          onClick={() => {
            setOpenRegisterModal(false);
          }}
        >
          X
        </button>
        <h1>Register</h1>
        <hr className="breakline" />
        <form>
          <div className="register-field">
            <label className="register-title">Email</label>
            <input
              className="email"
              type="email"
              placeholder="Example@hotmail.com"
              required
            />
          </div>
          <div className="register-field">
            <label className="register-title">Username</label>
            <input
              className="username"
              type="username"
              placeholder="Example Name"
              required
            />
          </div>
          <div className="register-field">
            <label className="register-title">Password</label>
            <input
              className="password"
              type="password"
              placeholder="*******"
              required
            />
          </div>

          <button className="register-button">Register</button>
        </form>

        <p className="register-bottom-text">
          Already have an account?
          <button className="login-btn">Login</button>
        </p>
      </div>
    </div>
  );
};

export default RegisterModal;
