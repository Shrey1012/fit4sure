import React from 'react';
import './Question.css';

const Twelfth = ({ surveyData, setSurveyData}) => {
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
        12. Does eating food make you feel good and comfortable all the time? Rate through the below scale:
      </h3>
      <div className="radio-option">
        <input
          type="radio"
          name="eatingFeeling"
          value="1"
          checked={surveyData.eatingFeeling === '1'}
          onChange={onChange}
        />
        <label>1 - Strongly Disagree</label>
      </div>
      <div className="radio-option">
        <input
          type="radio"
          name="eatingFeeling"
          value="2"
          checked={surveyData.eatingFeeling === '2'}
          onChange={onChange}
        />
        <label>2</label>
      </div>
      <div className="radio-option">
        <input
          type="radio"
          name="eatingFeeling"
          value="3"
          checked={surveyData.eatingFeeling === '3'}
          onChange={onChange}
        />
        <label>3</label>
      </div>
      <div className="radio-option">
        <input
          type="radio"
          name="eatingFeeling"
          value="4"
          checked={surveyData.eatingFeeling === '4'}
          onChange={onChange}
        />
        <label>4</label>
      </div>
      <div className="radio-option">
        <input
          type="radio"
          name="eatingFeeling"
          value="5"
          checked={surveyData.eatingFeeling === '5'}
          onChange={onChange}
        />
        <label>5 - Strongly Agree</label>
      </div>
    </div>
  );
};

export default Twelfth;
