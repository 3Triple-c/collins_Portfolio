

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
        </p>
        <div className="footer-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </footer>
  );
};




const Foter = () => {
  return (
    <footer className="custom-footer">
      <div className="footer-top">
        <div className="footer-left">
          <p className="footer-name">📮 Elias</p>
          <a href="mailto:elias@elias-dev.nl" className="footer-email">elias@elias-dev.nl</a>
          <p className="footer-role">Web designer and front-end developer</p>
        </div>
        <div className="footer-right">
          <p className="footer-media-title">Media</p>
          <div className="footer-icons">
            <a href="#"><i className="fab fa-github"></i></a>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-discord"></i></a>
          </div>
        </div>
      </div>
      <hr className="footer-divider" />
      <p className="footer-bottom">&copy; Copyright 2022. Made by Elias</p>
    </footer>
  );
};


