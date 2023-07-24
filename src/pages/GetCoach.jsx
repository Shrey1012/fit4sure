import React,{useEffect, useState} from 'react'
import './GetCoach.css'
import Gym_fit from "../assets/Gym_fit.jpg"
import Family_fit from "../assets/Family_fit.jpg"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const GetCoach = () => {
  const [categoryId1, setCategoryId1] = useState([])
  const [categoryId2, setCategoryId2] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get("http://localhost:3001/admin/category/all")
      .then((res) => {
        const categoryId1 = res.data.category[0]._id;
        setCategoryId1(categoryId1);
        const categoryId2 = res.data.category[1]._id;
        setCategoryId2(categoryId2);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className='Coach-main'>
      <div className='Coach-top'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</div>
    <div className='Coach-bottom'>
      <div className='Coach-left'>
        <img className='coach-imgg' src={Gym_fit} alt="Stay fit" />
        <p className='coach-para'>Finding a coach for your strict diet planning and Gym schedule, Our coaches are here</p>
        <button className='coach-button' onClick={()=> navigate(`/allcoaches/${categoryId1}`)}>View coaches</button>
      </div>
      <div className='Coach-right'>
        <img className='coach-imgg' src={Family_fit} alt="Stay healthy" />
        <p className='coach-para'>Finding a coach for fitness and health of your family, Our coaches are here</p>
        <button className='coach-button' onClick={()=> navigate(`/allcoaches/${categoryId2}`)}>View coaches</button>
      </div>
    </div>
    </div>
  )
}

export default GetCoach