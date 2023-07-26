import React from 'react';
import './Question.css';

const Eighteenth = ({ surveyData, setSurveyData}) => {
  const onChange = (e) => {
    const { name, value, checked } = e.target;

    setSurveyData((prevData) => ({
      ...prevData,
      [name]: checked
        ? [...prevData[name], value]
        : prevData[name].filter((item) => item !== value),
    }));
  };
  
  return (
    <div className="question-container">
      <h3 className="question-heading">18. Describe your main goal to lose weight.</h3>
      <div className="checkbox-option">
        <input
          type="checkbox"
          name="mainGoal"
          value="Improve physical appearance"
          checked={surveyData.mainGoal.includes('Improve physical appearance')}
          onChange={onChange}
        />
        <label>Improve physical appearance</label>
      </div>
      <div className="checkbox-option">
        <input
          type="checkbox"
          name="mainGoal"
          value="Live healthy and guilt-free life"
          checked={surveyData.mainGoal.includes('Live healthy and guilt-free life')}
          onChange={onChange}
        />
        <label>Live healthy and guilt-free life</label>
      </div>
      <div className="checkbox-option">
        <input
          type="checkbox"
          name="mainGoal"
          value="Engage more with family and friends"
          checked={surveyData.mainGoal.includes('Engage more with family and friends')}
          onChange={onChange}
        />
        <label>Engage more with family and friends</label>
      </div>
      <div className="checkbox-option">
        <input
          type="checkbox"
          name="mainGoal"
          value="Become healthier"
          checked={surveyData.mainGoal.includes('Become healthier')}
          onChange={onChange}
        />
        <label>Become healthier</label>
      </div>
      <div className="checkbox-option">
        <input
          type="checkbox"
          name="mainGoal"
          value="Feel better day-to-day"
          checked={surveyData.mainGoal.includes('Feel better day-to-day')}
          onChange={onChange}
        />
        <label>Feel better day-to-day</label>
      </div>
      <div className="checkbox-option">
        <input
          type="checkbox"
          name="mainGoal"
          value="Other"
          checked={surveyData.mainGoal.includes('Other')}
          onChange={onChange}
        />
        <label>Other</label>
      </div>
    </div>
  );
};

export default Eighteenth;
