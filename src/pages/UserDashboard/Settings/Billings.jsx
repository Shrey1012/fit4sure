import React from 'react'
import "./Billing.css";
const Billings = () => {
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
              <a className="nav-link user_img" href="javascript:;"><span className='admin-img'></span></a>
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
              <tr>
                <td data-label="Plan Details">Standard 1 month plan, 1233/- per month</td>
                <td data-label="Billing Date">27 July, 2023</td>
                <td data-label="invoice"><a href=""><span className="me-3"></span> Download</a></td>
              </tr>
              <tr>
                <td data-label="Plan Details">Standard 1 month plan, 1233/- per month</td>
                <td data-label="Billing Date">27 July, 2023</td>
                <td data-label="invoice"><a href=""><span className="me-3"></span> Download</a></td>
              </tr>
              <tr>
                <td data-label="Plan Details">Standard 1 month plan, 1233/- per month</td>
                <td data-label="Billing Date">27 July, 2023</td>
                <td data-label="invoice"><a href=""><span className="me-3"></span> Download</a></td>
              </tr>
              <tr>
                <td data-label="Plan Details">Standard 1 month plan, 1233/- per month</td>
                <td data-label="Billing Date">27 July, 2023</td>
                <td data-label="invoice"><a href=""><span className="me-3"></span> Download</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Billings