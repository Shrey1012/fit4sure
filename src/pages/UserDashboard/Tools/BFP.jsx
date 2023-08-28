import React, { useState, useEffect, useRef } from "react";
import "./BFP.css";
import Question from '../../../assets/Question.svg'
import double_next from '../../../assets/double_next.svg'
import { useNavigate, useLocation } from "react-router-dom";
import Cookies from 'js-cookie';


const BFP = () => {
  const [weight, setWeight] = useState(() => Cookies.get("weight") || "");
  const [height, setHeight] = useState(() => Cookies.get("height") || "");
  const [age, setAge] = useState(() => Cookies.get("age") || "");
  const [gender, setGender] = useState(() => Cookies.get("gender") || "");
  const [bfpData, setBfpData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const weightInputRef = useRef(null);
  const heightInputRef = useRef(null);
  const ageInputRef = useRef(null);
  const genderInputRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

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
  };

  useEffect(() => {
    Cookies.set("weight", weight, { expires: 365 });
    Cookies.set("height", height, { expires: 365 });
    Cookies.set("age", age, { expires: 365 });
    Cookies.set("gender", gender, { expires: 365 });

  }, [weight, height, age, gender]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        const inputs = [weightInputRef.current, heightInputRef.current, ageInputRef.current, genderInputRef.current];
        const currentIndex = inputs.findIndex(
          (ref) => ref === document.activeElement
        ); 
  
        if (currentIndex === inputs.length - 1 && weight && height && age && gender) {
          calculateBfp();
        } else if (currentIndex + 1 < inputs.length) {
          inputs[currentIndex + 1].focus();
        }
      }
    };
  
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [weight, height,age,gender]);

  const handleCalculate = () => {
    const Link = location.pathname.includes("/trackers")
      ? "/trackers/tdee"
      : "/tdee";
    navigate(Link);
  };

  return (
    <div className="bmi-main">
      <div className="bmi-left">
      <form className="bmi-form" onSubmit={handleSubmit}>
        <div className="bmi-left-top">
          <h2 className="bmi-title">BFP Calculator</h2>
        </div>
        <div className="bmi-input-container">
          <label className="bmi-label">
            <div>Weight:</div> 
            <input
              className="bmi-input"
              type="text"
              value={weight}
              placeholder="Weight(Kg)"
              onChange={(e) => setWeight(e.target.value)}
              ref={weightInputRef}
              autoFocus
            />
          </label>
          <label className="bmi-label">
            <div>Height:</div> 
            <input
              className="bmi-input"
              type="text"
              value={height}
              placeholder="Height(cm)"
              onChange={(e) => setHeight(e.target.value)}
              ref={heightInputRef}
            />
          </label>
          <label className="bmi-label">
            <div>Age:</div> 
            <input
              className="bmi-input"
              type="text"
              value={age}
              placeholder="Age"
              onChange={(e) => setAge(e.target.value)}
              ref={ageInputRef}
            />
          </label>
          <label className="bmi-label">
            <div>Gender:</div>
            <select
              className="bmi-input"
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
        <div className="bmi-buttons">
          <button className="calculate-btn" type="submit">
            Calculate BFP
          </button>
          <button onClick={handleCalculate} className="calculate-nxt" type="button">
            Calculate TDEE
            <img src={double_next} alt="" />
          </button>
        </div>
        
      </form>
      <div className="bfp-result-area"> 
      {isLoading && <div className="bmi-message">Loading...</div>}
      {error && <div className="bmi-message">Error: {error}</div>}
      {bfpData && (
        <div className="bfp-result">
          <p className="bfp-info">BFP: <span>{bfpData.info.bfp}</span></p>
          <p className="bfp-info">Fat mass: <span>{bfpData.info.fat_mass}</span>, Lean Mass: <span>{bfpData.info.lean_mass}</span></p>
          <p className="bfp-info">Health Status: <span>{bfpData.info.description}</span></p>
        </div>
      )}
      </div>
      </div>
      <div className="bmi-right">
        <div className="bmi-que">
          <img src={Question} alt="" />
          <h2>What is BFP?</h2>
        </div>
        <div className="bmi-ans">
        Lorem ipsum dolor sit amet. Ea obcaecati inventore aut quis galisum ut placeat voluptatum nam assumenda facere. Qui omnis quibusdam sit galisum quia aut numquam iusto qui sequi harum.
        </div>
      </div>
    </div>
  );
};

export default BFP;
