import React from "react";

type Props = { title?: string };
const Cart: React.FC<Props> = ({ title = "Cart" }) => (
  <div className="ul-cart">{title}</div>
);
export default Cart;
