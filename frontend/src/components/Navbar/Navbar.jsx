import { useState } from "react";
import { PhoneIcon, Menu, X } from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navbar">
      {/* Left Section */}
      <div className="navbar-left">
      <img src="./src/assets/logo.png" alt="logo" className="gg-logo" />
        <h3>THE <span className="main-logo1"> GROWTH</span> <span className="main-logo2">GARAGE</span></h3>
      </div>

      {/* Hamburger Icon (visible on mobile) */}
      <div
        className="mob-ham"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      {/* Center Section */}
      <div className={`navbar-center ${isMenuOpen ? "active" : ""}`}>
        <ul className="nav-main">
          <li className="nav-list">About Us</li>
          <li>Services</li>
          <li>Work</li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="navbar-right">
        <div className="contact-info">
          <PhoneIcon className="phone-icon" />
          <span className="right-nav-mob">+1 (234) 567-890</span>
        </div>
        <div>
          <button className="right-nav-btn">Let's Grow Now</button>
        </div>
      </div>
    </div>
  );
}
