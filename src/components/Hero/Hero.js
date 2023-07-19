import React from "react";
import "./Hero.css";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/contact");
  };

  return (
    <div className="hero" id="hero">
      <div className="content">
        <div className="text-container">
          <p>Affordable. Luxury. Comfort.</p>
          <button onClick={handleButtonClick} className="button">
            BOOK NOW
          </button>
        </div>
      </div>
      <div className="overlay-image"></div>
    </div>
  );
};
export default Hero;
