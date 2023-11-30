import React from "react";
import "./Navbar.css";
import logo from "../images/homtel-logo.png";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="header">
      <nav className="navbar">
        <div>
          <img className = "logo" src={logo} alt="logo" />
        </div>
        <ul>
          <Link className="nav-item" to="/">Home</Link>
          <Link className="nav-item" to="/Gallery">Gallery</Link>
          <Link className="nav-item" to="/Contact">Contact Us</Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
