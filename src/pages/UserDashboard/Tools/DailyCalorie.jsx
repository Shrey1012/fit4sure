import React, { useState, useEffect, useRef } from "react";
import "./DailyCalorie.css";
import double_next from '../../../assets/double_next.svg'
import { useNavigate, useLocation } from "react-router-dom";
import Cookies from 'js-cookie';

const DailyCalorie = () => {
  const [weight, setWeight] = useState(() => Cookies.get("weight") || "");
  const [height, setHeight] = useState(() => Cookies.get("height") || "");
  const [age, setAge] = useState(() => Cookies.get("age") || "");
  const [gender, setGender] = useState(() => Cookies.get("gender") || "");
  const [activityLevel, setActivityLevel] = useState(() => Cookies.get("activityLevelDailyCalorie") || "");
  const [calorieData, setCalorieData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const weightInputRef = useRef(null);
  const heightInputRef = useRef(null);
  const ageInputRef = useRef(null);
  const genderInputRef = useRef(null);
  const activityLevelInputRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  const calculateCalorie = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://fitness-calculator.p.rapidapi.com/dailycalorie?weight=${weight}&height=${height}&age=${age}&gender=${gender}&activitylevel=${activityLevel}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-RapidAPI-Key":
              "40b843d9e4msh0584f48c64d6712p1982cdjsn38d63d3ad848",
            "X-RapidAPI-Host": "fitness-calculator.p.rapidapi.com",
          },
        }
      );

      const data = await response.json();
      setCalorieData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateCalorie();
  };

  useEffect(() => {
    Cookies.set("weight", weight, { expires: 365 });
    Cookies.set("height", height, { expires: 365 });
    Cookies.set("age", age, { expires: 365 });
    Cookies.set("gender", gender, { expires: 365 });
    Cookies.set("activityLevelDailyCalorie", activityLevel, { expires: 365 });
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
          calculateCalorie();
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
      ? "/trackers/bmi"
      : "/bmi";
    navigate(Link);
  };

  return (
    <div className="calorie-container">
      <h2 className="calorie-title">Daily Calorie Requirements Calculator</h2>
      <form className="calorie-form" onSubmit={handleSubmit}>
        <div className="calorie-input-container">
          <label className="calorie-label">
            Weight:
            <input
              className="calorie-input"
              type="text"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              ref={weightInputRef}
              autoFocus
            />
          </label>
          <label className="calorie-label">
            Height:
            <input
              className="calorie-input"
              type="text"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              ref={heightInputRef}
            />
          </label>
          <label className="calorie-label">
            Age:
            <input
              className="calorie-input"
              type="text"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              ref={ageInputRef}
            />
          </label>
          <label className="calorie-label">
            Gender:
            <select
              className="calorie-input"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              ref={genderInputRef}
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
          <label className="calorie-label">
            Activity Level:
            <select
              className="calorie-input"
              value={activityLevel}
              onChange={(e) => setActivityLevel(e.target.value)}
              ref={activityLevelInputRef}
            >
              <option value="">Select activity level</option>
              <option value="level_1">Little or no exercise</option>
              <option value="level_2">Exercise 1-3 times/week</option>
              <option value="level_3">Exercise 4-5 times/week</option>
              <option value="level_4">
                Daily exercise or intense exercise 3-4 times/week
              </option>
              <option value="level_5">Intense exercise 6-7 times/week</option>
              <option value="level_6">
                Very intense exercise daily, or physical job
              </option>
            </select>
          </label>
        </div>
        <div className="bmi-buttons">
          <button className="calculate-btn" type="submit">
          Get Daily Calorie Intake
          </button>
          <button onClick={handleCalculate} className="calculate-nxt">
            Calculate BMI
            <img src={double_next} alt="" />
          </button>
        </div>
      </form>
      {isLoading && <div className="calorie-message">Loading...</div>}
      {error && <div className="calorie-message">Error: {error}</div>}
      {calorieData && (
        <div className="calorie-result">
          <p className="calorie-info">
            Calorie requirement according to your goal
          </p>
          <ul className="calorie-list">
            {Object.entries(calorieData.data.goals).map(([goal, data]) => (
              <li key={goal}>
                <p>{goal}</p>
                {goal === "maintain weight" ? (
                  <p>Calorie: {data}</p>
                ) : (
                  <>
                    <p>
                      {goal.includes("loss") ? "Loss Weight" : "Gain Weight"}:{" "}
                      {data["loss weight"] || data["gain weight"]}
                    </p>
                    <p>Calorie: {data.calory}</p>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DailyCalorie;
