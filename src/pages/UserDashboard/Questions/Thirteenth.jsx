import React from 'react';
import './Question.css';

const Thirteenth = ({ surveyData, setSurveyData}) => {
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
        13. Are you one of those who start with a new healthy habit but with time go back to the old routine?
      </h3>
      <div className="radio-option">
        <input
          type="radio"
          name="healthyHabitRoutine"
          value="1"
          checked={surveyData.healthyHabitRoutine === '1'}
          onChange={onChange}
        />
        <label>1 - Strongly Disagree</label>
      </div>
      <div className="radio-option">
        <input
          type="radio"
          name="healthyHabitRoutine"
          value="2"
          checked={surveyData.healthyHabitRoutine === '2'}
          onChange={onChange}
        />
        <label>2</label>
      </div>
      <div className="radio-option">
        <input
          type="radio"
          name="healthyHabitRoutine"
          value="3"
          checked={surveyData.healthyHabitRoutine === '3'}
          onChange={onChange}
        />
        <label>3</label>
      </div>
      <div className="radio-option">
        <input
          type="radio"
          name="healthyHabitRoutine"
          value="4"
          checked={surveyData.healthyHabitRoutine === '4'}
          onChange={onChange}
        />
        <label>4</label>
      </div>
      <div className="radio-option">
        <input
          type="radio"
          name="healthyHabitRoutine"
          value="5"
          checked={surveyData.healthyHabitRoutine === '5'}
          onChange={onChange}
        />
        <label>5 - Strongly Agree</label>
      </div>
    </div>
  );
};

export default Thirteenth;
