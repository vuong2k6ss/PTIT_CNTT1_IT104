import { useState } from "react";

export default function CountText() {
  const [text, setText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <div style={{ margin: "20px" }}>
      <textarea
        placeholder="Nhập nội dung"
        value={text}
        onChange={handleChange}
        rows={4}
        cols={50}
      />
      <p>Số ký tự: {text.length}</p>
    </div>
  );
}