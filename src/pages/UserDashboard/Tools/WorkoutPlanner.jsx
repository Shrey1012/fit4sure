import React, { useState, useEffect, useRef } from "react";
import "./WorkoutPlanner.css";
import double_next from '../../../assets/double_next.svg'
import { useNavigate, useLocation } from "react-router-dom";
import Cookies from 'js-cookie';

const WorkoutPlanner = () => {
  const [time, setTime] = useState(() => Cookies.get("time") || "");
  const [muscle, setMuscle] = useState(() => Cookies.get("muscle") || "");
  const [location, setLocation] = useState(() => Cookies.get("locationWorkout") || "");
  const [equipment, setEquipment] = useState(() => Cookies.get("equipment") || "");
  const [workoutData, setWorkoutData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const timeInputRef = useRef(null);
  const muscleInputRef = useRef(null);
  const locationInputRef = useRef(null);
  const equipmentInputRef = useRef(null);

  const navigate = useNavigate();
  const locationHook = useLocation();

  const workoutPlan = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://workout-planner1.p.rapidapi.com?time=${time}&muscle=${muscle}&location=${location}&equipment=${equipment}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-RapidAPI-Key":
              "40b843d9e4msh0584f48c64d6712p1982cdjsn38d63d3ad848",
            "X-RapidAPI-Host": "workout-planner1.p.rapidapi.com",
          },
        }
      );

      const data = await response.json();
      setWorkoutData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    workoutPlan();
  };

  useEffect(() => {
    Cookies.set("time", time, { expires: 365 });
    Cookies.set("muscle", muscle, { expires: 365 });
    Cookies.set("locationWorkout", location, { expires: 365 });
    Cookies.set("equipment", equipment, { expires: 365 });
  }, [time, muscle, location, equipment]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        const inputs = [
          timeInputRef.current,
          muscleInputRef.current,
          locationInputRef.current,
          equipmentInputRef.current,
        ];
        const currentIndex = inputs.findIndex(
          (ref) => ref === document.activeElement
        );

        if (
          currentIndex === inputs.length - 1 &&
          time &&
          muscle &&
          location &&
          equipment
        ) {
          workoutPlan();
        } else if (currentIndex + 1 < inputs.length) {
          inputs[currentIndex + 1].focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [time, muscle, location, equipment]);

  const handleCalculate = () => {
    const Link = locationHook.pathname.includes("/trackers")
      ? "/trackers/dailycalorie"
      : "/dailycalorie";
    navigate(Link);
  };

  return (
    <div className="workout-main">
      <div className="workout-left">
        <form className="workout-form" onSubmit={handleSubmit}>
          <div className="bmi-left-top">
              {/* <img src={back} alt="" /> */}
              <h2 className="bmi-title">Workout Planner</h2>
          </div>
          <div className="bmi-input-container">
            <label className="bmi-label">
              Time:
              <input
                className="bmi-input"
                type="text"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                ref={timeInputRef}
                autoFocus
              />
            </label>
            <label className="bmi-label">
              Muscle:
              <input
                className="bmi-input"
                type="text"
                value={muscle}
                onChange={(e) => setMuscle(e.target.value)}
                ref={muscleInputRef}
              />
            </label>
            <label className="bmi-label">
              Location:
              <input
                className="bmi-input"
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                ref={locationInputRef}
              />
            </label>
            <label className="bmi-label">
              Equipment:
              <input
                className="bmi-input"
                type="text"
                value={equipment}
                onChange={(e) => setEquipment(e.target.value)}
                ref={equipmentInputRef}
              />
            </label>
          </div>
          <div className="bmi-buttons">
            <button className="calculate-btn" type="submit">
              Plan Workout
            </button>
            <button onClick={handleCalculate} className="calculate-nxt">
              Calorie Intake
              <img src={double_next} alt="" />
            </button>
          </div>
        </form>
      </div>
      <div className="Workout-result-area">
        {isLoading && <div className="bmi-message">Loading...</div>}
        {error && <div className="bmi-message">Error: {error}</div>}
        {workoutData && (
          <div className="workout-result">
            <p className="workout-info">Your Workout Plan</p>
            <div className="workout-section">
              <h3>Warm Up</h3>
              {workoutData["Warm Up"].map((exercise, index) => (
                <div key={index}>
                  <h6>Exercise: {exercise.Exercise}</h6>
                  <p>Time: {exercise.Time}</p>
                </div>
              ))}
            </div>
            <div className="workout-section">
              <h3>Exercises</h3>
              {workoutData.Exercises.map((exercise, index) => (
                <div key={index}>
                  <h6>Exercise: {exercise.Exercise}</h6>
                  <p>Sets: {exercise.Sets}</p>
                  <p>Reps: {exercise.Reps}</p>
                </div>
              ))}
            </div>
            <div className="workout-section">
              <h3>Cool Down</h3>
              {workoutData["Cool Down"].map((exercise, index) => (
                <div key={index}>
                  <h6>Exercise: {exercise.Exercise}</h6>
                  <p>Time: {exercise.Time}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkoutPlanner;
