import React from 'react';
import './Question.css';

const Nineteenth = ({ surveyData, setSurveyData}) => {
  const onChange = (e) => {
    const { name, value } = e.target;
    setSurveyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="question-container">
      <h3 className="question-heading">19. Do you have any priority in this fitness journey?</h3>
      <div className="radio-option">
        <input
          type="radio"
          name="fitnessPriority"
          value="I am only focused on losing weight"
          checked={surveyData.fitnessPriority === 'I am only focused on losing weight'}
          onChange={onChange}
        />
        <label>I am only focused on losing weight</label>
      </div>
      <div className="radio-option">
        <input
          type="radio"
          name="fitnessPriority"
          value="I'd like to gain some muscle while I lose fat"
          checked={surveyData.fitnessPriority === "I'd like to gain some muscle while I lose fat"}
          onChange={onChange}
        />
        <label>I'd like to gain some muscle while I lose fat</label>
      </div>
      <div className="radio-option">
        <input
          type="radio"
          name="fitnessPriority"
          value="Gaining muscle is more important to me than losing fat"
          checked={surveyData.fitnessPriority === 'Gaining muscle is more important to me than losing fat'}
          onChange={onChange}
        />
        <label>Gaining muscle is more important to me than losing fat</label>
      </div>
    </div>
  );
};

export default Nineteenth;
