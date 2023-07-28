import React, { useState, useEffect } from "react";
import "./Plans.css";
import arrownxt from "../assets/arrownxt.svg";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Plans = () => {
  const [plans, setPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const navigate = useNavigate();

  const { authData } = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchPlans = async () => {
      const res = await axios.get("http://localhost:3001/admin/plan/all");
      setPlans(res.data.plan);
      setSelectedPlan(res.data.plan.find((plan) => plan.duration === "1 Year"));
    };
    fetchPlans();
  }, []);

  const handlePlanClick = (plan) => {
    setSelectedPlan(plan);
  };

  const splitDescription = (description) => {
    const sentences = description.split(". ");
    return sentences.map((sentence, index) => <li key={index}>{sentence}</li>);
  };

  const API = axios.create({ baseURL: "http://localhost:3001" });

  API.interceptors.request.use((req) => {
    if (localStorage.getItem("profile")) {
      req.headers.authorization = `Bearer ${
        JSON.parse(localStorage.getItem("profile")).token
      }`;
    }

    return req;
  }); 

  const handleButtonClick = async () => {
    if (authData) {
      try {
        // Make an API call to your backend to initiate the order with Razorpay
        const response = await API.post("/app/payment/order-with-rozorpay", {
          amount: selectedPlan.price * 100,
          subscription_plan_id: selectedPlan._id,
          duration: selectedPlan.duration,
          user_id: authData.result._id,
        });

        const { order_id} = response.data;

        const options = {
          key: "rzp_test_rFXwtHIILu1CTU", // Replace with your actual Razorpay key
          amount: selectedPlan.price * 100,
          currency: "INR",
          name: "Fit4Sure",
          description: `${selectedPlan.title} Subscription`,
          image: "", // Replace with your logo URL
          order_id,
          handler: function (response) {
            // You can take further actions like updating the UI or making another API call to confirm the payment
            completePayment(response);
          },
          prefill: {
            email: authData.result.email, // Replace with the user's email from your authData
            contact: authData.result.contactNumber, // Replace with the user's phone number from your authData
          },
          theme: {
            color: "#e1bd8f",
        },
        };

         // Initialize Razorpay checkout with the options
         const razorpayInstance = new  window.Razorpay(options);
         razorpayInstance.open();
        } catch (error) {
          console.error("Error creating order:", error);
          // Handle error here
          toast.error("Error creating order. Please try again.",{
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000, // Time in milliseconds for the toast to be visible (e.g., 2000 = 2 seconds)
          });
        }
    
    } else {
      navigate("/signin");
    }
  };

  const completePayment = async (response) => {
    try {
      // Make an API call to your backend to confirm the payment and update the order status
      await API.post("/app/payment/checkout-with-rozorpay", {
        order_id: response.razorpay_order_id,
        payment_data: response,
      });

      toast.success("Payment successful! Thank you for your purchase.", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000, // Time in milliseconds for the toast to be visible (e.g., 2000 = 2 seconds)
      });

    } catch (error) {
      console.error("Error confirming payment:", error);

      toast.error("Payment confirmation failed. Please contact support.", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000, // Time in milliseconds for the toast to be visible (e.g., 2000 = 2 seconds)
      });
    }
  };

  return (
    <div className="Plans-main">
      <div className="plans-txt1">Select a plan</div>
      <div className="plans-txt2">
        We make you fit in a sustainable manner by using the science of fitness
        and providing constant support. Our certified and top-rated professional
        experts provide long-lasting support, making personalized schedules at
        times convenient for you.
      </div>
      <div className="plans-mid">
        {plans.map((plan) => (
          <div key={plan._id} onClick={() => handlePlanClick(plan)} className={`${
            selectedPlan === plan ? "highlighted" : ""
          }`}>
            <h2>{plan.duration}</h2>
            <p>
              INR {plan.price} <span>/month</span>
            </p>
          </div>
        ))}
      </div>
      <div className="plans-bottom">
        {selectedPlan && (
          <>
            <h2>{selectedPlan.title}</h2>
            <ul>{splitDescription(selectedPlan.description)}</ul>
            <button onClick={handleButtonClick}>
              Purchase this plan
              <img src={arrownxt} alt="" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Plans;
