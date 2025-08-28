import React, { useState, useEffect } from "react";

// Regex kiểm tra email đúng định dạng
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    // Validate Name
    if (name.trim() === "") {
      setNameError("⚠️ Trường này là bắt buộc");
    } else {
      setNameError("");
    }

    // Validate Email
    if (email.trim() === "") {
      setEmailError("⚠️ Trường này là bắt buộc");
    } else if (!emailRegex.test(email)) {
      setEmailError("⚠️ Email không hợp lệ");
    } else {
      setEmailError("");
    }

    // Xác định form hợp lệ
    setIsValid(name.trim() !== "" && emailRegex.test(email));
  }, [name, email]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      alert("Gửi thành công!");
      setName("");
      setEmail("");
    }
  };

  return (
    <div
      style={{
        width: "350px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        fontFamily: "Arial",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        📝 Đăng ký thông tin
      </h2>

      <form onSubmit={handleSubmit}>
        {/* Họ tên */}
        <label>Họ tên</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nhập họ tên..."
          style={{
            width: "100%",
            padding: "8px",
            margin: "5px 0",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
        {nameError && (
          <p style={{ color: "red", fontSize: "13px", margin: "0 0 10px 0" }}>
            {nameError}
          </p>
        )}

        {/* Email */}
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="example@gmail.com"
          style={{
            width: "100%",
            padding: "8px",
            margin: "5px 0",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        />
        {emailError && (
          <p style={{ color: "red", fontSize: "13px", margin: "0 0 10px 0" }}>
            {emailError}
          </p>
        )}

        {/* Nút gửi */}
        <button
          type="submit"
          disabled={!isValid}
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: isValid ? "#007bff" : "#999",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: isValid ? "pointer" : "not-allowed",
            marginTop: "10px",
          }}
        >
          Gửi
        </button>
      </form>
    </div>
  );
}