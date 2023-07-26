import React from 'react';
import './Question.css';

const Sixth = ({ surveyData, setSurveyData}) => {
  const onChange = (e) => {
    const { name, value } = e.target;
    setSurveyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="question-container">
      <h3 className="question-heading">6. What weight do you see as your ideal weight at the end of this journey to achieve in kgs?</h3>
      <div className="input-container">
        <input
          type="number"
          name="idealWeightInKg"
          value={surveyData.idealWeightInKg}
          onChange={onChange}
          placeholder="Enter your ideal weight in kg"
        />
      </div>
    </div>
  );
};

export default Sixth;
