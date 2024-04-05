import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./productComponent";
import { setProducts } from "../redux/actions/productActions";

const API_ENDPOINT = "https://fakestoreapi.com/products";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    try {
      const res = await fetch(API_ENDPOINT);
      const fetchedData = await res.json();

      fetchedData && dispatch(setProducts(fetchedData));
    } catch (error) {
      console.log("something went wrong", error.message);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
