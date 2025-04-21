import React from "react";
import "../styles/Gallery.css";

function Gallery() {
  return (
    <div className="container">
      <div className="gallery-container">
        <div className="gallery">
          <h1>Gallery</h1>
          <p>Peek Into Our World</p>
        </div>
        <div className="gallery-images">
          <img src="/hotel-glasses.jpg" alt="" />
          <img src="/slide1-free-img.jpg" alt="" />
          <img src="/slide5-free-img.jpg" alt="" />
          <img src="/hotel-dish.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
