import React from "react";
import "./GenerateInvoice.css";

const GenerateInvoice = ({ order }) => {
  return (
    <div className="invoice-container">
      <div className="invoice-header">
        <div className="invoice-title"> Invoice </div>
        <div className="invoice-number"> Order ID: {order.order_id} </div>
        <div className="invoice-date">Date: {order.created_at}</div>
      </div>
      <div className="invoice-company-details">
        <div className="invoice-company-name"> Fit4Sure </div>
        <div className="invoice-company-address"> Jaipur, Rajasthan </div>
        <div className="invoice-company-gst"> GSTIN: 123456789 </div>
      </div>
      <div className="invoice-customer-details">
        <div className="invoice-customer-name"> {order?.user_id?.name} </div>
        <div className="invoice-customer-email">{order?.user_id?.email}</div>
      </div>
      <div className="invoice-body">
        <table className="invoice-table">
          <thead>
            <tr>
              <th>Plan</th>
              <th>Duration</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{order.plan_details}</td>
              <td>{order.duration}</td>
              <td>INR {order.amount}/- </td>
            </tr>
            <tr>
              <td></td>
              <td>Subtotal</td>
              <td>INR {order.amount}/- </td>
            </tr>
            <tr>
              <td></td>
              <td>Tax</td>
              <td>INR 0/- </td>
            </tr>
            <tr>
              <td></td>
              <td>Total</td>
              <td>INR {order.amount}/- </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="invoice-footer">
        <div className="invoice-footer-text">
          This is a computer generated invoice. No signature required.
        </div>
      </div>
    </div>
  );
};

export default GenerateInvoice;
