import React from 'react';
import './Question.css';

const TwentyThird = ({ surveyData, setSurveyData}) => {
  const onChange = (e) => {
    const { name, value } = e.target;
    setSurveyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="question-container">
      <h3 className="question-heading">23. Have you tried any of the below in the past to lose weight?</h3>
      <div className="radio-option">
        <input
          type="radio"
          name="triedWeightLossMethods"
          value="Paid meal plans"
          checked={surveyData.triedWeightLossMethods === 'Paid meal plans'}
          onChange={onChange}
        />
        <label>Paid meal plans</label>
      </div>
      <div className="radio-option">
        <input
          type="radio"
          name="triedWeightLossMethods"
          value="Restrictive dieting"
          checked={surveyData.triedWeightLossMethods === 'Restrictive dieting'}
          onChange={onChange}
        />
        <label>Restrictive dieting</label>
      </div>
      <div className="radio-option">
        <input
          type="radio"
          name="triedWeightLossMethods"
          value="Gym membership"
          checked={surveyData.triedWeightLossMethods === 'Gym membership'}
          onChange={onChange}
        />
        <label>Gym membership</label>
      </div>
      <div className="radio-option">
        <input
          type="radio"
          name="triedWeightLossMethods"
          value="Prescription medication or procedure"
          checked={surveyData.triedWeightLossMethods === 'Prescription medication or procedure'}
          onChange={onChange}
        />
        <label>Prescription medication or procedure</label>
      </div>
      <div className="radio-option">
        <input
          type="radio"
          name="triedWeightLossMethods"
          value="None of the above"
          checked={surveyData.triedWeightLossMethods === 'None of the above'}
          onChange={onChange}
        />
        <label>None of the above</label>
      </div>
    </div>
  );
};

export default TwentyThird;
