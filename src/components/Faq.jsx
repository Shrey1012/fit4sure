import React,{useState} from 'react'
import './Faq.css';
import { faqdata } from '../data'
import FaqCard from './FaqCard'

const Faq = () => {
  const [faqs, setFaqs] = useState(faqdata)

  const toggleFaq = (index) => {
    setFaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false
      }
      return faq;
    }))
  }

  return ( 
    <div className='Faq-main'>
      <div className='Faq-top'>FAQs</div>
      <div className='all-faq'>
      {
        faqs.map((faq, i) => (

          <FaqCard 
            key={faq.id}
            Faq_Question={faq.Faq_Question}
            Faq_Answer={faq.Faq_Answer}
            Faq_Open = {faq.open}
            index={i}
            toggleFaq={toggleFaq}
          />
        ))
      }
      </div>
      <div className='closed-faq'></div>

    </div>
  )
}

export default Faq