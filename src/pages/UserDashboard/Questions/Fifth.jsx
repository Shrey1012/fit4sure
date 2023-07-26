import React from 'react';
import './Question.css';

const Fifth = ({ surveyData, setSurveyData}) => {
  const onChange = (e) => {
    const { name, value } = e.target;
    setSurveyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="question-container">
      <h3 className="question-heading">5. What is your weight (kg) currently?</h3>
      <p className="question-note">
        PS: It is required to build a plan that's right for you.
      </p>
      <div className="input-container">
        <input
          type="number"
          name="weightInKg"
          value={surveyData.weightInKg}
          onChange={onChange}
          placeholder="Enter your weight in kg"
        />
      </div>
    </div>
  );
};

export default Fifth;
