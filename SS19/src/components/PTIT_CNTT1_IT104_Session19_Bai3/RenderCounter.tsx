import { useState, useRef, useEffect } from "react";

export default function RenderCounter() {
  const [value, setValue] = useState(""); // lưu giá trị input
  const renderCount = useRef(0); // biến đếm số lần render

  // Mỗi khi component render → tăng count
  useEffect(() => {
    renderCount.current += 1;
  });

  return (
    <div
      style={{ textAlign: "center", fontFamily: "Arial", marginTop: "30px" }}
    >
      <h2>🔢 Component Render Counter</h2>

      <div style={{ margin: "20px 0" }}>
        <label style={{ marginRight: "10px" }}>Input:</label>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          style={{
            padding: "8px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
      </div>

      <p>
        Component đã render: <b>{renderCount.current}</b> lần
      </p>
    </div>
  );
}