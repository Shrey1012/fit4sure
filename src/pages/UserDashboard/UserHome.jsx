import React from 'react'
import './UserHome.css'
import User_dash_nav from './User_dash_nav';
import { UserToolsData } from '../../data'
import ToolCard from './ToolCard'

const UserHome = () => {
  return (
    <>
    <User_dash_nav />
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