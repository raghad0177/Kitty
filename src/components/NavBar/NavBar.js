import React, { useState } from "react";
import logo from "./LogoKittyCorner.jpg";
import AdoptionModale from "../AdoptionModal/AdoptionModal";
import './NavBar.css';

export default function NavBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="header">
      <ul>
        <li>
          <img src={logo} alt="Cat Logo" />
        </li>
        <li className="pop-up">
          <button onClick={openModal} className="add-kitten-button">
            Bring a Cat Home
          </button>
        </li>
      </ul>
      <AdoptionModale isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
