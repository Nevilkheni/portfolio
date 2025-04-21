import React from "react";
import "../styles/Amenities.css";

function Amenities() {
  return (
    <>
      <div className="amenities">
        <div className="amenities-header">
          <h1>Amenities</h1>
          <p>Providing Hospitality the Correct Way</p>
        </div>

        <div className="amenities-content">
          <div>
            <img src="/beer.svg" alt="About Us" className="imgamenities" />
            <p>Home Brewery</p>
          </div>
          <div>
            <img src="/coffee.svg" alt="About Us" className="imgamenities" />
            <p>Coffee Bar</p>
          </div>
          <div>
            <img src="/restaurant-icon.svg" alt="About Us" className="imgamenities" />
            <p>Restaurant</p>
          </div>
          <div>
            <img src="/room-service.svg" alt="About Us" className="imgamenities" />
            <p>Room Service</p>
          </div>
          <div>
            <img src="/reception.svg" alt="About Us" className="imgamenities" />
            <p>24x7 Reception</p>
          </div>
          <div>
            <img src="/car-rental.svg" alt="About Us" className="imgamenities" />
            <p>Car Rental</p>
          </div>
          <div>
            <img src="/hair-dryer.svg" alt="About Us" className="imgamenities" />
            <p>Hair Dryer</p>
          </div>
          <div>
            <img src="/wifi-connection.svg" alt="About Us" className="imgamenities" />
            <p>Secure Wi-Fi</p>
          </div>
        </div>

        <div className="grid">
          <div className="item linens">Linens</div>
          <div className="item toiletries">Toiletries</div>
          <div className="item breakfast">Breakfast</div>
          <div className="item pool">Swimming Pool</div>
          <div className="item spa">Wellness Spa</div>
          <div className="item dining">Fine Dining</div>
          <div className="item bar">In-house Bar</div>
          <div className="item banquet">Banquet Hall</div>
        </div>
      </div>

      <div className="amenities-img">
        <div className="overlay-content">
          <div className="overlay-text">
            <h1>Escape To The Luxury This Summer</h1>
            <p>
              Habeo nemore appellantur eu usu, usu putant adolescens
              consequuntur ei, mel tempor consulatu voluptaria te. Et dicunt
              qualisque vel, eam ubique mucius docendi ne. Debet decore
              repudiare id mei, homero iuvaret fastidii ius in, no mei alienum
              accusata.
            </p>
          </div>
          <a href="#" className="hero-btn">➜ MAKE AN ENQUIRY</a>
        </div>
      </div>
    </>
  );
}

export default Amenities;
