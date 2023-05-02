import React, { useState } from 'react';
import '../styles/products.css';
import { Link } from 'react-router-dom';
import { AiFillStar, AiOutlineHeart, AiOutlineShareAlt } from 'react-icons/ai';

import { products } from '../data';

const Products = () => {
  const [textSearch, setTesxtSearch] = useState('');

  const filterProduct = products.filter((product) => {
    return (
      product.name.includes(textSearch) || product.desc.includes(textSearch)
    );
  });

  return (
    <div>
      <div className="search-pd">
        <input
          className="search-input"
          type="text"
          placeholder="fine some ingredients..."
          value={textSearch}
          onChange={(e) => {
            setTesxtSearch(e.target.value);
          }}
        />
      </div>
      <div className="products-con">
        <div className="products_left">
          <img src="/images/pd.png" className="products-img" alt="" />
          <ul className="products-list">
            <li className="pd1">
              <img src="images/h2.svg" alt="ketchup" />
            </li>
            <li className="pd2">
              <img src="images/h3.svg" alt="meet" />
            </li>
            <li className="pd3">
              <img src="images/oil.png" alt="butter" />
            </li>
            <li className="pd4">
              <img src="images/salt.png" alt="sausage" />
            </li>
            <li className="pd5">
              <img src="images/pepper.png" alt="soy sauce" />
            </li>
          </ul>
        </div>
        <div className="products_right">
          {filterProduct.map((p, idx) => (
            <Link to={`/product/${p.id}`} key={idx} className="card-con">
              <div className="product-thumb">
                <h5 className={p.id !== 1 ? 'recommen vinsible' : 'recommen'}>
                  recommend
                </h5>
                <img src={p.img} alt="" />
              </div>
              <div>
                <p className="star">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </p>
                <h2>{p.name}</h2>
                <p className="product-desc">{p.desc}</p>
                <div className="price-hearth">
                  <div>
                    <p>$ {p.price}</p>
                  </div>
                  <div className="like_share">
                    <p className="hearth">
                      <AiOutlineHeart />
                    </p>
                    <p className="share">
                      <AiOutlineShareAlt />
                    </p>
                  </div>
                </div>
              </div>
              <div className="buy-con">
                <Link to={`/product/${p.id}`}>
                  <button className="buy-btn">buy</button>
                </Link>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
