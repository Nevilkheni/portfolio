import React from "react";
import "../styles/header.css";

const Header = () => {
  return (
    <div className="header-container">
      <header className="header">
        <div className="logo-header">
          <img src="/mount-inn-logo.png" alt="Logo" className="logo" />
        </div>
        <div>
          <nav className="nav">
            <ul className="nav-list">
              <li>
                <a href="#about-us">About Us</a>
              </li>
              <li>
                <a href="#amenities">Amenities</a>
              </li>
              <li>
                <a href="#gallery">Gallery</a>
              </li>
              <li>
                <a href="#packages">Packages</a>
              </li>
              <li>
                <a href="#booking">Booking</a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
            <h1 className="contant">The Mount Inn</h1>
        </div>
        <div>
            <p className="headercontant">Awarded Spa Resort and BnB in Greenville, New Jersey</p>
        </div>
        <button className="header-button">→ MAKE AN ENQUIRY</button>
      </header>
    </div>
  );
};

export default Header;
