import React from 'react';
import './ToolCard.css';

const ToolCard = ({img, Tool_name}) => {
  return (
    <div className='Tool-card'>
        <div>
            <img src={img} alt="Track here" />
        </div>
        <div className='Tool-name'>
            {Tool_name} 
        </div>
        
    </div>
  )
}

export default ToolCard