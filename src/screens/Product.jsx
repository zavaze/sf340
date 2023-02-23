import React from 'react';
import '../styles/product.css';
import {
  AiFillStar,
  AiOutlineHeart,
  AiOutlineShareAlt,
  AiOutlineArrowRight,
} from 'react-icons/ai';
import { RiShoppingBasket2Line } from 'react-icons/ri';
const Product = () => {
  return (
    <div className="product-con">
      <h1>INGREDIANT</h1>
      <div className="product">
        <div className="product-left">
          <div className="product-card">
            <img src="/images/h3.svg" alt="" />
            <div className="product-detail">
              <div>
                <h2>BUTTER</h2>
                <p className="product-desc">เนยจืด นำเข้าจากดาวเสาร์</p>
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
        </div>
        <div className="product-right">
          <div className="product-header">
            <div>
              <h1>BUTTER</h1>
              <p className="star">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </p>
            </div>
            <div className="price">
              <h2>$100</h2>
            </div>
          </div>
          <div className="product-info">
            <p>
              There are four general categories of fats, namely saturated,
              trans, monounsaturated and polyunsaturated fats. The first two are
              bad for your health because when they are digested, they are
              converted into LDL cholesterol. This kind of cholesterol is
              carried by your bloodstream through your whole body and
              unfortunately most of it ends up on your heart.
              <span>
                Read More &nbsp;
                <AiOutlineArrowRight />
              </span>
            </p>
          </div>
          <div className="add-buy">
            <button className="add">
              <RiShoppingBasket2Line /> Add to cart
            </button>
            <button className="buy">Buy</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
