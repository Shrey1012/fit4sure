import React,{useState} from 'react'
import './Faq.css';
import { faqdata } from '../data'
import FaqCard from './FaqCard'
import { useNavigate } from 'react-router-dom';

const Faq = () => {
  const [faqs, setFaqs] = useState(faqdata);
  const navigate = useNavigate();

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
      <div className='faq-more'>Can't find the answer you are looking for? <button color='link' className='view-all' onClick={()=>{navigate('/plans')}}> Reach us</button></div>
    </div>
  )
}

export default Faq