import React, { useState, useRef } from "react";
import "./RegisterForm.css";

interface Student {
  name: string;
  email: string;
  password: string;
  phone: string;
}

export default function RegisterForm() {
  const [form, setForm] = useState<Student>({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const [message, setMessage] = useState("");
  const nameRef = useRef<HTMLInputElement>(null);

  // Cập nhật state khi nhập input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Xử lý submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate
    if (!form.name || !form.email || !form.password) {
      setMessage("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    // Lấy dữ liệu cũ trong localStorage
    const data = JSON.parse(localStorage.getItem("students") || "[]");

    // Kiểm tra email trùng
    const exists = data.some(
      (student: Student) => student.email === form.email
    );
    if (exists) {
      setMessage("Email đã tồn tại, vui lòng nhập email khác!");
      return;
    }

    // Lưu dữ liệu mới
    data.push(form);
    localStorage.setItem("students", JSON.stringify(data));

    // Reset form
    setForm({ name: "", email: "", password: "", phone: "" });
    setMessage("Đăng ký tài khoản thành công!");

    // Focus lại vào ô Tên sinh viên
    if (nameRef.current) {
      nameRef.current.focus();
    }
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <h2 className="form-title">Đăng ký tài khoản</h2>

      <input
        ref={nameRef}
        type="text"
        name="name"
        placeholder="Tên sinh viên"
        value={form.name}
        onChange={handleChange}
        className="form-input"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="form-input"
      />

      <input
        type="password"
        name="password"
        placeholder="Mật khẩu"
        value={form.password}
        onChange={handleChange}
        className="form-input"
      />

      <input
        type="text"
        name="phone"
        placeholder="Số điện thoại"
        value={form.phone}
        onChange={handleChange}
        className="form-input"
      />

      <button type="submit" className="form-button">
        Đăng ký
      </button>

      {message && <p className="form-message">{message}</p>}
    </form>
  );
}