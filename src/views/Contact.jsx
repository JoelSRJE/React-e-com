import React from "react";
import "../styles/Contact.css";
import { BsPencil } from "react-icons/bs";

const Contact = () => {
  return (
    <section className="contact-wrapper">
      <div className="contact-left-container">
        <div className="text-container">
          <h1 className="contact-title">Hello there!</h1>
          <p className="contact-info">
            To reach out to us, simply fill out the form located on the
            right-hand side of the page. We are dedicated to providing the best
            possible service and support for all of your needs. Whether you have
            a question about our products, need assistance with an order, or
            simply want to provide feedback, we are here to help. Thank you for
            visiting us and we look forward to serving you.
          </p>
        </div>
      </div>

      <div className="contact-right-container">
        <div className="form-container">
          <h2 className="form-h2">Contact Us</h2>

          <form>
            <div className="form-field">
              <label className="form-title">
                Email <BsPencil className="pencil-icon" />
              </label>

              <input
                className="form-input"
                type="email"
                placeholder="ex: Example@hotmail.com"
              />
            </div>
            <div className="form-field">
              <label className="form-title">
                Full Name <BsPencil className="pencil-icon" />
              </label>
              <input
                type="text"
                placeholder="ex: John Smith"
                className="form-input"
              />
            </div>
            <div className="form-field">
              <label className="form-title">
                Message <BsPencil className="pencil-icon" />
              </label>
              <textarea
                className="form-comment"
                placeholder="Write here..."
                rows="10"
                cols="10"
                maxlength="540"
              ></textarea>
            </div>
            <div className="contact-us">
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
