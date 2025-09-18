import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerAction } from "./authReducer";
import { useNavigate } from "react-router-dom";
import type { AppDispatch } from "./store";

const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch<AppDispatch>(); 
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      dispatch(registerAction({ email, password })); 
      navigate("/login");
    }
  };



  return (
    <div className="flex justify-center mt-10">
      <form
        onSubmit={handleRegister}
        className="w-96 p-6 border rounded-lg shadow-md bg-white"
      >
        <h3 className="text-xl font-bold mb-5 text-center">Đăng ký</h3>
        <input
          type="email"
          placeholder="Nhập email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <input
          type="password"
          placeholder="Nhập mật khẩu..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Đăng ký
        </button>
      </form>
    </div>
  );
};

export default Register;
