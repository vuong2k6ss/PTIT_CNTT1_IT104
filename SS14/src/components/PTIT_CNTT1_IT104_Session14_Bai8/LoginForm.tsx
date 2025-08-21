import React, { useState } from "react";
import "./LoginForm.css";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // Xử lý submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate
    if (!email || !password) {
      setMessage("Email và Mật khẩu không được để trống.");
      return;
    }

    // Lấy dữ liệu đã lưu trong localStorage từ form đăng ký
    const data = JSON.parse(localStorage.getItem("students") || "[]");

    // Kiểm tra email + mật khẩu
    const exists = data.some(
      (student: { email: string; password: string }) =>
        student.email === email && student.password === password
    );

    if (exists) {
      setMessage("Đăng nhập thành công");
    } else {
      setMessage("Đăng nhập thất bại");
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2 className="form-title">Đăng nhập tài khoản</h2>

      <label>Email</label>
      <input
        type="email"
        placeholder="Nhập email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="form-input"
      />

      <label>Mật khẩu</label>
      <input
        type="password"
        placeholder="Nhập mật khẩu"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="form-input"
      />

      <button type="submit" className="form-button">
        Đăng nhập
      </button>

      {message && (
        <p
          className={`form-message ${
            message.includes("thành công") ? "success" : "error"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}