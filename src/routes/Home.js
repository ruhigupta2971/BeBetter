import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Donation from "../components/Donation";
import Stories from "../components/Stories";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        title="LEND THE HELPING HAND"
      />
      <Donation />
      <Stories />
      <Footer />
    </>
  );
}

export default Home;
