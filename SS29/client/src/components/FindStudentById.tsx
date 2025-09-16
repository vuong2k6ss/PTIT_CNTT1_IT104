import axios from "axios";
import React, { useEffect, useState } from "react";

export default function ListProduct() {
  const [value, setValue] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/student/4")
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
        {
          <div>ID: {value.id} - Name: {value.student_name} - Email: {value.email} - Address: {value.address}</div>
        }
      </div>
    </div>
  );
}