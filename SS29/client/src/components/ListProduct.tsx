import axios from "axios";
import React, { useEffect, useState } from "react";

export default function ListProduct() {
  const [value, setValue] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/product/4")
      .then((res) => {
        setValue(res.data);
      })
      .catch(() => {
        alert("Không lấy được dữ liệu");
      });
  }, []);
  return (
    <div>
      <h2>Danh sách sản phẩm</h2>
      <div>
        {value.map((product) => (
          <div>ID: {product.id} - Name: {product.product_name} - Price: {product.price} - Quantity: {product.quantity}</div>
        ))}
      </div>
    </div>
  );
}