import React from "react";
import { Button } from "antd";
import "../App.css";
import { Link } from "react-router-dom";

function Cart({ cartProducts, handleRemoveFromCart }) {
  console.log(cartProducts);
  return (
    <div>
      <header>
        <h3 className="logo">Shop Trendy</h3>
        <nav>
          <Button type="primary" className="directionBtn goHome">
            <Link to="/">Home</Link>
          </Button>
        </nav>
      </header>
      <div className='products-container'>
      {cartProducts.map((d) => {
        return (
          <div key={d.id} className="product">
            <img src={d.image} alt="productImage" className="product-image" />
            <h5 className="product-title-category">
              {d.title}
              <br />
              <br />
              {d.category}
            </h5>
            <br />
            <span>Price: ${d.price}</span>
            <br />
            <Button
              onClick={() => {
                handleRemoveFromCart(d.id);
              }}
            >
              Remove From Cart
            </Button>
          </div>
        );
      })}
      </div>
     
    </div>
  );
}

export default Cart;
