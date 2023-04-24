import { Component } from "react";
import "./Donation.css";
import Don1 from "../assets/books1-removebg.png";
import Don2 from "../assets/books2.jpg";

class Donationdata extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="des-text">
          <h2>{this.props.heading}</h2>
          <button>Donate Now</button>
          <p> {this.props.text} </p>
        </div>
        <div className="image1">
          <img alt="img" src={this.props.img1} />
        </div>
        <div className="image2">
          <img alt="img" src={this.props.img2} />
        </div>
      </div>
    );
  }
}

export default Donationdata;
