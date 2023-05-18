import React, { useState } from "react";
import "./TDEE.css";

const TDEE = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const [tdeeData, setTdeeData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const calculateTdee = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://mega-fitness-calculator1.p.rapidapi.com/tdee?weight=${weight}&height=${height}&age=${age}&gender=${gender}&activitylevel=${activityLevel}`,
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
      setTdeeData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateTdee();
    setWeight("");
    setHeight("");
    setAge("");
    setGender("");
    setActivityLevel("");
  };

  return (
    <div className="tdee-container">
      <h2 className="tdee-title">TDEE Calculator</h2>
      <form className="tdee-form" onSubmit={handleSubmit}>
        <div className="tdee-input-container">
          <label className="tdee-label">
            Weight:
            <input
              className="tdee-input"
              type="text"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </label>
          <label className="tdee-label">
            Height:
            <input
              className="tdee-input"
              type="text"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </label>
          <label className="tdee-label">
            Age:
            <input
              className="tdee-input"
              type="text"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </label>
          <label className="tdee-label">
            Gender:
            <select
              className="tdee-input"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
          <label className="tdee-label">
            Activity Level:
            <select
              className="tdee-input"
              value={activityLevel}
              onChange={(e) => setActivityLevel(e.target.value)}
            >
              <option value="">Select activity level</option>
              <option value="se">Sedentary</option>
              <option value="la">Lightly active</option>
              <option value="ma">Moderately active</option>
              <option value="va">Very active</option>
              <option value="ea">Extremely active</option>
            </select>
          </label>
        </div>
        <button className="tdee-button" type="submit">
          Calculate TDEE
        </button>
      </form>
      {isLoading && <div className="tdee-message">Loading...</div>}
      {error && <div className="tdee-message">Error: {error}</div>}
      {tdeeData && (
        <div className="tdee-result">
          <p className="tdee-info">TDEE: {tdeeData.info.tdee}</p>
        </div>
      )}
    </div>
  );
};

export default TDEE;
