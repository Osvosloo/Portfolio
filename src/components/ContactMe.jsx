import { useRef } from "react";
import ".././styles/ContactMe.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const form = useRef();
  const emailServiceID = import.meta.env.VITE_EMAIL_SERVICE;
  const emailTemplateID = import.meta.env.VITE_EMAIL_TEMPLATE;
  const emailPublicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;
  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(emailServiceID, emailTemplateID, form.current, {
        publicKey: emailPublicKey,
      })
      .then(
        () => {
          console.log(
            `SUCCESS! + ${(emailServiceID, emailTemplateID, emailPublicKey)}`
          );
          alert("Form submitted!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Form submition failed!");
        }
      );
  };

  return (
    <section className="contact-me">
      <div className="contact-content">
        <h2>Let&apos;s chat</h2>
        <div className="contact-options">
          <div className="contact-option">
            <i className="fas fa-phone"></i>
            <p>
              <FontAwesomeIcon icon={faPhone} />{" "}
              <a href="tel:+27720123935">(+27) 72 012 3935</a>
            </p>
            <i className="fas fa-envelope"></i>
            <p>
              <FontAwesomeIcon icon={faEnvelope} />{" "}
              <a href="email:osvosloo2@gmail.com">osvosloo2@gmail.com </a>
            </p>
          </div>
        </div>
        <form ref={form} onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="from_name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="from_email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit" className="submit-button">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
