import React from 'react';
import './Question.css';

const ThirtyFirst = ({ surveyData, setSurveyData}) => {
  const onChange = (e) => {
    const { name, value } = e.target;
    setSurveyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="question-container">
      <h3 className="question-heading">31. What typically triggers your urge to eat?</h3>
      <div className="radio-option">
        <input
          type="radio"
          name="urgeToEatTrigger"
          value="Food around me"
          checked={surveyData.urgeToEatTrigger === 'Food around me'}
          onChange={onChange}
        />
        <label>Food around me</label>
      </div>
      <div className="radio-option">
        <input
          type="radio"
          name="urgeToEatTrigger"
          value="Boredom"
          checked={surveyData.urgeToEatTrigger === 'Boredom'}
          onChange={onChange}
        />
        <label>Boredom</label>
      </div>
      <div className="radio-option">
        <input
          type="radio"
          name="urgeToEatTrigger"
          value="Hunger"
          checked={surveyData.urgeToEatTrigger === 'Hunger'}
          onChange={onChange}
        />
        <label>Hunger</label>
      </div>
      <div className="radio-option">
        <input
          type="radio"
          name="urgeToEatTrigger"
          value="Other people snacking"
          checked={surveyData.urgeToEatTrigger === 'Other people snacking'}
          onChange={onChange}
        />
        <label>Other people snacking</label>
      </div>
      <div className="radio-option">
        <input
          type="radio"
          name="urgeToEatTrigger"
          value="Something else"
          checked={surveyData.urgeToEatTrigger === 'Something else'}
          onChange={onChange}
        />
        <label>Something else</label>
      </div>
    </div>
  );
};

export default ThirtyFirst;
