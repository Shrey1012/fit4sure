import React from 'react';
import './Question.css';

const Fourth = ({ surveyData, setSurveyData}) => {
  const onChange = (e) => {
    const { name, value } = e.target;
    setSurveyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="question-container">
      <h3 className="question-heading">4. Describe your height in cm</h3>
      <div className="input-container">
        <input
          type="number"
          name="heightInCm"
          value={surveyData.heightInCm}
          onChange={onChange}
          placeholder="Enter your height in cm"
        />
      </div>
    </div>
  );
};

export default Fourth;
