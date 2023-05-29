import React,{useState, useEffect} from 'react'
import './Faq.css';
import axios from "axios";
import FaqCard from './FaqCard'
import { useNavigate } from "react-router-dom";

const Faq = () => {
  const [faqs, setFaqs] = useState([])

  const navigate = useNavigate();

  const toggleFaq = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      })
    );
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/admin/web_faq/all")
      .then((res) => {
        const faqsArray = Object.values(res.data.faq);
        setFaqs(faqsArray);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="Faq-main">
      <div className="Faq-top">FAQs</div>
      <div className="all-faq">
        {faqs.map((faq, i) => (
          <FaqCard
            key={faq._id}
            Faq_Question={faq.title}
            Faq_Answer={faq.description}
            Faq_Open={faq.open}
            index={i}
            toggleFaq={toggleFaq}
          />
        ))}
      </div>
      <div className='closed-faq'></div>
      <div className='faq-more'>Can't find the answer you are looking for? <button color='link' className='view-all' onClick={()=>{navigate('/plans')}}> Reach us</button></div>

    </div>
  );
};

export default Faq;
