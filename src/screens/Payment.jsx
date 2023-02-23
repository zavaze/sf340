import React from 'react';
import '../styles/payment.css';
import { Link } from 'react-router-dom';
const Payment = () => {
  return (
    <div className="payment-con">
      <h1>Payment Details</h1>
      <p>Transfer account*</p>
      <div className="form">
        <div className="email-tel">
          <div className="bank">
            <img src="/images/scb.png" alt="" />
            <p>บ. ว้อททูดิป</p>
          </div>
          <p>E-mail*</p>
          <input
            type="email"
            name=""
            id=""
            required
            placeholder="example@gmail.com"
          />
          <p>Tel.*</p>
          <input
            type="tel"
            name=""
            id=""
            required
            placeholder="+66 80-000-0000"
          />
        </div>
        <div className="date-time">
          <p>000-0-00000-0</p>
          <p>Date*</p>
          <input type="date" required name="" id="" />
          <p>Time(approximately)*</p>
          <input type="time" required name="" id="" />
          <p>Amout*</p>
          <input type="number" required name="" id="" placeholder="0" />
        </div>
        <div className="slip-file">
          <p>Evidence of money transfer*</p>
          <div className="custom-upload">
            <input type="file" required name="" id="" />
          </div>
        </div>
      </div>
      <div className="attend">
        <h3 className="review">
          Please review the details correctly before submit.
        </h3>
        <div className="submit-cancel">
          <button type="submit" className="submit-btn">
            Submit
          </button>
          <Link to="/cart">
            {' '}
            <button type="cancel" className="cancel-btn">
              Cancel
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Payment;
