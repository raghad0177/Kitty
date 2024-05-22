import React, { useState } from "react";
import logo from "../../images/LogoKittyCorner.jpg";
import AdoptionModal from "../AdoptionModal/AdoptionModal";
import "./NavBar.css";

export default function NavBar(props) {


  const scrollToAboutUs = () => {
    const aboutUsSection = document.getElementById('aboutUsSection');
    if (aboutUsSection) {
      const offsetPosition = aboutUsSection.offsetTop -  200;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
  return (
    <div className="header">
      <ul>
        <li>
          <img src={logo} alt="Cat Logo" />
        </li>
        <li className="pop-up">
          <button onClick={props.onClick} className="add-kitten-button">
            Bring a Cat Home
          </button>
        </li>
      </ul>
      <button id="AboutUs" onClick={scrollToAboutUs}>
        About Us
      </button>
    </div>
  );
}
