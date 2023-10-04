import React from "react";
import "../styles/About.css";
import aboutVideo from "../assets/aboutVideo.mp4";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about-wrapper">
      <video autoStart autoPlay loop>
        <source src={aboutVideo} type="video/mp4" />
      </video>

      <div className="about-background">
        <div className="about-container">
          <h1 className="about-company-name"> BRAND </h1>
          <p className="about-company-text">
            We are a fashion eCommerce company focused on providing the latest
            trends straight from the runway to your doorstep. <br />
            Our team of style experts are constantly on the lookout for the
            newest styles and designs to keep you fashion-forward. <br /> From
            clothing to accessories, we offer a wide range of products to suit
            your every fashion need.We pride ourselves on our exceptional
            customer service and strive to provide a seamless shopping
            experience for every customer. Shop with us and join our community
            of fashion enthusiasts.
          </p>
          <Link to="/Contact">
            <div className="contact-us-btn">
              <button>Contact Us</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
