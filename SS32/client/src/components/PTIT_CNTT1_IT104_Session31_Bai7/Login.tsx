import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "./store";

const Login: React.FC = () => {
  const registeredUser = useSelector(
    (state: RootState) => state.auth.registeredUser
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (registeredUser) {
      setEmail(registeredUser.email);
      setPassword(registeredUser.password);
    }
  }, [registeredUser]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      alert(`Đăng nhập thành công với email: ${email}`);
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
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
        >
          Đăng nhập
        </button>
      </form>
    </div>
  );
};

export default Login;
