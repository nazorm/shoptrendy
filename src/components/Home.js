import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Home({products}) {
  const availableProducts = products.map((d) => {
    return<div key = {d.id} className='product'>
        <img src={d.image} alt='productImage' className='product-image'/>
        <h5 className='product-title-category'>{d.title}<br/><br/>{d.category}</h5>
        <br/>
        <span>Price: ${d.price}</span><br/>
      <button>Add to cart</button>
      <button>+</button>
      <button>-</button>
    </div>;
  });
  return (
    <div>
      <Link to="/cart">Cart</Link>
     <div className='products-container'>
     {availableProducts}
     </div>
    </div>
  );
}

export default Home;
