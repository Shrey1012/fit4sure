import React from 'react'
import './UserHome.css'
import UserDashNav from './UserDashNav';
import { UserToolsData } from '../../data'
import ToolCard from './ToolCard'
import thumbnail1 from '../../assets/thumbnail1.svg'

const UserHome = () => {
  return (
    <>
    <div className='User-home-main'>
    <div className='User-home-top'></div>
    <div className='User-home-bottom'>
      <div className='User-home-left'>
        <div className='User-home-plans'></div>
        <div className='User-home-tools'>
          <div className='User-tools-title'>
            <h2>Fitness Trackers</h2>
            <p>View all</p>
          </div>
          <div className='User-tool-cards'>
          {
          UserToolsData.map((Tools) => (

            <ToolCard 
              key={Tools.id}
              Tool_name={Tools.Tool_name}
              img={Tools.img}
              link={Tools.link}
              
            />
          ))
          }
          </div>
        </div>
      </div>
      <div className='User-home-right'>
        <div className='User-home-vid'>
          <div className='vid-card'>
            <img src={thumbnail1} alt="video" />
          </div>
        </div>
        <div className='User-home-test'></div>
        <div className='User-home-other'></div>
        <div></div>
      </div>
    </div>
      
    </div>
    </>
    
  )
}

export default UserHome;
