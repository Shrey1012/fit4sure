import React, { useState, useEffect, useRef } from "react";
import "./BMR.css";

const BMR = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [bmrData, setBmrData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const weightInputRef = useRef(null);
  const heightInputRef = useRef(null);
  const ageInputRef = useRef(null);
  const genderInputRef = useRef(null);

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

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowUp" || e.key === "ArrowDown") {
        e.preventDefault();
        const inputs = [
          weightInputRef.current,
          heightInputRef.current,
          ageInputRef.current,
          genderInputRef.current,
        ];
        const currentIndex = inputs.findIndex(
          (ref) => ref === document.activeElement
        );
        const nextIndex =
          (currentIndex + (e.key === "ArrowUp" ? -1 : 1)) % inputs.length;
        const nextInput = inputs[nextIndex];
        if (nextInput) {
          nextInput.focus();
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

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
              ref={weightInputRef}
              autoFocus
            />
          </label>
          <label className="bmr-label">
            Height:
            <input
              className="bmr-input"
              type="text"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              ref={heightInputRef}
            />
          </label>
          <label className="bmr-label">
            Age:
            <input
              className="bmr-input"
              type="text"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              ref={ageInputRef}
            />
          </label>
          <label className="bmr-label">
            Gender:
            <select
              className="bmr-input"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              ref={genderInputRef}
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
