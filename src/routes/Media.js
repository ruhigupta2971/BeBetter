import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import MediaImg from "../assets/media.png";
import Stories from "../components/Stories";
import Footer from "../components/Footer";

function Media() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero cName="hero-mid" heroImg={MediaImg} text="" />
      <Stories />
      <Footer />
    </>
  );
}

export default Media;
