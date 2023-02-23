import React from 'react';
import '../styles/Navbar.css';
import { RiAccountCircleLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="nav-con">
      <div className="logo">
        <img src="./images/logo.jpg" width={250} alt="logo" />
      </div>
      <div className="menu-list">
        <li>
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/product" className="link">
            Product
          </Link>
        </li>
        <li>
          <Link to="/contact" className="link">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/cart" className="link">
            Cart
          </Link>
        </li>
        <li>
          <Link to="/profile" className="link">
            <p className="profile-icon">
              <RiAccountCircleLine />
            </p>
          </Link>
        </li>
      </div>
    </div>
  );
};

export default Navbar;
