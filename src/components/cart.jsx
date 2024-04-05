import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartProducts = useSelector((state) => state.cartProducts);
  console.log("cartProducts", cartProducts);
  return (
    <div className=" grid grid-cols-5 gap-3">
      {cartProducts &&
        cartProducts.products.map((product) => {
          return (
            <div key={product.id}>
              <img src={product.image} width={50}></img>
              <p>{product.title}</p>
              <button>Remove Item</button>
            </div>
          );
        })}
      <p>Price</p>
    </div>
  );
};

export default Cart;
