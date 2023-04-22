import React from 'react'
import './Queries.css'
import Ask from '../assets/Ask.svg';

const Queries = () => {
  return (
    <div className='queries-main'>
      <div className='queries-box'>
        <div className='qbox-left'>
          <img className src={Ask} alt="img" />
        </div>
        <div className='qbox-right'>
          <div className='queries-txt1'>Facing similar kinds of issues?</div>
          <div className='queries-txt2'>We understand that old habits die hard and psychology is difficult to change.</div>
          <div className='queries-txt3'>Consult our professionals once. They will positively transform you by mindful weight loss techniques, improving your relationship with food, not forcing you to stop your favourite meals, customizing your nutrition and scheduling, making you do the exercises you love, provide one-on-one coaching, provide help from support groups, and SOS plans.</div>
          <div className='qbox-right-bottom'>
            <input type="text" />
            <button>Get a call</button>
          </div>       
        </div>
      </div>

    </div>
  )
}

export default Queries