import { useAppDispatch, useAppSelector } from "../hooks/useCustomeRedux";
import { setLanguage } from "../redux/slices/language.slice";

export default function Language() {
  const currentLang = useAppSelector((state) => state.language.current);
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setLanguage(e.target.value as "en" | "vi"));
  };

  return (
    <div style={{ padding: "20px" }}>
      <select value={currentLang} onChange={handleChange}>
        <option value="vi">Vietnamese</option>
        <option value="en">English</option>
      </select>

      <h2 style={{ marginTop: "20px" }}>
        {currentLang === "vi" ? "Học viện Rikkei" : "Rikkei Academy"}
      </h2>
    </div>
  );
}
