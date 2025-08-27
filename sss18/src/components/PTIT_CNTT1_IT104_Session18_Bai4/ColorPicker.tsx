import React, { useState, useCallback } from "react";

export default function ColorPicker() {
  const [color, setColor] = useState<string>("#ffffff");

  const handleChangeColor = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setColor(e.target.value);
    },
    []
  );

  return (
    <div>
      <h3>Màu người dùng chọn:</h3>
      <input type="color" value={color} onChange={handleChangeColor} />

      <h3>Màu hiển thị:</h3>
      <div
        style={{
          width: "200px",
          height: "100px",
          border: "1px solid black",
          backgroundColor: color,
        }}
      ></div>
    </div>
  );
}