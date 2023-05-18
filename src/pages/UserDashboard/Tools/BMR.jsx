import React, { useState } from "react";
import "./BMR.css";

const BMR = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [bmrData, setBmrData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const calculateBmr = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://mega-fitness-calculator1.p.rapidapi.com/bmr?weight=${weight}&height=${height}&age=${age}&gender=${gender}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-RapidAPI-Key":
              "40b843d9e4msh0584f48c64d6712p1982cdjsn38d63d3ad848",
            "X-RapidAPI-Host": "mega-fitness-calculator1.p.rapidapi.com",
          },
        }
      );

      const data = await response.json();
      setBmrData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateBmr();
    setWeight("");
    setHeight("");
    setAge("");
    setGender("");
  };

  return (
    <div className="bmr-container">
      <h2 className="bmr-title">BMR Calculator</h2>
      <form className="bmr-form" onSubmit={handleSubmit}>
        <div className="bmr-input-container">
          <label className="bmr-label">
            Weight:
            <input
              className="bmr-input"
              type="text"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </label>
          <label className="bmr-label">
            Height:
            <input
              className="bmr-input"
              type="text"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </label>
          <label className="bmr-label">
            Age:
            <input
              className="bmr-input"
              type="text"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </label>
          <label className="bmr-label">
            Gender:
            <select
              className="bmr-input"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
        </div>
        <button className="bmr-button" type="submit">
          Calculate BMR
        </button>
      </form>
      {isLoading && <div className="bmr-message">Loading...</div>}
      {error && <div className="bmr-message">Error: {error}</div>}
      {bmrData && (
        <div className="bmr-result">
          <p className="bmr-info">BMR: {bmrData.info.bmr}</p>
        </div>
      )}
    </div>
  );
};

export default BMR;
