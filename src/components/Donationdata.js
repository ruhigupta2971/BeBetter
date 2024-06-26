import React, { Component } from "react";
import "./Donation.css";
import Don1 from "../assets/books1-removebg.png";
import Don2 from "../assets/books2.jpg";
import DonationForm from "./DonationForm";

class Donationdata extends Component {
  state = {
    showDonationForm: false,
  };

  handleDonateClick = () => {
    this.setState({ showDonationForm: true }, () => {
      document.body.classList.add("disable-scroll");
    });
  };

  handleCloseForm = () => {
    this.setState({ showDonationForm: false }, () => {
      document.body.classList.remove("disable-scroll");
    });
  };

  render() {
    return (
      <div className={this.props.className}>
        <div className="des-text">
          <h2>{this.props.heading}</h2>
          <button onClick={this.handleDonateClick}>Donate Now</button>
          <p>{this.props.text}</p>
        </div>
        <div className="image1">
          <img alt="img" src={this.props.img1} />
        </div>
        <div className="image2">
          <img alt="img" src={this.props.img2} />
        </div>
        {this.state.showDonationForm && (
          <DonationForm onClose={this.handleCloseForm} />
        )}
      </div>
    );
  }
}

export default Donationdata;
