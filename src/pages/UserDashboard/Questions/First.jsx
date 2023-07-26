import React from 'react';
import './Question.css';

const First = ({ surveyData, setSurveyData}) => {
  const onChange = (e) => {
    const { name, value } = e.target;
    setSurveyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="question-container">
      <h3 className="question-heading">1. Let’s start with setting up your goal.</h3>
      <div className="radio-option">
        <input
          type="radio"
          name="goal"
          value="Lose 1-10 kg for good"
          checked={surveyData.goal === 'Lose 1-10 kg for good'}
          onChange={onChange}
        />
        <label>Lose 1-10 kg for good</label>
      </div>
      <div className="radio-option">
        <input
          type="radio"
          name="goal"
          value="Lose 11-20 kg for good"
          checked={surveyData.goal === 'Lose 11-20 kg for good'}
          onChange={onChange}
        />
        <label>Lose 11-20 kg for good</label>
      </div>
      <div className="radio-option">
        <input
          type="radio"
          name="goal"
          value="Lose over 20 kg for good"
          checked={surveyData.goal === 'Lose over 20 kg for good'}
          onChange={onChange}
        />
        <label>Lose over 20 kg for good</label>
      </div>
      <div className="radio-option">
        <input
          type="radio"
          name="goal"
          value="Maintain weight and get fit"
          checked={surveyData.goal === 'Maintain weight and get fit'}
          onChange={onChange}
        />
        <label>Maintain weight and get fit</label>
      </div>
      <div className="radio-option">
        <input
          type="radio"
          name="goal"
          value="I haven't decided yet"
          checked={surveyData.goal === "I haven't decided yet"}
          onChange={onChange}
        />
        <label>I haven't decided yet</label>
      </div>
    </div>
  );
};

export default First;
