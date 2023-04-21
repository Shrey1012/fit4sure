import React from 'react'
import './Qna.css';
import Ask from '../assets/Ask.svg';

const Qna = () => {
  return (
    <div className='qna-main'>
        <div className='qna-left'></div>
        <div className='qna-right'>
          <img src={Ask} alt="img" />
        </div>
    </div>
  )
}

export default Qna