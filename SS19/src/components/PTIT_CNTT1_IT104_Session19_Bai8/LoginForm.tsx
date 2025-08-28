import React, { useReducer, useState } from "react";

// 1. Định nghĩa state
interface State {
  loading: boolean;
  success: boolean;
  error: string | null;
}

// 2. Định nghĩa action
type Action =
  | { type: "LOGIN_START" }
  | { type: "LOGIN_SUCCESS" }
  | { type: "LOGIN_ERROR"; payload: string };

// 3. Reducer
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "LOGIN_START":
      return { loading: true, success: false, error: null };
    case "LOGIN_SUCCESS":
      return { loading: false, success: true, error: null };
    case "LOGIN_ERROR":
      return { loading: false, success: false, error: action.payload };
    default:
      return state;
  }
};

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    success: false,
    error: null,
  });

  // 4. Xử lý đăng nhập
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });

    // Giả lập gọi API (2s)
    setTimeout(() => {
      if (username === "admin" && password === "123") {
        dispatch({ type: "LOGIN_SUCCESS" });
      } else {
        dispatch({
          type: "LOGIN_ERROR",
          payload: "Sai tài khoản hoặc mật khẩu!",
        });
      }
    }, 2000);
  };

  return (
    <div
      style={{
        width: "300px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        fontFamily: "Arial",
        textAlign: "center",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>👤 Đăng nhập</h2>

      <form onSubmit={handleLogin}>
        {/* Username */}
        <div style={{ marginBottom: "15px", textAlign: "left" }}>
          <label>Tên người dùng</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Nhập tên..."
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              marginTop: "5px",
            }}
          />
        </div>

        {/* Password */}
        <div style={{ marginBottom: "15px", textAlign: "left" }}>
          <label>Mật khẩu</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Nhập mật khẩu..."
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              marginTop: "5px",
            }}
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={state.loading}
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: state.loading ? "not-allowed" : "pointer",
            fontSize: "16px",
          }}
        >
          {state.loading ? "Đang đăng nhập..." : "Đăng nhập"}
        </button>
      </form>

      {/* Thông báo trạng thái */}
      <div style={{ marginTop: "15px" }}>
        {state.loading && <p>⏳ Đang đăng nhập...</p>}
        {state.success && (
          <p style={{ color: "green" }}>✅ Đăng nhập thành công!</p>
        )}
        {state.error && <p style={{ color: "red" }}>{state.error}</p>}
      </div>
    </div>
  );
}