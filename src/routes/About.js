import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/about.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        text="People Helped By Your Donation"
      />
      <ContactForm />
      <Footer />
    </>
  );
}

export default About;
