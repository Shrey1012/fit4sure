import React, { useState, useEffect, useRef } from "react";
import "./TDEE.css";
import back from "../../../assets/back.svg";
import Question from "../../../assets/Question.svg";
import down_arrow from '../../../assets/doen_arrow.svg'
import double_next from '../../../assets/double_next.svg'
import { useNavigate, useLocation } from "react-router-dom";
import Cookies from "js-cookie";

const TDEE = () => {
  const [weight, setWeight] = useState(() => Cookies.get("weight") || "");
  const [height, setHeight] = useState(() => Cookies.get("height") || "");
  const [age, setAge] = useState(() => Cookies.get("age") || "");
  const [gender, setGender] = useState(() => Cookies.get("gender") || "");
  const [activityLevel, setActivityLevel] = useState(() => Cookies.get("activityLevelTDEE") || "");
  const [tdeeData, setTdeeData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const weightInputRef = useRef(null);
  const heightInputRef = useRef(null);
  const ageInputRef = useRef(null);
  const genderInputRef = useRef(null);
  const activityLevelInputRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

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

  useEffect(() => {
    Cookies.set("weight", weight, { expires: 365 });
    Cookies.set("height", height, { expires: 365 });
    Cookies.set("age", age, { expires: 365 });
    Cookies.set("gender", gender, { expires: 365 });
    Cookies.set("activityLevelTDEE", activityLevel, { expires: 365 });

  }, [weight, height, age, gender, activityLevel]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        const inputs = [weightInputRef.current, heightInputRef.current, ageInputRef.current, genderInputRef.current, activityLevelInputRef.current];
        const currentIndex = inputs.findIndex(
          (ref) => ref === document.activeElement
        );
  
        if (currentIndex === inputs.length - 1 && weight && height && age && gender && activityLevel) {
          calculateTdee();
          setWeight("");
          setHeight("");
          setAge("");
          setGender("");
          setActivityLevel("");
        } else if (currentIndex + 1 < inputs.length) {
          inputs[currentIndex + 1].focus();
        }
      }
    };
  
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [weight, height,age,gender,activityLevel]);

  const handleCalculate = () => {
    const Link = location.pathname.includes("/trackers")
      ? "/trackers/workoutplanner"
      : "/workoutplanner";
    navigate(Link);
  };

  return (
    <div className="bmi-main">
      <div className="bmi-left">
      <form className="bmi-form" onSubmit={handleSubmit}>
        <div className="bmi-left-top">
          <h2 className="bmi-title">TDEE Calculator</h2>
        </div>
        <div className="bmi-input-container">
          <label className="bmi-label">
            <div>Weight: </div>
            <input
              type="text"
              value={weight}
              placeholder="Weight(Kg)"
              onChange={(e) => setWeight(e.target.value)}
              ref={weightInputRef}
              autoFocus
            />
          </label>
          <label className="bmi-label">
            <div>Height: </div>
            <input
              type="text"
              value={height}
              placeholder="Height"
              onChange={(e) => setHeight(e.target.value)}
              ref={heightInputRef}
            />
          </label>
          <label className="bmi-label">
            <div>Age: </div>
            <input
              type="text"
              value={age}
              placeholder="Age"
              onChange={(e) => setAge(e.target.value)}
              ref={ageInputRef}
            />
          </label>
          <label className="bmi-label">
            <div>Gender: </div>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="tdee-select"
              ref={genderInputRef}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
          <label className="bmi-label">
            <div>Activity Level: </div>
            <select
              value={activityLevel}
              onChange={(e) => setActivityLevel(e.target.value)}
              ref={activityLevelInputRef}
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
        <div className="bmi-buttons">
          <button className="calculate-btn" type="submit">
            Calculate TDEE
          </button>
          <button onClick={handleCalculate} className="calculate-nxt">
            Plan workout
            <img src={double_next} alt="" />
          </button>
        </div>
      </form>
      <div className="result-area"> <p>Your TDEE is: </p>
      {isLoading && <div className="bmi-message">Loading...</div>}
      {error && <div className="bmi-message">Error: {error}</div>}
      {tdeeData && (
        <div className="bmi-result">
          {tdeeData.info.tdee}
        </div>
      )}
      </div>
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

export default TDEE;
