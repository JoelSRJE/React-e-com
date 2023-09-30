import React from "react";
import { BsFacebook, BsTwitter, BsInstagram, BsGithub } from "react-icons/bs";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        <span className="footer-all-rights">
          © 2023 Brand. All Rights Reserved.
        </span>
        <div className="footer-icon-container">
          <a href="#">
            <BsFacebook className="icon" />
          </a>
          <a href="#">
            <BsTwitter className="icon" />
          </a>
          <a href="#">
            <BsInstagram className="icon" />
          </a>
        </div>
        <span className="made-by">
          Made by J <span>/</span> E{" "}
          <a href="https://github.com/JoelSRJE/React-e-com.git">
            <BsGithub id="gh-icon" />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
