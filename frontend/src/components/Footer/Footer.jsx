import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* ---------- Company Info ---------- */}
        <div className="footer-col">
          <h2 className="footer-logo">
            <span className="logo-main">THE</span> <span className="growth"> GROWTH</span><span className="garage">GARAGE</span>
          </h2>
          <p className="footer-desc">
            Helping businesses accelerate their growth through creative design,
            digital marketing, and innovative web solutions.
          </p>
          <div className="footer-socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>

        {/* ---------- Quick Links ---------- */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#work">Our Work</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* ---------- Our Services ---------- */}
        <div className="footer-col">
          <h3>Our Services</h3>
          <ul>
            <li><a href="#services">Full Stack Development</a></li>
            <li><a href="#services">SEO & Marketing</a></li>
            <li><a href="#services">UI/UX Design</a></li>
            <li><a href="#services">AI Tools</a></li>
            <li><a href="#services">Video Editing</a></li>
          </ul>
        </div>

        {/* ---------- Get In Touch ---------- */}
        <div className="footer-col">
          <h3>Get In Touch</h3>
          <ul className="contact-info">
            <li><FaLocationDot /> Ghaziabad, Uttar Pradesh, India</li>
            <li style={{ marginRight: "93px" }}><FaPhone /> +91 8604050163</li>
            <li><FaEnvelope /> thegrowthgarage@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* ---------- Bottom Bar ---------- */}
      <div className="footer-bottom">
        <p>© {year} The Growth Garage. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
