import React, {useState, useEffect} from 'react'
import './AllCoaches.css';
import { CoachCard } from '../components'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const AllCoaches = () => {
  const [coaches, setCoaches] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/admin/trainer/category/${categoryId}`)
      .then((res) => {
        const coaches = res.data.trainers;
        setCoaches(coaches);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  if (coaches.length === 0) {
    return <div>Loading coaches...</div>; // You can show a loading spinner or message here
  }
  return (
    <div className='all-coaches'>
      
      {
        coaches.map((coach) => (

          <CoachCard 
            key={coach._id}
            image={coach.image} 
            name={coach.name}
            rating={coach.rating}
            people_trained={coach.people_trained}
            description={coach.website_desc}
            experties={coach.experties}
          />
        ))
      }

    </div>
  )
}

export default AllCoaches;