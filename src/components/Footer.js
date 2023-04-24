import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1> Be Better</h1>
          <p>Do Better, Feel Good</p>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h2>Contact Us</h2>
          <div className="contact">
            <a href="/">
              <i className="fa-solid fa-phone"></i>+91 ----------
            </a>
            <a href="/">
              <i className="fa-solid fa-map-location-dot"></i>--------------
            </a>
            <a href="/">
              <i className="fa-solid fa-envelope"></i>abc@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className="social">
        <a href="/">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="/">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a href="/">
          <i className="fa-brands fa-youtube"></i>
        </a>
        <a href="/">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="/">
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
