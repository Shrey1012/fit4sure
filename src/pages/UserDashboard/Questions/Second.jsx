import React from 'react';
import './Question.css';

const Second = ({ surveyData, setSurveyData}) => {
  const onChange = (e) => {
    const { name, value } = e.target;
    setSurveyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="question-container">
      <h3 className="question-heading">2. Which among the following sex best identifies you?</h3>
      <div className="radio-option">
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={surveyData.gender === 'Male'}
          onChange={onChange}
        />
        <label>Male</label>
      </div>
      <div className="radio-option">
        <input
          type="radio"
          name="gender"
          value="Female"
          checked={surveyData.gender === 'Female'}
          onChange={onChange}
        />
        <label>Female</label>
      </div>
      <div className="radio-option">
        <input
          type="radio"
          name="gender"
          value="Others"
          checked={surveyData.gender === 'Others'}
          onChange={onChange}
        />
        <label>Others</label>
      </div>
    </div>
  );
};

export default Second;
