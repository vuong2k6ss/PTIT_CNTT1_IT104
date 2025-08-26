import { useState } from "react";

export default function Form() {
  const [text, setText] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div style={{ margin: "20px" }}>
      <input
        type="text"
        placeholder="Nhập nội dung"
        value={text}
        onChange={handleChange}
        style={{ padding: "5px", width: "250px" }}
      />
      <h3>{text}</h3>
    </div>
  );
}