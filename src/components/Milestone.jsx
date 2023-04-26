import React from 'react'
import './Milestone.css';

const Milestone = () => {
  return (
    <div className='Milestone-main'>
        <div className='Milestone-box'>
            <div>
                <div className='ms-toptxt'>100+</div>
                <div className='ms-bottomtxt'>Coaches</div>
            </div>
            <div>
                <div className='ms-toptxt'>99.10%</div>
                <div className='ms-bottomtxt'>Success rate</div>
            </div>
            <div>
                <div className='ms-toptxt'>200k+</div>
                <div className='ms-bottomtxt'>Lives impacted</div>
            </div>
            <div>
                <div className='ms-toptxt'>105k+</div>
                <div className='ms-bottomtxt'>users in India</div>
            </div>
        </div>
    </div>
  )
}

export default Milestone