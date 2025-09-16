import axios from "axios";
import React, {useState } from "react";

export default function ListProduct() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };
  const handleSubmit = () => {
    const student = {
      name,
      email,
      address,
    };
    axios
      .post("http://localhost:8080/student", student)
      .then((res) => {
        alert("Thêm học sinh thành công");
        console.log(res.data);
      })
      .catch(() => {
        alert("Không lấy được dữ liệu");
      });
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <input type="text" placeholder="Name" onChange={handleName} />
      <input type="text" placeholder="Email" onChange={handleEmail} />
      <input type="text" placeholder="Address" onChange={handleAddress} />
      <button onClick={handleSubmit}>Thêm học sinh</button>
    </div>
  );
}