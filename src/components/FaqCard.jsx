import React from 'react';
import './FaqCard.css';

const FaqCard = ({Faq_Question, Faq_Answer, Faq_Open, toggleFaq, index}) => {
  return (
    <div className={"Faq-card " + (Faq_Open ? 'open' : '') } onClick={()=> toggleFaq(index)}>
        <div className='Faq-card-top'>
            <div className='faq-top-que'>{Faq_Question}</div>
        </div>
        <div className='faq-card-bottom'>
            <p>{Faq_Answer}</p>
        </div>
    </div>
  )
}

export default FaqCard