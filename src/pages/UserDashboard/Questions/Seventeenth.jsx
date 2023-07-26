import React from 'react';
import './Question.css';

const Seventeenth = ({ surveyData, setSurveyData}) => {
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
        17. What are your eating habits once you achieve your ideal weight (goal)?
      </h3>
      <div className="radio-option">
        <input
          type="radio"
          name="eatingHabits"
          value="Eat more mindfully"
          checked={surveyData.eatingHabits === 'Eat more mindfully'}
          onChange={onChange}
        />
        <label>Eat more mindfully</label>
      </div>
      <div className="radio-option">
        <input
          type="radio"
          name="eatingHabits"
          value="Enjoy all foods guilt-free"
          checked={surveyData.eatingHabits === 'Enjoy all foods guilt-free'}
          onChange={onChange}
        />
        <label>Enjoy all foods guilt-free</label>
      </div>
      <div className="radio-option">
        <input
          type="radio"
          name="eatingHabits"
          value="Feel empowered to make healthy choices"
          checked={surveyData.eatingHabits === 'Feel empowered to make healthy choices'}
          onChange={onChange}
        />
        <label>Feel empowered to make healthy choices</label>
      </div>
      <div className="radio-option">
        <input
          type="radio"
          name="eatingHabits"
          value="Think less about food overall"
          checked={surveyData.eatingHabits === 'Think less about food overall'}
          onChange={onChange}
        />
        <label>Think less about food overall</label>
      </div>
      <div className="radio-option">
        <input
          type="radio"
          name="eatingHabits"
          value="Worry less about my body overall"
          checked={surveyData.eatingHabits === 'Worry less about my body overall'}
          onChange={onChange}
        />
        <label>Worry less about my body overall</label>
      </div>
      <div className="radio-option">
        <input
          type="radio"
          name="eatingHabits"
          value="Other"
          checked={surveyData.eatingHabits === 'Other'}
          onChange={onChange}
        />
        <label>Other</label>
      </div>
    </div>
  );
};

export default Seventeenth;
