import React from 'react';
import '../styles/products.css';
import { Link } from 'react-router-dom';
import { AiFillStar, AiOutlineHeart, AiOutlineShareAlt } from 'react-icons/ai';
const Products = () => {
  return (
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
        <div className="card-con">
          <div className="product-thumb">
            <h5 className="recommen">recommend</h5>
            <img src="images/h3.svg" alt="" />
          </div>
          <div>
            <p className="star">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </p>
            <h2>butter</h2>
            <p className="product-desc">เนยจืด นำเข้าจากดาวเสาร์</p>
            <div className="price-hearth">
              <div>
                <p>$ 100</p>
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
            <Link to="/product/butter">
              <button className="buy-btn">buy</button>
            </Link>
          </div>
        </div>
        <div className="card-con">
          <div className="product-thumb">
            <h5 className="recommen">recommend</h5>
            <img src="images/h2.svg" alt="" />
          </div>
          <div>
            <p className="star">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </p>
            <h2>beef</h2>
            <p className="product-desc">เนื้อสเต็กชั้นดี พรีเมี่ยม</p>
            <div className="price-hearth">
              <div>
                <p>$ 100</p>
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
            <button className="buy-btn">buy</button>
          </div>
        </div>
        <div className="card-con">
          <div className="product-thumb">
            <img src="images/honey.svg" height={140} alt="" />
          </div>
          <div>
            <p className="star">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </p>
            <h2>honey</h2>
            <p className="product-desc">น้ำผึ้งเดือน5ยกกำลัง5 </p>
            <div className="price-hearth">
              <div>
                <p>$ 100</p>
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
            <button className="buy-btn">buy</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
