import React from 'react';
import './FaqCard.css';
import minus from "../assets/minus.svg";

const FaqCard = ({Faq_Question, Faq_Answer}) => {
  return (
    <div className='Faq-card'>
        <div className='Faq-card-top'>
            <div className='faq-top-que'>{Faq_Question}</div>
            <div className='faq-top-icon'><img src={minus} alt="close" /></div>
        </div>
        <div className='faq-card-bottom'>
            <p>{Faq_Answer}</p>
        </div>
    </div>
  )
}

export default FaqCard