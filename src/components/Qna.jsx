import React from 'react'
import './Qna.css';
import { qnadata } from '../data'
import QnaCard from './QnaCard'

const Qna = () => {
  return (
    <div className='qna-main'>
      <div className='all-qna'></div>
      {
        qnadata.map((qnadata) => (

          <QnaCard 
            key={qnadata.id}
            Qna_Question={qnadata.Qna_Question}
            Qna_Answer_title={qnadata.Qna_Answer_title}
            Qna_Answer_para={qnadata.Qna_Answer_para}
          />
        )) 
      }
    </div>
  ) 
}

export default Qna