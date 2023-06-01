import React,{useState,useEffect} from 'react';
import './Career.css';
import axios from 'axios';
import { CareerCard } from '../components'

const Career = () => {
  const [Careersdata, setCareersdata] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/admin/web_careers/all')
    .then((response) => {
      setCareersdata(response.data.careers);
    })
    .catch((error) => {
      console.log(error);
    })
  }, []);

  return (
    <div className='Career-main'>
      <div className='Career-title'>Available career options</div>
      <div className='All-Careers'>
      {
        Careersdata.map((Career_options) => (

          <CareerCard 
            key={Career_options._id}
            Job_title={Career_options.title}
            Qualification={Career_options.qualification}
            Experience={Career_options.experience}
            Location={Career_options.location}
            Type={Career_options.type}
            Description={Career_options.description}
          />
        ))
      }

      </div>

    </div>
  )
}

export default Career