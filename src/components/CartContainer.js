import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartContainer = () => {
  const { cartItems, total, amount } = useSelector((state) => state.cart);
  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>Your Bag</h2>
          <h4 className="empty-cart">is currently empty!!!</h4>
        </header>
      </section>
    );
  }
  return (
    <div>
      <CartItem />
    </div>
  );
};

export default CartContainer;
