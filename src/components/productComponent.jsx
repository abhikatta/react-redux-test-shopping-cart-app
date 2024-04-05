import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  return (
    <div className=" my-3 w-auto h-auto grid  gap-2 grid-cols-5">
      {products.map((product) => {
        return (
          <div
            className=" w-auto h-[20rem] flex flex-col justify-center items-center rounded-md"
            key={product.id}>
            <Link to={`/product/${product.id}`}>
              <img width={100} src={product.image}></img>
              <p>{product.title}</p>
              <p>{product.price}</p>
              <p>{product.category}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ProductComponent;
