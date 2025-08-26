import { useState } from "react";

export default function ProductInfo() {
  const [product] = useState({
    id: 1,
    name: "Coca cola",
    price: 1000,
    quantity: 10,
  });

  return (
    <div style={{ fontSize: "18px", padding: "20px" }}>
      <h2 style={{ fontWeight: "bold" }}>Thông tin sản phẩm</h2>
      <p>Id: {product.id}</p>
      <p>Name: {product.name}</p>
      <p>Price: {product.price} $</p>
      <p>Quantity: {product.quantity}</p>
    </div>
  );
}