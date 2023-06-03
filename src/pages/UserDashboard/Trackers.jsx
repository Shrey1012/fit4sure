import React from "react";
import TrackersNavbar from "./TrackersNavbar";
import { Routes, Route } from "react-router-dom";
import BMI from "./Tools/BMI";
import BMR from "./Tools/BMR";
import BFP from "./Tools/BFP";
import TDEE from "./Tools/TDEE";
import WorkoutPlanner from "./Tools/WorkoutPlanner";
import DailyCalorie from "./Tools/DailyCalorie";

const Trackers = () => {
  return (
    <div className="user-settings-container">
      <TrackersNavbar />
      <div className="user-settings-content">
        <Routes>
          <Route path="/bmi" element={<BMI />} />
          <Route path="/bmr" element={<BMR />} />
          <Route path="/bfp" element={<BFP />} />
          <Route path="/tdee" element={<TDEE />} />
          <Route path="/workoutplanner" element={<WorkoutPlanner />} />
          <Route path="/dailycalorie" element={<DailyCalorie />} />
        </Routes>
      </div>
    </div>
  );
};

export default Trackers;
