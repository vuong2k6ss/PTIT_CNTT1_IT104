import { useState } from "react";

export default function App() {
  const [name] = useState("Nguyễn Văn A");

  return (
    <div style={{ fontSize: "20px", fontWeight: "bold" }}>
      Họ và tên: {name}
    </div>
  );
}