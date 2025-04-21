import React from "react";
import "../styles/Booking.css";

function Booking() {
  return (
    <div className="container">
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-form-box">
            <h2>Ask Your Queries</h2>
            <form>
              <input type="text" placeholder="Name*" required />
              <input type="email" placeholder="Email*" required />
              <textarea rows="4" placeholder="Message"></textarea>
              <button type="submit" className="btn-send">
                SEND
              </button>
            </form>
          </div>

          <div className="contact-info-box">
            <h2>Ask Your Queries</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className="divider">
              <span>Or</span>
            </div>
            <a href="#" className="btn-booking">
              ➡ MAKE A BOOKING
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Booking;
