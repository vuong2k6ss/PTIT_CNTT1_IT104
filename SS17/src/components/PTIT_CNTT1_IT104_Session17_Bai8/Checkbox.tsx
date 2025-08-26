import { useState } from "react";

export default function Checkbox() {
  const [hobbies, setHobbies] = useState<string[]>([]);

  const options = ["Đi chơi", "Code", "Bơi lội", "Nhảy dây"];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (hobbies.includes(value)) {
      // Nếu đã có thì bỏ ra (bỏ chọn)
      setHobbies(hobbies.filter((item) => item !== value));
    } else {
      // Nếu chưa có thì thêm vào (chọn mới)
      setHobbies([...hobbies, value]);
    }
  };

  return (
    <div style={{ margin: "20px" }}>
      <p>Sở thích: {JSON.stringify(hobbies)}</p>
      {options.map((item) => (
        <div key={item}>
          <input
            type="checkbox"
            value={item}
            checked={hobbies.includes(item)}
            onChange={handleChange}
          />
          <label style={{ marginLeft: "5px" }}>{item}</label>
        </div>
      ))}
    </div>
  );
}