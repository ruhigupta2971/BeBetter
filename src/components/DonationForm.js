import React, { useState } from "react";
import "./DonationForm.css";

function DonationForm({ onClose }) {
  return (
    <div className="donation-form-container">
      <div className="donation-form">
        <h2>Make a Donation</h2>
        <form>
          <input placeholder="Full Name" type="text" required />
          <input placeholder="Email" type="email" required />
          <input placeholder="Mobile No." type="tel" required />
          <input placeholder="Full Address" type="text" required />
          <input placeholder="Item-type" type="text" required />
          <textarea placeholder="Message" rows="4"></textarea>
          <button type="submit">Donate</button>
        </form>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default DonationForm;
