import React from 'react';
import './Question.css';

const TwentySeventh = ({ surveyData, setSurveyData}) => {
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
        27. What area do you want to focus on in your plan?
      </h3>
      <div className="radio-option">
        <input
          type="radio"
          name="focusArea"
          value="Nutrition"
          checked={surveyData.focusArea === 'Nutrition'}
          onChange={onChange}
        />
        <label>Nutrition</label>
      </div>
      <div className="radio-option">
        <input
          type="radio"
          name="focusArea"
          value="Physical activity"
          checked={surveyData.focusArea === 'Physical activity'}
          onChange={onChange}
        />
        <label>Physical activity</label>
      </div>
      <div className="radio-option">
        <input
          type="radio"
          name="focusArea"
          value="Building good habits"
          checked={surveyData.focusArea === 'Building good habits'}
          onChange={onChange}
        />
        <label>Building good habits</label>
      </div>
      <div className="radio-option">
        <input
          type="radio"
          name="focusArea"
          value="Other"
          checked={surveyData.focusArea === 'Other'}
          onChange={onChange}
        />
        <label>Other</label>
      </div>
    </div>
  );
};

export default TwentySeventh;
