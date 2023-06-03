import React from "react";
import { NavLink } from "react-router-dom";

const TrackersNavbar = () => {
  return (
    <div className="Settings-nav">
      <ul>
        <h3 className="Settings-nav-title">Trackers</h3>
        <NavLink
          to="/trackers/bmi"
          className={`settings-nav-link ${({ isActive }) =>
            isActive ? "active" : ""}`}
        >
          <li>BMI Calculator</li>
        </NavLink>
        <NavLink
          to="/trackers/bmr"
          className={`settings-nav-link ${({ isActive }) =>
            isActive ? "active" : ""}`}
        >
          <li>BMR Calculator</li>
        </NavLink>
        <NavLink
          to="/trackers/bfp"
          className={`settings-nav-link ${({ isActive }) =>
            isActive ? "active" : ""}`}
        >
          <li>BFP Calculator</li>
        </NavLink>
        <NavLink
          to="/trackers/tdee"
          className={`settings-nav-link ${({ isActive }) =>
            isActive ? "active" : ""}`}
        >
          <li>TDEE Calculator</li>
        </NavLink>
        <NavLink
          to="/trackers/workoutplanner"
          className={`settings-nav-link ${({ isActive }) =>
            isActive ? "active" : ""}`}
        >
          <li>Workout Planner</li>
        </NavLink>
        <NavLink
          to="/trackers/dailycalorie"
          className={`settings-nav-link ${({ isActive }) =>
            isActive ? "active" : ""}`}
        >
          <li>Daily Calorie Calculator</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default TrackersNavbar;
