import React from 'react';
import './Question.css';

const Seventh = ({ surveyData, setSurveyData}) => {
  const onChange = (e) => {
    const { name, value } = e.target;
    setSurveyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="question-container">
      <h3 className="question-heading">7. Describe your lifestyle and how you cope with your work and workout together?</h3>
      <div className="radio-option">
        <input
          type="radio"
          name="lifestyle"
          value="My diet and activity need a lot of work"
          checked={surveyData.lifestyle === 'My diet and activity need a lot of work'}
          onChange={onChange}
        />
        <label>My diet and activity need a lot of work</label>
      </div>
      <div className="radio-option">
        <input
          type="radio"
          name="lifestyle"
          value="I have some healthy habits"
          checked={surveyData.lifestyle === 'I have some healthy habits'}
          onChange={onChange}
        />
        <label>I have some healthy habits</label>
      </div>
      <div className="radio-option">
        <input
          type="radio"
          name="lifestyle"
          value="I mostly eat well and stay active"
          checked={surveyData.lifestyle === 'I mostly eat well and stay active'}
          onChange={onChange}
        />
        <label>I mostly eat well and stay active</label>
      </div>
    </div>
  );
};

export default Seventh;
