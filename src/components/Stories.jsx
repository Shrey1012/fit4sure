import React,{useState, useEffect} from 'react'
import './Stories.css';
import axios from 'axios';
import StoriesCard from './StoriesCard'

const Stories = () => {
  const [Storiesdata, setStoriesdata] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/admin/web_stories/all')
    .then((response) => {
      setStoriesdata(response.data.stories);
    })
    .catch((error) => {
      console.log(error);
    })
  }, []);

  return (
    <div className='stories-main'>
      <h2>Success stories of Fit4sure users</h2>
      <p>Lorem ipsum dolor sit amet. Vel incidunt dolore qui libero quia ad veniam eaque. Eos quia voluptas qui reprehenderit eius et dolores ullam 33 aspernatur enim ut dolorem saepe.</p>
      <div className='all-stories'>
      {
        Storiesdata.map((Storiesdata) => (

          <StoriesCard 
            key={Storiesdata._id}
            Image={Storiesdata.image}
            person_name={Storiesdata.name}
            person_age={Storiesdata.age}
            person_occ={Storiesdata.occupation}
            weight_loss={Storiesdata.weight_loss}
            story_loss={Storiesdata.description}
          />
        ))
      }
      </div>
    </div>
  )
}

export default Stories