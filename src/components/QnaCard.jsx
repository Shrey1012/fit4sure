import React from 'react';
import './QnaCard.css';
import QandAimg from "../assets/QandAimg.svg";

const QnaCard = ({question, title, para}) => {
  return (
    <div className='Qna-card'>
        <div className='Qna-card-left'>
            <img src={QandAimg} alt="ask" />
            <div className='Qna-left-txt'>{question}</div>
        </div>
        <div className='Qna-card-right'>
            <div className='Qna-right-txt1'>{title}</div>
            <div className='Qna-right-txt2'>{para}</div>
        </div>
    </div>
  )
}

export default QnaCard