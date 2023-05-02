import React from 'react';
import '../styles/cart.css';
import { Link } from 'react-router-dom';
const Cart = () => {
  return (
    <div className="cart-con">
      <div className="cart-left">
        <h1>SHOPPING CART</h1>
        <div className="cart-table">
          <div className="cart-header">
            <h3>Product</h3>
            <h3>Quantity</h3>
            <h3>Subtotal</h3>
          </div>
          <div className="cart-products">
            <div className="cart-product-detail">
              <img src="images/product/pd1.jpg" alt="" />
              <div>
                <h3>butter</h3>
                <p>Allowrie อลาวรี่เนยแท้(เนยเค็ม) ขนาด 227กรัม</p>
              </div>
            </div>
            <h3>1</h3>
            <h3>฿135</h3>
          </div>
          <div className="cart-products">
            <div className="cart-product-detail">
              <img src="images/product/pd2.jpg" alt="" />
              <div>
                <h3>beef</h3>
                <p>เอฟบี เชฟ เนื้อสันคอ USA สไลซ์ 120 ก.</p>
              </div>
            </div>
            <h3>2</h3>
            <h3>฿448</h3>
          </div>
          <div className="cart-products">
            <div className="cart-product-detail"></div>
            <h3>Total</h3>
            <h3>฿583</h3>
          </div>
          <Link to="/cart/payment-details">
            <button className="check-out-btn">Check out</button>
          </Link>
        </div>
      </div>
      <div className="cart-right">
        <img src="images/cart.png" alt="" />
        <div className="bank-number">
          <div>
            <img src="images/scb.png" alt="" />
          </div>
          <div>
            <h4>บ.ว้อททูดิป </h4>
            <h4>000-0-00000-0</h4>
          </div>
          <p className="attach_slip">Attach Slip</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
