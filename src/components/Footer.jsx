import "../css/Footer.css";
import { FaGoogle } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
function Footer() {
  return (
    <>
      <footer className="footer-footer">
        <div class="footer-line"></div>
        <div className="footer">
          <div className="footer-content1">
            <h2>collins</h2>
            <a href="mailto:elias@elias-dev.nl" className="footer-email">
              collinchukss@gmail.com
            </a>
          </div>
          <div className="footer-content2">
            <h3>Media</h3>
            <div className="footer-icons">
              <a
                href="https://wa.me/2348101582544?text=Hello%20there!"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="whatsapp">
                  <FaWhatsapp className="whatsapp-icon" />
                </div>
              </a>
              <a
                href="mailto:collinchukss@gmail.com?subject=Hello&body=I%20want%20to%20contact%20you"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="footer-gmail">
                  <FaGoogle className="google-icon" />
                </div>
              </a>
            </div>
          </div>
        </div>
        <p className="footer-bottom">&copy; Copyright 2025. Made by Collins</p>
      </footer>
    </>
  );
}
export default Footer;
