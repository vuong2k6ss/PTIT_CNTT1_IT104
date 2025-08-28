import { useRef } from "react";

export default function ScrollToSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ fontFamily: "Arial" }}>
      {/* Header */}
      <div
        style={{
          height: "300px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#0d6efd",
          color: "#fff",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
          🧭 Cuộn tới nội dung
        </h1>
        <button
          onClick={handleScroll}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "white",
            color: "#0d6efd",
            border: "2px solid #0d6efd",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Đi tới phần nội dung
        </button>
      </div>

      {/* Nội dung */}
      <div
        style={{
          padding: "40px",
          lineHeight: "1.8",
          background: "#fdfdfd", // nền sáng hơn
          color: "#222", // chữ đen rõ
        }}
      >
        <p>Đây là nội dung giả lập để tạo khoảng cách cho trang...</p>
        <p>Bạn có thể thêm nhiều đoạn như thế này để tăng chiều dài.</p>
        <p>Cuộn trang sẽ mượt mà hơn khi có nhiều nội dung.</p>
      </div>

      {/* Section mục tiêu */}
      <div
        ref={sectionRef}
        style={{
          height: "300px",
          backgroundColor: "#f1f1f1",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "22px",
          fontWeight: "bold",
          color: "#0d6efd",
        }}
      >
        👉 Đây là phần nội dung mục tiêu 👈
      </div>
    </div>
  );
}