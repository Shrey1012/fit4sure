import React from 'react';
import './Question.css';

const Third = ({ surveyData, setSurveyData}) => {
  const onChange = (e) => {
    const { name, value } = e.target;
    setSurveyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="question-container">
      <h3 className="question-heading">3. In which age group do you belong? PS: We won't ask for your precise age :)</h3>
      <div className="radio-option">
        <input
          type="radio"
          name="ageGroup"
          value="20s"
          checked={surveyData.ageGroup === '20s'}
          onChange={onChange}
        />
        <label>20s</label>
      </div>
      <div className="radio-option">
        <input
          type="radio"
          name="ageGroup"
          value="30s"
          checked={surveyData.ageGroup === '30s'}
          onChange={onChange}
        />
        <label>30s</label>
      </div>
      <div className="radio-option">
        <input
          type="radio"
          name="ageGroup"
          value="40s"
          checked={surveyData.ageGroup === '40s'}
          onChange={onChange}
        />
        <label>40s</label>
      </div>
      <div className="radio-option">
        <input
          type="radio"
          name="ageGroup"
          value="50s"
          checked={surveyData.ageGroup === '50s'}
          onChange={onChange}
        />
        <label>50s</label>
      </div>
      <div className="radio-option">
        <input
          type="radio"
          name="ageGroup"
          value="60s"
          checked={surveyData.ageGroup === '60s'}
          onChange={onChange}
        />
        <label>60s</label>
      </div>
      <div className="radio-option">
        <input
          type="radio"
          name="ageGroup"
          value="70+"
          checked={surveyData.ageGroup === '70+'}
          onChange={onChange}
        />
        <label>70+</label>
      </div>
    </div>
  );
};

export default Third;
