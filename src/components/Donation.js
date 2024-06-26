import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Donationdata from "./Donationdata";
import Don1 from "../assets/books1-removebg.png";
import Don2 from "../assets/books2.jpg";
import Don3 from "../assets/fooD-removebg-preview.png";
import Don4 from "../assets/food3.jpg";
import Don5 from "../assets/clothesD-removebg-preview.png";
import Don6 from "../assets/clothes2.jpg";
import "./Donation.css";

const Donation = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("logged_in_user"));
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleDashboardClick = () => {
    navigate("/dashboard");
  };

  return (
    <div className="donation">
      {isLoggedIn && <button className="dashboard-button" onClick={handleDashboardClick}>Dashboard</button>}
      <h1>
        Welcome To <mark className="yellow">Be Better</mark> Community
      </h1>
      <h2>
        "We believe that we can spread more <mark className="red">Smiles</mark> with
        you, and <mark className="yellow">Be Better</mark> with you"
      </h2>
      <hr
        style={{
          background: "#B1B3B3",
          height: "0.5px",
          border: "none",
        }}
      />
      <Donationdata
        className="first-des"
        heading="Books Donation"
        text=""
        img1={Don1}
        img2={Don2}
      />

      <Donationdata
        className="first-des-reverse"
        heading="Food Donation"
        text=""
        img1={Don3}
        img2={Don4}
      />

      <Donationdata
        className="first-des"
        heading="Clothes Donation"
        text=""
        img1={Don5}
        img2={Don6}
      />
    </div>
  );
};

export default Donation;
