import "./Navbar.css";
import PhoneIcon from "@mui/icons-material/Phone";

const Navbar = () => {
  return (
    // <div className="nav-container">
    //   <h3 className="main-title">The Growth Garage</h3>
    //   <ul className="nav-main">
    //     <li className="nav-list">About Us</li>
    //     <li>Services</li>
    //     <li>Work</li>
    //   </ul>
    //   <div className="right-nav">
    //     <div>
    //       <PhoneIcon className="phone-icon" />
    //       <span className="right-nav-mob">+1 (234) 567-890</span>
    //     </div>
    //     <div>
    //       <button className="right-nav-btn">Let's Grow Now</button>
    //     </div>
    //   </div>
    // </div>
  <div className="navbar">
  <div className="navbar-left">
    <h3>The Growth Garage</h3>
  </div>

  <div className="navbar-center">
    <ul className="nav-main">
      <li className="nav-list">About Us</li>
      <li>Services</li>
      <li>Work</li>
    </ul>
  </div>

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
};

export default Navbar;
