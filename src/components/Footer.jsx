import React from "react";
import ".././styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Vossie. </p>
      <div className="social-icons">
        <a
          href="https://twitter.com/YourCompany"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faXTwitter} />
        </a>
        <a
          href="https://linkedin.com/company/YourCompany"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        {/* Add more social media icons as needed */}
      </div>
    </footer>
  );
};

export default Footer;
