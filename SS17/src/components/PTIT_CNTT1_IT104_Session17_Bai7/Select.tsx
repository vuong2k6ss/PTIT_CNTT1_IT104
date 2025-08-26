import { useState } from "react";

export default function Select() {
  const [city, setCity] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCity(e.target.value);
  };

  return (
    <div style={{ margin: "20px" }}>
      <label htmlFor="city">Thành phố: </label>
      {city && <span>{city}</span>}
      <br />
      <select id="city" value={city} onChange={handleChange}>
        <option value="">-- Chọn thành phố --</option>
        <option value="Hà Nội">Hà Nội</option>
        <option value="Hà Nam">Hà Nam</option>
        <option value="Ninh Bình">Ninh Bình</option>
        <option value="Thanh Hóa">36</option>
        <option value="Nghệ An">Nghệ An</option>
      </select>
    </div>
  );
}