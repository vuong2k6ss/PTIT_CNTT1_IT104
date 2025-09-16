import axios from "axios";
import React, { useEffect, useState } from "react";

export default function ListProduct() {
  const [value, setValue] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/student")
      .then((res) => {
        setValue(res.data);
      })
      .catch(() => {
        alert("Không lấy được dữ liệu");
      });
  }, []);
  return (
    <div>
      <h2>Danh sách học sinh</h2>
      <div>
        {value.map((product) => (
          <div>ID: {product.id} - Name: {product.student_name} - Email: {product.email} - Address: {product.address}</div>
        ))}
      </div>
    </div>
  );
}