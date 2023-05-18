import React, { useState } from "react";
import "./BFP.css";

const BFP = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [bfpData, setBfpData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const calculateBfp = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://mega-fitness-calculator1.p.rapidapi.com/bfp?weight=${weight}&height=${height}&age=${age}&gender=${gender}`,
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
      setBfpData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateBfp();
    setWeight("");
    setHeight("");
    setAge("");
    setGender("");
  };

  return (
    <div className="bfp-container">
      <h2 className="bfp-title">BFP Calculator</h2>
      <form className="bfp-form" onSubmit={handleSubmit}>
        <div className="bfp-input-container">
          <label className="bfp-label">
            Weight:
            <input
              className="bfp-input"
              type="text"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </label>
          <label className="bfp-label">
            Height:
            <input
              className="bfp-input"
              type="text"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </label>
          <label className="bfp-label">
            Age:
            <input
              className="bfp-input"
              type="text"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </label>
          <label className="bfp-label">
            Gender:
            <select
              className="bfp-input"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
        </div>
        <button className="bfp-button" type="submit">
          Calculate BFP
        </button>
      </form>
      {isLoading && <div className="bfp-message">Loading...</div>}
      {error && <div className="bfp-message">Error: {error}</div>}
      {bfpData && (
        <div className="bfp-result">
          <p className="bfp-info">BFP: {bfpData.info.bfp}</p>
          <p className="bfp-info">Fat mass: {bfpData.info.fat_mass}</p>
          <p className="bfp-info">Lean Mass: {bfpData.info.lean_mass}</p>
          <p className="bfp-info">Health Status: {bfpData.info.description}</p>
        </div>
      )}
    </div>
  );
};

export default BFP;
