import React from "react";
import "../styles/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-brand">
            <img src="/mount-inn-logo.png" alt="Logo" className="logo" />
          </div>

          <nav className="footer-nav">
            <a href="#">About Us</a>
            <a href="#">Amenities</a>
            <a href="#">Gallery</a>
            <a href="#">Packages</a>
            <a href="#">Booking</a>
          </nav>

          <div className="footer-socials">
            <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#"><FontAwesomeIcon icon={faGoogle} /></a>
          </div>

          <div className="footer-contact">
            <div>
              <p>+1 800 123 456</p>
              <p>+1 800 123 456</p>
            </div>
            <div>
              <p>info@domain.com</p>
            </div>
            <div>
              <p>34-D, Greenville, NJ</p>
            </div>
          </div>
        </div>

       
      </footer>
    </div>
  );
}

export default Footer;
