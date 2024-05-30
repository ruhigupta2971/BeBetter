import React from "react";
import "./DonateNow.css";

function DonateNow() {
  return (
    <div className="form-container">
      <h1>Donation Details</h1>
      <form>
        <input placeholder="Name" type="text" required />
        <input placeholder="Email" type="email" required />
        <input placeholder="Mobile No." type="tel" required />
        <input placeholder="Donation Items" type="text" required />
        <input placeholder="Address" type="text" required />
        <textarea placeholder="Message" row="4"></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default DonateNow;
