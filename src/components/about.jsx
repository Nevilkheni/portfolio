import React from "react";
import "../styles/about.css";

function About() {
  return (
    <div className="container">
      <div className="aboutheader">
        <h1>About Us</h1>
        <p>Our Tradition Of Best Hospitality</p>
      </div>

      <div className="about-container">
        <div>
          <img src="/hotel-bar.jpg" alt="About Us" className="imgabout" />
        </div>
        <div className="about-content">
          <h2>24 Years Of Warm Welcome...</h2>
          <h3>
            Aliquam suscipit felis a arcu laoreet congue. Fusce porta euismod
            magna, eu vehicula tellus feugiat ac.
          </h3>
          <h4>
            Phasellus accumsan mauris sit amet urna pretium varius. Aliquam
            suscipit felis a arcu laoreet congue. Habeo nemore appellantur eu
            usu, usu putant adolescens consequuntur ei, mel tempor consulatu
            voluptaria te. Et dicunt qualisque vel, eam ubique mucius docendi
            ne. Debet decore repudiare id mei, homero iuvaret fastidii ius in,
            no mei alienum accusata.F
          </h4>
        </div>
      </div>
    </div>
  );
}

export default About;
