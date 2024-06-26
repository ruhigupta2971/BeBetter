import React, { useState } from "react";
import "./DonationForm.css";

function DonationForm({ onClose }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNo: "",
    address: "",
    itemType: "",
    message: ""
  });
  const [errors, setErrors] = useState({
    mobileNo: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "mobileNo") {
      const mobileNoPattern = /^[0-9]{0,10}$/;
      if (!mobileNoPattern.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          mobileNo: "Mobile number must be exactly 10 digits."
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          mobileNo: ""
        }));
      }
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.mobileNo.length !== 10) {
      alert("Invalid mobile number!!!");
      return;
    }

    localStorage.setItem("donationData", JSON.stringify(formData));

    // Update donation count
    let donationCount = parseInt(localStorage.getItem("donationCount"), 10) || 0;
    donationCount += 1;
    localStorage.setItem("donationCount", donationCount);

    alert("Donation information submitted successfully!");
    setFormData({
      fullName: "",
      email: "",
      mobileNo: "",
      address: "",
      itemType: "",
      message: ""
    });
  };

  return (
    <div className="donation-form-container">
      <div className="donation-form">
        <h2>Make a Donation</h2>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Full Name"
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <input
            placeholder="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            placeholder="Mobile No."
            type="tel"
            name="mobileNo"
            value={formData.mobileNo}
            onChange={handleChange}
            required
          />
          {errors.mobileNo && <p className="error">{errors.mobileNo}</p>}
          <input
            placeholder="Full Address"
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <input
            placeholder="Item-type"
            type="text"
            name="itemType"
            value={formData.itemType}
            onChange={handleChange}
            required
          />
          <textarea
            placeholder="Describe the type, quantity and quality of item you are donating. Also, write a message you want to give."
            rows="5"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
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
