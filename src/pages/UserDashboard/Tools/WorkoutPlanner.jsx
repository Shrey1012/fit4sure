import React, { useState, useEffect, useRef } from "react";
import "./WorkoutPlanner.css";

const WorkoutPlanner = () => {
  const [time, setTime] = useState("");
  const [muscle, setMuscle] = useState("");
  const [location, setLocation] = useState("");
  const [equipment, setEquipment] = useState("");
  const [workoutData, setWorkoutData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const timeInputRef = useRef(null);
  const muscleInputRef = useRef(null);
  const locationInputRef = useRef(null);
  const equipmentInputRef = useRef(null);

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
    setTime("");
    setMuscle("");
    setLocation("");
    setEquipment("");
  };

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
          setTime("");
          setMuscle("");
          setLocation("");
          setEquipment("");
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

  return (
    <div className="workout-container">
      <h2 className="workout-title">Workout Planner</h2>
      <form className="workout-form" onSubmit={handleSubmit}>
        <div className="workout-input-container">
          <label className="workout-label">
            Time:
            <input
              className="workout-input"
              type="text"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              ref={timeInputRef}
              autoFocus
            />
          </label>
          <label className="workout-label">
            Muscle:
            <input
              className="workout-input"
              type="text"
              value={muscle}
              onChange={(e) => setMuscle(e.target.value)}
              ref={muscleInputRef}
            />
          </label>
          <label className="workout-label">
            Location:
            <input
              className="workout-input"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              ref={locationInputRef}
            />
          </label>
          <label className="workout-label">
            Equipment:
            <input
              className="workout-input"
              type="text"
              value={equipment}
              onChange={(e) => setEquipment(e.target.value)}
              ref={equipmentInputRef}
            />
          </label>
        </div>
        <button className="workout-button" type="submit">
          Plan Workout
        </button>
      </form>
      {isLoading && <div className="workout-message">Loading...</div>}
      {error && <div className="workout-message">Error: {error}</div>}
      {workoutData && (
        <div className="workout-result">
          <p className="workout-info">Your Workout Plan</p>
          <div className="workout-section">
            <h3>Warm Up</h3>
            {workoutData["Warm Up"].map((exercise, index) => (
              <div key={index}>
                <p>Exercise: {exercise.Exercise}</p>
                <p>Time: {exercise.Time}</p>
              </div>
            ))}
          </div>
          <div className="workout-section">
            <h3>Exercises</h3>
            {workoutData.Exercises.map((exercise, index) => (
              <div key={index}>
                <p>Exercise: {exercise.Exercise}</p>
                <p>Sets: {exercise.Sets}</p>
                <p>Reps: {exercise.Reps}</p>
              </div>
            ))}
          </div>
          <div className="workout-section">
            <h3>Cool Down</h3>
            {workoutData["Cool Down"].map((exercise, index) => (
              <div key={index}>
                <p>Exercise: {exercise.Exercise}</p>
                <p>Time: {exercise.Time}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkoutPlanner;
