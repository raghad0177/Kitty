import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Select from "react-select";
import axios from "axios";
import './AdoptionModal.css';

function AdoptionModal(props) {
  const [year, setYear] = useState(0);
  const [month, setMonth] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [options, setOptions] = useState([]);
  const [name, setName] = useState("");
  const [selectedColor, setSelectedColor] = useState(null);
  const [gender, setGender] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [temperament, setTemperament] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [errors, setErrors] = useState({});

  //Api For Countries
  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      const response = await fetch("https://freetestapi.com/api/v1/countries");
      const data = await response.json();
      const countriesOptions = data.map((country) => ({
        value: country.name,
        label: country.name,
      }));
      setOptions(countriesOptions);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  //Handle Save Changes
  const handleSaveChanges = async () => {
    // Validation logic
    const newErrors = {};
    if (!name) newErrors.name = "Cat name is required.";
    if (!selectedOption) newErrors.origin = "Origin is required.";
    if (!selectedColor) newErrors.color = "Color is required.";
    if (year < 0) newErrors.year = "Year must be a positive number.";
    if (month < 0 || month > 11) newErrors.month = "Month must be between 0 and 11.";
    if (!gender) newErrors.gender = "Gender is required.";
    if (!imageUrl) newErrors.imageUrl = "Image URL is required.";
    if (!temperament) newErrors.temperament = "Temperament is required.";
    if (!contactNumber) newErrors.contactNumber = "Contact number is required.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const catData = {
        name,
        origin: selectedOption?.value,
        color: selectedColor?.value,
        age: `${year} Years and ${month} Months`,
        gender,
        image: imageUrl,
        temperament,
        phone: contactNumber,
      };
      //This For adding cats to the database
      try {
        await axios.post("https://serverpro-1.onrender.com/addCat", catData);
        props.handleClose();
      } catch (error) {
        console.error("Error saving cat data:", error);
      }
    }
  };

  const colors = [
    { value: "black", label: "Black" },
    { value: "white", label: "White" },
    { value: "gray", label: "Gray" },
    { value: "brown", label: "Brown" },
    { value: "ginger", label: "Ginger (Orange)" },
    { value: "tabby", label: "Tabby (Striped)" },
    { value: "calico", label: "Calico (Multi-colored)" },
    { value: "tortoiseshell", label: "Tortoiseshell" },
    { value: "siamese", label: "Siamese" },
    { value: "tuxedo", label: "Tuxedo" },
  ];

  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton style={{ backgroundColor: "#f8588d" }}>
          <Modal.Title style={{ fontSize: "30px", fontFamily: "Monospace" }}>
            Bring a Cat Home
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#fa91b4" }}>
          <Form>
            <Form.Group className="mb-3" controlId="formCatName">
              <Form.Label style={{ fontSize: "20px", fontFamily: "Monospace" }}>
                Cat Name
              </Form.Label>
              <Form.Control
                type="text"
                style={{ fontFamily: "Monospace" }}
                placeholder="Enter cat name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formOrigin">
              <Form.Label style={{ fontSize: "20px", fontFamily: "Monospace" }}>
                Origin
              </Form.Label>
              <Select
                style={{ fontFamily: "Monospace" }}
                options={options}
                value={selectedOption}
                onChange={setSelectedOption}
                isInvalid={!!errors.origin}
              />
              {errors.origin && <div className="invalid-feedback">{errors.origin}</div>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formColor">
              <Form.Label style={{ fontSize: "20px", fontFamily: "Monospace" }}>
                Color
              </Form.Label>
              <Select
                style={{ fontFamily: "Monospace" }}
                options={colors}
                value={selectedColor}
                onChange={setSelectedColor}
                isInvalid={!!errors.color}
              />
              {errors.color && <div className="invalid-feedback">{errors.color}</div>}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontSize: "20px", fontFamily: "Monospace" }}>
                Age
              </Form.Label>
              <div>
                <input
                  style={{
                    width: "45px",
                    height: "25px",
                    fontFamily: "Monospace",
                  }}
                  type="number"
                  value={year}
                  onChange={(e) => setYear(parseInt(e.target.value))}
                  isInvalid={!!errors.year}
                />
                <span style={{ fontFamily: "Monospace" }}> Years </span>
                <input
                  style={{
                    width: "45px",
                    height: "25px",
                    fontFamily: "Monospace",
                  }}
                  type="number"
                  value={month}
                  onChange={(e) => setMonth(parseInt(e.target.value))}
                  isInvalid={!!errors.month}
                />
                <span style={{ fontFamily: "Monospace" }}> Months</span>
              </div>
              {errors.year && <div className="invalid-feedback">{errors.year}</div>}
              {errors.month && <div className="invalid-feedback">{errors.month}</div>}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label style={{ fontSize: "20px", fontFamily: "Monospace" }}>
                Select the gender:
              </Form.Label>
              <br />
              <Form.Check
                type="radio"
                label="Male"
                name="gender"
                id="male"
                value="male"
                style={{ fontFamily: "Monospace" }}
                onChange={(e) => setGender(e.target.value)}
                isInvalid={!!errors.gender}
              />
              <Form.Check
                type="radio"
                label="Female"
                name="gender"
                id="female"
                value="female"
                style={{ fontFamily: "Monospace" }}
                onChange={(e) => setGender(e.target.value)}
                isInvalid={!!errors.gender}
              />
              {errors.gender && <div className="invalid-feedback">{errors.gender}</div>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formImageUrl">
              <Form.Label style={{ fontSize: "20px", fontFamily: "Monospace" }}>
                Image URL
              </Form.Label>
              <Form.Control
                type="text"
                style={{ fontFamily: "Monospace" }}
                placeholder="Enter image URL"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                isInvalid={!!errors.imageUrl}
              />
              <Form.Control.Feedback type="invalid">
                {errors.imageUrl}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formTemperament">
              <Form.Label style={{ fontSize: "20px", fontFamily: "Monospace" }}>
                Temperament
              </Form.Label>
              <Form.Control
                as="textarea"
                style={{ fontFamily: "Monospace" }}
                rows={3}
                value={temperament}
                onChange={(e) => setTemperament(e.target.value)}
                isInvalid={!!errors.temperament}
              />
              <Form.Control.Feedback type="invalid">
                {errors.temperament}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formContactNumber">
              <Form.Label style={{ fontSize: "20px", fontFamily: "Monospace" }}>
                Contact Number
              </Form.Label>
              <Form.Control
                type="text"
                style={{ fontFamily: "Monospace" }}
                placeholder="Enter Phone Number"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                isInvalid={!!errors.contactNumber}
              />
              <Form.Control.Feedback type="invalid">
                {errors.contactNumber}
              </Form.Control.Feedback>
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer style={{ backgroundColor: "#f8588d" }}>
          <Button
            variant="secondary"
            className="add-kitten-button"
            style={{
              fontFamily: "Monospace",
              marginRight: "auto",
              backgroundColor: "gray",
            }}
            onClick={props.handleClose}
          >
            Close
          </Button>
          <Button
            className="add-kitten-button"
            onClick={handleSaveChanges}
            style={{ fontFamily: "Monospace", backgroundColor: "#28a745" }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AdoptionModal;
