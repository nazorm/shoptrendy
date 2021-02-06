import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import Home from "./components/Home";
import Cart from "./components/Cart";

function App() {
  const [trendyProducts, setTrendyProducts] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {loading ? <p>Loading...</p> 
		  : 
		  <Home products={trendyProducts} 
		  />
		  }
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
