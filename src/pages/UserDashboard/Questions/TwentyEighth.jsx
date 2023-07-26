import React from 'react';
import './Question.css';

const TwentyEighth = ({ surveyData, setSurveyData}) => {
  const onChange = (e) => {
    const { name, value } = e.target;
    setSurveyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="question-container">
      <h3 className="question-heading">
        28. Do you feel that you require a weight loss plan that involves some part of working out as well?
      </h3>
      <div className="radio-option">
        <input
          type="radio"
          name="requireWorkoutInPlan"
          value="Yes"
          checked={surveyData.requireWorkoutInPlan === 'Yes'}
          onChange={onChange}
        />
        <label>Yes</label>
      </div>
      <div className="radio-option">
        <input
          type="radio"
          name="requireWorkoutInPlan"
          value="No"
          checked={surveyData.requireWorkoutInPlan === 'No'}
          onChange={onChange}
        />
        <label>No</label>
      </div>
    </div>
  );
};

export default TwentyEighth;
