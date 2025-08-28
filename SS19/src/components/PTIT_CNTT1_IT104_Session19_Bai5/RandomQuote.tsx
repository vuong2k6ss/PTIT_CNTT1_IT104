import { useState } from "react";

export default function RandomQuote() {
  const quotes = [
    "Học, học nữa, học mãi.",
    "Thất bại là mẹ thành công.",
    "Không gì là không thể.",
    "Kiến tha lâu đầy tổ.",
    "Muốn đi nhanh hãy đi một mình, muốn đi xa hãy đi cùng nhau.",
  ];

  const [quote, setQuote] = useState(quotes[0]);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div
      style={{
        width: "400px",
        margin: "50px auto",
        padding: "20px",
        textAlign: "center",
        border: "1px solid #ddd",
        borderRadius: "10px",
        fontFamily: "Arial",
        backgroundColor: "white", // nền trắng
        color: "black", // chữ đen
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)", // đổ bóng nhẹ
      }}
    >
      <h3 style={{ marginBottom: "20px", color: "#333" }}>
        🧠 Câu nói truyền cảm hứng hôm nay:
      </h3>
      <blockquote
        style={{
          fontStyle: "italic",
          marginBottom: "20px",
          color: "#444",
        }}
      >
        “{quote}”
      </blockquote>
      <button
        onClick={getRandomQuote}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Lấy câu nói mới
      </button>
    </div>
  );
}