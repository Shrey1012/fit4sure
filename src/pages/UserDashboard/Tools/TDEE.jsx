import React, { useState } from "react";
import "./TDEE.css";
import back from '../../../assets/back.svg'
import Question from '../../../assets/Question.svg'
import { useNavigate } from "react-router-dom";


const TDEE = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const [tdeeData, setTdeeData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
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
    <div className="bmi-main">
      <div className="bmi-left">
      <div className="bmi-left-top">
        <img onClick = {() => navigate("/userhome")} src={back} alt="" />
        <h2 className="bmi-title">TDEE Calculator</h2>
      </div>
      <div className="bmi-left-bottom">  
      <form className="bmi-form" onSubmit={handleSubmit}>
        <div className="bmi-input-container">
          <label className="bmi-label">
            <div>Weight: </div>
            <input
              type="text"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </label>
          <label className="bmi-label">
            <div>Height: </div>
            <input
              type="text"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </label>
          <label className="bmi-label">
            <div>Age: </div>
            <input
              type="text"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </label>
          <label className="bmi-label">
            <div>Gender: </div>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
          <label className="bmi-label">
            <div>Activity Level: </div>
            <select
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
        <button className="bmi-button" type="submit">
          Calculate TDEE
        </button>
      </form>
      {isLoading && <div className="bmi-message">Loading...</div>}
      {error && <div className="bmi-message">Error: {error}</div>}
      {tdeeData && (
        <div className="bmi-result">
          <p className="bmi-info">TDEE: {tdeeData.info.tdee}</p>
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
        Lorem ipsum dolor sit amet. Ea obcaecati inventore aut quis galisum ut placeat voluptatum nam assumenda facere. Qui omnis quibusdam sit galisum quia aut numquam iusto qui sequi harum.
        </div>
      </div>
    </div>
    
  );
};

export default TDEE;
