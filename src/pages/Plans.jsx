import React, {useState, useEffect} from 'react';
import './Plans.css'
import arrownxt from '../assets/arrownxt.svg';
import axios from 'axios';

const Plans = () => {
  const [plans, setPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);

  useEffect(() => {
    const fetchPlans = async () => {
      const res = await axios.get('http://localhost:3001/admin/plan/all');
      setPlans(res.data.plan);
      setSelectedPlan(res.data.plan.find(plan => plan.duration === '1 Year'));
    }
    fetchPlans();
  }, []);

  const handlePlanClick = (plan) => {
    setSelectedPlan(plan);
  };

  const splitDescription = (description) => {
    const sentences = description.split('. ');
    return sentences.map((sentence, index) => <li key={index}>{sentence}</li>);
  };

  return (
    <div className='Plans-main'>
      <div className='plans-txt1'>Select a plan</div>
      <div className='plans-txt2'>We make you fit in a sustainable manner by using the science of fitness and providing constant support. Our certified and top-rated professional experts provide long-lasting support, making personalized schedules at times convenient for you.</div>
      <div className='plans-mid'>
    {plans.map((plan) => (
        <div key={plan._id} onClick={() => handlePlanClick(plan)}>
          <h2>{plan.duration}</h2>
          <p>INR {plan.price} <span>/month</span></p>
        </div>
     ))} 
      </div>
      <div className='plans-bottom'>
        {selectedPlan ? (
          <>
        <h2>{selectedPlan.title}</h2>
        <ul>{splitDescription(selectedPlan.description)}</ul>
        <button>Go with this plans
          <img src={arrownxt} alt="" />
        </button>
        </>
        ) : (
          <h2>Select a plan to continue</h2>
        )}
      </div>
    </div>
  )
}

export default Plans