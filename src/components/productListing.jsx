import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductComponent from "./productComponent";
const API_ENDPOINT = "https://fakestoreapi.com/products";
const ProductListing = () => {
  const products = useSelector((state) => state);
  const [data, setData] = useState();
  const fetchProducts = async () => {
    try {
      const res = await fetch(API_ENDPOINT);
      const fetchedData = await res.json();
      setData(fetchedData);
    } catch (error) {
      console.log("something went wrong", error.message);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  console.log(products);
  console.log(data);
  return (
    <div>
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
