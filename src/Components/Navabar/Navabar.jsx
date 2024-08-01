import React from "react";
import "./Navbar.css";
import navlogo from "../../assets/nav-logo.svg";
import navProfile from "../../assets/nav-profile.svg";

const Navabar = () => {
  return (
    <div className="navbar">
      <img src={navlogo} alt="img" className="nav-logo" />
      <img src={navProfile} alt="nav-profile" />
    </div>
  );
};

export default Navabar;
