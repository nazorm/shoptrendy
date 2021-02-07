
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import Home from "./components/Home";
import Cart from "./components/Cart";

function App() {
  const [trendyProducts, setTrendyProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [trendyCartProducts, setTrendyCartProducts]=useState([])
  const [cartCounter, setCartCounter] = (0)

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const res = await axios.get("https://fakestoreapi.com/products");
      setTrendyProducts(res.data);
      setLoading(false);
      console.log(trendyProducts);
    };
    fetchProducts();
  }, []);

const handleAddToCart=(index)=>{
 const cartP = trendyProducts.find((d)=>{
   return index === d.id
 })
 const cartItems = [...trendyCartProducts, cartP]
 setTrendyCartProducts(cartItems)
 setCartCounter(prevCount=> prevCount+1)
}
const handleRemoveFromCart=(index)=>{
  const filteredCart = trendyCartProducts.filter((d)=>{
    return d.id !== index
  })
  setTrendyCartProducts(filteredCart)
}

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {loading ? <p>Loading...</p> 
		  : 
		  <Home 
      products={trendyProducts} 
      handleAddToCart={handleAddToCart}
      cartCounter={cartCounter}
		  />
		  }
        </Route>
        <Route path="/cart">
          <Cart
          cartProducts = {trendyCartProducts}
          handleRemoveFromCart={handleRemoveFromCart}
          
          />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
