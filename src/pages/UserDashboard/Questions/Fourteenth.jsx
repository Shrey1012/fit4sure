import React from 'react';
import './Question.css';

const Fourteenth = ({ surveyData, setSurveyData}) => {
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
        14. How much can you relate: You tend to complete your food even when your tummy feels full.
      </h3>
      <p className="question-note">
        (Portion size does matter in your lifestyle or journey)
      </p>
      <div className="radio-option">
        <input
          type="radio"
          name="foodCompletion"
          value="1"
          checked={surveyData.foodCompletion === '1'}
          onChange={onChange}
        />
        <label>1 - Strongly Disagree</label>
      </div>
      <div className="radio-option">
        <input
          type="radio"
          name="foodCompletion"
          value="2"
          checked={surveyData.foodCompletion === '2'}
          onChange={onChange}
        />
        <label>2</label>
      </div>
      <div className="radio-option">
        <input
          type="radio"
          name="foodCompletion"
          value="3"
          checked={surveyData.foodCompletion === '3'}
          onChange={onChange}
        />
        <label>3</label>
      </div>
      <div className="radio-option">
        <input
          type="radio"
          name="foodCompletion"
          value="4"
          checked={surveyData.foodCompletion === '4'}
          onChange={onChange}
        />
        <label>4</label>
      </div>
      <div className="radio-option">
        <input
          type="radio"
          name="foodCompletion"
          value="5"
          checked={surveyData.foodCompletion === '5'}
          onChange={onChange}
        />
        <label>5 - Strongly Agree</label>
      </div>
    </div>
  );
};

export default Fourteenth;
