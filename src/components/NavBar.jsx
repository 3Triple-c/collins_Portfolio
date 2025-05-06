import { Link } from "react-router-dom";
import "../css/NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="img-brand">
        <Link to="/" className="navbar-logo">
          Collins <img src="/images/logo.png" className="logo" />
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">
          <span className="hash">#</span>home
        </Link>
        <Link to="/about" className="navbar-link">
          <span className="hash">#</span>about
        </Link>
        <Link to="/works" className="navbar-link">
          <span className="hash">#</span>works
        </Link>
        <Link to="/contact" className="navbar-link">
          <span className="hash">#</span>contact
        </Link>
      </div>
    </nav>
  );
}
export default NavBar;
