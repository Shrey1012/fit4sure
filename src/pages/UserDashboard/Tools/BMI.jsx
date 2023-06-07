import React, { useState, useEffect, useRef } from "react";
import "./BMI.css";
import Question from "../../../assets/Question.svg";
import back from "../../../assets/back.svg";

const BMI = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmiData, setBmiData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const weightInputRef = useRef(null);
  const heightInputRef = useRef(null);

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
      console.log(data);
      console.log(weight);
      console.log(height);
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

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        const inputs = [weightInputRef.current, heightInputRef.current];
        const currentIndex = inputs.findIndex(
          (ref) => ref === document.activeElement
        );
  
        if (currentIndex === inputs.length - 1 && weight && height) {
          calculateBmi();
          setWeight("");
          setHeight("");
        } else if (currentIndex + 1 < inputs.length) {
          inputs[currentIndex + 1].focus();
        }
      }
    };
  
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [weight, height]);

  return (
    <div className="bmi-main">
      <div className="bmi-left">
        <div className="bmi-left-top">
          <img src={back} alt="" />
          <h2 className="bmi-title">BMI Calculator</h2>
        </div>

        <form className="bmi-form" onSubmit={handleSubmit}>
          <div className="bmi-input-container">
            <label className="bmi-label">
              <div>Weight: </div>
              <input
                className="bmi-input"
                type="text"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                ref={weightInputRef}
                autoFocus
              />
            </label>

            <label className="bmi-label">
              <div>Height: </div>
              <input
                className="bmi-input"
                type="text"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                ref={heightInputRef}
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
      <div className="bmi-right">
        <div className="bmi-que">
          <img src={Question} alt="" />
          <h2>What is BMI?</h2>
        </div>
        <div className="bmi-ans">
          Lorem ipsum dolor sit amet. Ea obcaecati inventore aut quis galisum ut
          placeat voluptatum nam assumenda facere. Qui omnis quibusdam sit
          galisum quia aut numquam iusto qui sequi harum.
        </div>
      </div>
    </div>
  );
};

export default BMI;
