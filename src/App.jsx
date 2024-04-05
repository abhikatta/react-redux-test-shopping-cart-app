import React, { useState } from "react";

import Header from "./components/header.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ProductDetail from "./components/productDetail.jsx";
import ProductListing from "./components/productListing.jsx";
import Cart from "./components/cart.jsx";

const App = () => {
  const [showCart, setShowCart] = useState(false);
  return (
    <div className="w-auto h-screen flex flex-col">
      <Router>
        <Header />
        <Routes>
          <Route path="/" Component={ProductListing} />

          <Route path="/product/:productId" Component={ProductDetail} />
          <Route>404 not found</Route>
        </Routes>
      </Router>
      <div className="my-5 w-full flex flex-col justify-center  items-center">
        <button
          className="my-10"
          onClick={() => setShowCart((prevShow) => !prevShow)}>
          {showCart ? "Hide Cart" : "Show Cart"}
        </button>

        {showCart && <Cart />}
      </div>
    </div>
  );
};

export default App;
