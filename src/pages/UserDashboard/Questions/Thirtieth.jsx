import React from 'react';
import './Question.css';

const Thirtieth = ({ surveyData, setSurveyData}) => {
  const onChange = (e) => {
    const { name, value } = e.target;
    setSurveyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="question-container">
      <h3 className="question-heading">30. When do you feel an urge to grab a snack?</h3>
      <div className="radio-option">
        <input
          type="radio"
          name="snackTime"
          value="Mornings"
          checked={surveyData.snackTime === 'Mornings'}
          onChange={onChange}
        />
        <label>Mornings</label>
      </div>
      <div className="radio-option">
        <input
          type="radio"
          name="snackTime"
          value="Afternoon"
          checked={surveyData.snackTime === 'Afternoon'}
          onChange={onChange}
        />
        <label>Afternoon</label>
      </div>
      <div className="radio-option">
        <input
          type="radio"
          name="snackTime"
          value="Evenings"
          checked={surveyData.snackTime === 'Evenings'}
          onChange={onChange}
        />
        <label>Evenings</label>
      </div>
      <div className="radio-option">
        <input
          type="radio"
          name="snackTime"
          value="Late at night"
          checked={surveyData.snackTime === 'Late at night'}
          onChange={onChange}
        />
        <label>Late at night</label>
      </div>
      <div className="radio-option">
        <input
          type="radio"
          name="snackTime"
          value="Never"
          checked={surveyData.snackTime === 'Never'}
          onChange={onChange}
        />
        <label>Never</label>
      </div>
    </div>
  );
};

export default Thirtieth;
