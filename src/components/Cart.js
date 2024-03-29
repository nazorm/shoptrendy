import React from "react";
import { Button } from "antd";
import "../App.css";
import cart from "./cart.svg";
import { Link } from "react-router-dom";

function Cart({ cartProducts, handleRemoveFromCart, cartCount, emptyCart }) {
  console.log(cartProducts);
  return (
    <div className="container">
      <header>
        <div className="header-content">
          <h3 className="logo">Shop Trendy</h3>
          <nav>
            <img src={cart} alt="cart-icon" className="cart-icon" />
            <span className="cart-counter">{cartCount}</span>
            <Button
              onClick={() => {
                emptyCart();
              }}
              className="emptycart-btn"
            >
              Empty Cart
            </Button>
            <Button type="primary" className="directionBtn goHome">
              <Link to="/">Home</Link>
            </Button>
          </nav>
        </div>
      </header>
      {cartProducts ? (
        <div className="products-container">
          {cartProducts.map((d) => {
            return (
              <div key={d.id} className="product">
                <img
                  src={d.image}
                  alt="productImage"
                  className="product-image"
                />
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
      ) : (
        <p>Cart is epmty</p>
      )}
    </div>
  );
}

export default Cart;
