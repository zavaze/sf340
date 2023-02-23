import React from 'react';
import '../styles/contact.css';
const Contact = () => {
  return (
    <div className="contact-con">
      <header>
        <h1>Our Company</h1>
        <h3>@Interpark , Thammasat rangsit campus</h3>
        <h3> Tel.03xxxxxxx</h3>
      </header>
      <div className="map">map location , Google API</div>
      <div className="partners">
        <h1>Our Partners</h1>
        <div className="partners-icon">
          <img src="images/pn1.png" alt="" />
          <img src="images/pn2.png" alt="" />
          <img src="images/pn3.png" alt="" />
          <img src="images/pn4.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
