import React from "react";

import Header from "./components/header.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ProductDetail from "./components/productDetail.jsx";
import ProductListing from "./components/productListing.jsx";
import ProductComponent from "./components/productComponent.jsx";

const App = () => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Header />
      <Router>
        <Routes>
          <Route path="/" Component={ProductListing} />
          <Route path="/productComponent" Component={ProductComponent} />
          <Route path="/product/:productId" Component={ProductDetail} />
          <Route>404 not found</Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
