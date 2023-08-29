import React,{useState, useEffect} from 'react'
import "./Billing.css";
import axios from "axios";

const Billings = () => {
  const [billingData, setBillingData] = useState(null);

  const API = axios.create({ baseURL: "http://localhost:3001" });

  API.interceptors.request.use((req) => {
    if (localStorage.getItem("profile")) {
      req.headers.authorization = `Bearer ${
        JSON.parse(localStorage.getItem("profile")).token
      }`;
    }

    return req;
  }
  );

  useEffect(() => {

    const fetchBillingData = async () => {
      try {
        const response = await API.get("/app/payment/billing-history");
        setBillingData(response.data.order);
      } catch (error) {
        console.error("Error fetching billing data:", error);
      }
    }
    fetchBillingData();
  }
  , []);

  return (
    <div className="body-header">
      <div className="two-grid-column">
        <div className="billing -heading">
          <h4>Billing and invoices</h4>
        </div>
        <div className="top-icons pe-xl-4">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                  
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link user_img" href="#"><span className='admin-img'></span></a>
            </li>
          </ul>
        </div>
      </div>

      <div className="user_table">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Plan Details</th>
                <th>Billing Date</th>
                <th>invoice</th>
              </tr>
            </thead>

            <tbody>
              {billingData && billingData.map((billing) => (
                <tr key={billing._id}>
                  <td data-label="Plan Details">{billing.plan_details}</td>
                  <td data-label="Billing Date">{billing.created_at}</td>
                  <td data-label="invoice"><a href={billing.invoice} target="_blank" rel="noopener noreferrer"><span className="me-3"></span> Download</a></td>
                </tr>
              ))  
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Billings