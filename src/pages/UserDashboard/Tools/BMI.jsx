import React, { useState } from "react";
import "./BMI.css";

const BMI = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmiData, setBmiData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const calculateBmi = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://mega-fitness-calculator1.p.rapidapi.com/bmi?weight=${weight}&height=${height}`,
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
      setBmiData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateBmi();
    setWeight("");
    setHeight("");
  };

  return (
    <div className="bmi-container">
      <h2 className="bmi-title">BMI Calculator</h2>
      <form className="bmi-form" onSubmit={handleSubmit}>
        <div className="bmi-input-container">
          <label className="bmi-label">
            Weight:
            <input
              className="bmi-input"
              type="text"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </label>
          <label className="bmi-label">
            Height:
            <input
              className="bmi-input"
              type="text"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </label>
        </div>
        <button className="bmi-button" type="submit">
          Calculate BMI
        </button>
      </form>
      {isLoading && <div className="bmi-message">Loading...</div>}
      {error && <div className="bmi-message">Error: {error}</div>}
      {bmiData && (
        <div className="bmi-result">
          <p className="bmi-info">BMI: {bmiData.info.bmi}</p>
          <p className="bmi-info">
            Body Weight Condition: {bmiData.info.health}
          </p>
        </div>
      )}
    </div>
  );
};

export default BMI;
