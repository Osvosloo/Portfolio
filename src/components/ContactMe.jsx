import React, { useState } from "react";
import ".././styles/ContactMe.css"; // Ensure correct path to CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactMe = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    alert("Form submitted!"); // Example alert
  };

  return (
    <section className="contact-me">
      <div className="contact-content">
        <h2>Get in Touch</h2>
        <div className="contact-options">
          <div className="contact-option">
            <i className="fas fa-envelope"></i>
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> Email:{" "}
              <a href="email:osvosloo2@gmail.com">osvosloo2@gmail.com </a>
            </p>
          </div>
          <div className="contact-option">
            <i className="fas fa-phone"></i>
            <p>
              <FontAwesomeIcon icon={faPhone} /> Phone:{" "}
              <a href="tel:+27720123935">(+27) 72 012 3935</a>
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
