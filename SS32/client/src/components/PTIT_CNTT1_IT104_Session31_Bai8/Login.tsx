// Login.tsx
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "./authReducer";
import type { RootState, AppDispatch } from "./store";

const Login: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const loggedInUser = useSelector(
    (state: RootState) => state.auth.loggedInUser
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (loggedInUser) {
      console.log("Thông tin đăng nhập:", loggedInUser);
    }
  }, [loggedInUser]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      dispatch(loginAction({ email, password }));
      alert("Đăng nhập thành công!");
    }
  };

  return (
    <div className="flex justify-center mt-10">
      <form
        onSubmit={handleLogin}
        className="w-96 p-6 border rounded-lg shadow-md bg-white"
      >
        <h3 className="text-xl font-bold mb-5 text-center">Đăng nhập</h3>
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
          Đăng nhập
        </button>
      </form>
    </div>
  );
};

export default Login;
