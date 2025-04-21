import React from "react";
import "../styles/header.css";
import About from "./about";
import Amenities from "./Amenities";
import Gallery from "./Gallery";
import Packages from "./Packages";
import Booking from "./Booking";
import Footer from "./footer";


const Header = () => {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  function App() {
    return (
      <>
        <Header />
        <div id="about-us"><About /></div>
        <div id="amenities"><Amenities /></div>
        <div id="gallery"><Gallery /></div>
        <div id="packages"><Packages /></div>
        <div id="booking"><Booking /></div>
        <Footer />
      </>
    );
  }
  

  return (
    <div className="header-container">
      <header className="header">
        <div className="logo-header">
          <img src="/mount-inn-logo.png" alt="Logo" className="logo" />
        </div>

        <nav className="nav">
          <ul className="nav-list">
            <li>
              <a href="#about-us" onClick={(e) => handleScroll(e, "about-us")}>About Us</a>
            </li>
            <li>
              <a href="#amenities" onClick={(e) => handleScroll(e, "amenities")}>Amenities</a>
            </li>
            <li>
              <a href="#gallery" onClick={(e) => handleScroll(e, "gallery")}>Gallery</a>
            </li>
            <li>
              <a href="#packages" onClick={(e) => handleScroll(e, "packages")}>Packages</a>
            </li>
            <li>
              <a href="#booking" onClick={(e) => handleScroll(e, "booking")}>Booking</a>
            </li>
          </ul>
        </nav>

        <div>
          <h1 className="contant">The Mount Inn</h1>
        </div>
        <div>
          <p className="headercontant">
            Awarded Spa Resort and BnB in Greenville, New Jersey
          </p>
        </div>
        <button className="header-button">→ MAKE AN ENQUIRY</button>
      </header>
    </div>
  );
};

export default Header;
