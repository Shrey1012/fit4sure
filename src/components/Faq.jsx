import React from 'react'
import './Faq.css';
import { faqdata } from '../data'
import FaqCard from './FaqCard'

const Faq = () => {
  return ( 
    <div className='Faq-main'>
      <div className='Faq-top'>FAQs</div>
      <div className='all-faq'>
      {
        faqdata.map((faqdata) => (

          <FaqCard 
            key={faqdata.id}
            Faq_Question={faqdata.Faq_Question}
            Faq_Answer={faqdata.Faq_Answer}
          />
        ))
      }
      </div>
      <div className='closed-faq'></div>

    </div>
  )
}

export default Faq