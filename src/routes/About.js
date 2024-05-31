import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import AboutImg from "../assets/about.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function About() {
  const [donationCount, setDonationCount] = useState(0);

  useEffect(() => {
    const count = localStorage.getItem("donationCount") || 0;
    setDonationCount(parseInt(count, 10));
  }, []);

  return (
    <>
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        text={`People Helped By Your Donation: ${donationCount}`}
      />
      <ContactForm />
      <Footer />
    </>
  );
}

export default About;
