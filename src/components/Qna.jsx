import React,{useState,useEffect} from 'react'
import './Qna.css';
import axios from 'axios';
import QnaCard from './QnaCard'

const Qna = () => {
  const [qnaData, setQnaData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/admin/web_qna/all")
      .then((res) => {
        const qnaArray = Object.values(res.data.qna);
        setQnaData(qnaArray);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className='qna-main'>
      <div className='all-qna'></div>
      {
        qnaData.map((qna) => (

          <QnaCard 
            key={qna._id}
            question={qna.question}
            title={qna.title}
            para={qna.description}
          />
        ))
      }
    </div>
  )
}

export default Qna