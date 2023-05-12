import React from 'react'
import './UserHome.css'
import UserDashNav from './UserDashNav';
import { UserToolsData } from '../../data'
import ToolCard from './ToolCard'

const UserHome = () => {
  return (
    <>
    <UserDashNav />
    <div className='User-home-main'>
    <div className='User-home-top'></div>
    <div className='User-home-bottom'>
      <div className='User-home-left'>
        <div className='User-home-plans'></div>
        <div className='User-home-tools'>
        {
        UserToolsData.map((Tools) => (

          <ToolCard 
            key={Tools.id}
            Tool_name={Tools.Tool_name}
            img={Tools.img}
            
          />
        ))
      }
        </div>
      </div>
      <div className='User-home-right'>
        <div className='User-home-vid'></div>
        <div className='User-home-test'></div>
        <div className='User-home-other'></div>
      </div>
    </div>
      
    </div>
    </>
    
  )
}

export default UserHome;