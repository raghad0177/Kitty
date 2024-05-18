import React, { useState } from "react";
import Modal from "react-modal";
import "./AdoptionModal.css";

Modal.setAppElement('#root'); // Set the app element for accessibility

const AdoptionModale = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [origin, setOrigin] = useState("");
  const [temperament, setTemperament] = useState("");
  const [color, setColor] = useState("");
  const [overview, setOverview] = useState("");
  const [imageSrc, setImageSrc] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImageSrc(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <h2>Add a Cat for Adoption</h2>
      <form>
        <div className="form-group">
          <label>
            Name:
            <input
              type="text"
              className="form-control"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Origin:
            <input
              type="text"
              className="form-control"
              name="origin"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Temperament:
            <input
              type="text"
              className="form-control"
              name="temperament"
              value={temperament}
              onChange={(e) => setTemperament(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Color:
            <input
              type="color"
              className="form-control"
              name="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Overview:
            <textarea
              className="form-control"
              name="overview"
              value={overview}
              onChange={(e) => setOverview(e.target.value)}
            ></textarea>
          </label>
        </div>
        <div className="form-group">
          <label>
            Image:
            <input
              type="file"
              accept="image/*"
              className="form-control"
              name="image"
              onChange={handleFileInputChange}
            />
          </label>
        </div>
        {imageSrc && <img src={imageSrc} alt="Uploaded" />}
        <div className="form-group">
          <label>
            Age:
            <input
              type="number"
              className="form-control"
              name="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Gender:
            <select
              className="form-control"
              name="gender"
              value={gender}
              onChange={handleGenderChange}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Meow
        </button>
        <button type="button" className="btn btn-secondary" onClick={onClose}>
          Cancel
        </button>
      </form>
    </Modal>
  );
};

export default AdoptionModale;
