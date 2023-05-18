import React, { useState } from "react";
import "./DailyCalorie.css";

const DailyCalorie = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const [calorieData, setCalorieData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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
    setWeight("");
    setHeight("");
    setAge("");
    setGender("");
    setActivityLevel("");
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
            />
          </label>
          <label className="calorie-label">
            Height:
            <input
              className="calorie-input"
              type="text"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </label>
          <label className="calorie-label">
            Age:
            <input
              className="calorie-input"
              type="text"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </label>
          <label className="calorie-label">
            Gender:
            <select
              className="calorie-input"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
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
        <button className="calorie-button" type="submit">
          Get Daily Calorie Intake
        </button>
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
