import React from 'react';

import '../styles/Home.css';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div>
      <div className="hero">
        <div className="home-left">
          <h2>Welcome to</h2>
          <h1>What TU Dip service</h1>
          <p>is an ingredient service provider company in Thailand.</p>
          <Link to="/product">
            <button className="hero-btn">Our Product</button>
          </Link>
        </div>
        <div className="home-right">
          <p style={{ color: '#543F68' }}>INGREDIENTS FOOD SERVICE.</p>
          <ul className="hero-list">
            <li className="h1">
              <img src="images/h1.svg" alt="ketchup" />
            </li>
            <li className="h2">
              <img src="images/h2.svg" alt="meet" />
            </li>
            <li className="h3">
              <img src="images/h3.svg" alt="butter" />
            </li>
            <li className="h4">
              <img src="images/h4.svg" alt="sausage" />
            </li>
            <li className="h5">
              <img src="images/h5.svg" alt="soy sauce" />
            </li>
          </ul>
          <img className="hero-img" src="images/hero.svg" alt="ingredients" />
        </div>
      </div>
      <div>{/* <Products /> */}</div>
    </div>
  );
};

export default Home;
