import React from "react";
import "../styles/Packages.css";

function Packages() {
  return (
    <div className="packages">
      <div className="packages-title">
        <h1>Packages</h1>
        <p>Choice Of Rooms</p>
      </div>

      <div class="room-grid">
        <div class="room-card">
          <img src="/hotel-single-room.jpg" alt="Single Room" />
          <div class="room-info">
            <h3>Single Room</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div class="room-icons">🍽️ 📶 🛏️ 🗑️</div>
          </div>
        </div>

        <div class="room-card">
          <img src="/executive-suite-free-img.jpg" alt="Executive Suite" />
          <div class="room-info">
            <h3>Executive Suite</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div class="room-icons">🍽️ 📶 🛏️ 🍺</div>
          </div>
        </div>

        <div class="room-card">
          <img src="/double-room-free-img.jpg" alt="Double Room" />
          <div class="room-info">
            <h3>Double Room</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div class="room-icons">🍽️ 📶 🛏️ 🗑️</div>
          </div>
        </div>

        <div class="room-card">
          <img src="/duplex-suite-free-img.jpg" alt="Duplex Suite" />
          <div class="room-info">
            <h3>Duplex Suite</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div class="room-icons">🍽️ 📶 🛏️ 🍺 🍴</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Packages;
