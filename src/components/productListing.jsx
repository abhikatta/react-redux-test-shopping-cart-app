import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./productComponent";
import { fetchProducts } from "../redux/actions/productActions";

const ProductListing = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    products && (
      <div className=" my-3 w-auto h-auto grid  gap-2 grid-cols-5">
        {products.map((product) => (
          <ProductComponent key={product.id} product={product} />
        ))}
      </div>
    )
  );
};

export default ProductListing;
