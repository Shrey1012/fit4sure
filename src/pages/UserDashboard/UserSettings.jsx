import React from "react";
import UserSettingsNav from "./UserSettingsNav";
import { Routes, Route } from "react-router-dom";
import PersonalDetails from "./Settings/PersonalDetails";
import DietPlans from "./Settings/DietPlans";
import BodySpecifications from "./Settings/BodySpecifications";
import Passwords from "./Settings/Passwords";
import Billings from "./Settings/Billings";
import "./UserSettings.css";

const UserSettings = () => {
  return (
    <div className="user-settings-container">
      <UserSettingsNav />
      <div className="user-settings-content">
        <Routes>
          <Route path="/personal-details" element={<PersonalDetails />} />
          <Route path="/body-specifications" element={<BodySpecifications />} />
          <Route path="/diet-plans" element={<DietPlans />} />
          <Route path="/passwords" element={<Passwords />} />
          <Route path="/billing-invoices" element={<Billings />} />
        </Routes>
      </div>
    </div>
  );
};

export default UserSettings;
