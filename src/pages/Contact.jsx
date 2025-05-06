import "../css/Contact.css";
import { FaGoogle } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
function Contact() {
  return (
    <>
      <div className="about-header">
        <h2>
          <span className="hash">/</span>contact-me
        </h2>
        who am i
      </div>
      <div className="about-wrapper">
        <p className="about-me">
          I’m interested in freelance opportunities. However, if you have other
          request or question, don’t hesitate to contact me
        </p>

        <div className="message">
          <p className="mes-me">Message me</p>
          <a
            href="https://wa.me/2348101582544?text=Hello%20there!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="whatsapp">
              <FaWhatsapp className="whatsapp-icon" /> +23408101582544
            </div>
          </a>
          <a
            href="mailto:collinchukss@gmail.com?subject=Hello&body=I%20want%20to%20contact%20you"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="gmail">
              <FaGoogle className="google-icon" /> collinchukss@gmail.com
            </div>
          </a>
        </div>
      </div>
      <div className="media-header">
        <div className="media-title">
          <h2>
            <span className="hash">#</span>all-media
          </h2>
        </div>
        <div className="social-media">
          <a
            href="https://www.instagram.com/3tri.ple_c/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="instagram-icon" />
          </a>
          <a
            href=" https://github.com/3Triple-c"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="github-icon" />
          </a>
        </div>
      </div>
    </>
  );
}
export default Contact;
