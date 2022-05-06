import React from "react";
import { Button } from "antd";
import "../App.css";
import { Link } from "react-router-dom";
import cart from "./cart.svg";

function Home({ products, handleAddToCart, cartCount, handleRemoveFromCart }) {
  return (
    <div className="container">
      <header>
        <div className='header-content'>
        <h3 className="logo">Shop Trendy</h3>
        <nav>
          <img src={cart} alt="cart-icon" className="cart-icon" />
          <span className="cart-counter">{cartCount}</span>
          <Button type="primary" className="directionBtn goToCart">
            <Link to="/cart">Cart</Link>
          </Button>
        </nav>
        </div>
      </header>

      <div className="products-container">
        {products.map((d) => {
          return (
            <div key={d.id} className="product">
              <img src={d.image} alt="productImage" className="product-image" />
              <br/>
              <br/>
              <h5 className="product-title">
                {d.title}
              </h5>
              <p className="product-category">
              {d.category}
              </p>
              <span>Price: ${d.price}</span>
              <br />
              <Button
                onClick={() => {
                  handleAddToCart(d.id);
                }}
              >
                Add to cart
              </Button>
              <Button
              onClick={() => {
                handleAddToCart(d.id);
              }}
              >+</Button>
              <Button
              onClick={() => {
                handleRemoveFromCart(d.id);
              }}
              >-</Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
