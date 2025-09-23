import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/useCustomeRedux";
import { login, logout } from "../redux/slices/auth.slice";
import { useState } from "react";

export default function AuthLogin() {
  const dispatch = useAppDispatch();
  const loggedInUser = useAppSelector((state) => state.auth.loggedInUser);

  // local state cho form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // danh sách user giả định
  const users = [
    { id: 1, userName: "Nguyễn Văn A", email: "nva@gmail.com", password: "123456" },
    { id: 2, userName: "Trần Thị B", email: "nvb@gmail.com", password: "654321" },
  ];

  const handleLogin = () => {
    const user = users.find((u) => u.email === email && u.password === password);
    if (user) {
      dispatch(login(user));
    } else {
      alert("Sai email hoặc mật khẩu!");
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            loggedInUser ? (
              <Navigate to="/" />
            ) : (
              <div style={{ width: 250, margin: "40px auto", border: "1px solid #ddd", padding: 20 }}>
                <h3>LOGIN FORM</h3>
                <input
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ width: "100%", marginBottom: 10 }}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ width: "100%", marginBottom: 10 }}
                />
                <button onClick={handleLogin} style={{ width: "100%", background: "blue", color: "white" }}>
                  Login
                </button>
              </div>
            )
          }
        />

        <Route
          path="/"
          element={
            loggedInUser ? (
              <div style={{ textAlign: "center", marginTop: 40 }}>
                <h2>User Name: {loggedInUser.userName}</h2>
                <p>Email: {loggedInUser.email}</p>
                <button onClick={() => dispatch(logout())}>Đăng xuất</button>
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
