import { useAppDispatch, useAppSelector } from "../hooks/useCustomeRedux";
import { toggleTheme } from "../redux/slices/theme.slice";

export default function Theme() {
  const mode = useAppSelector((state) => state.theme.mode);
  const dispatch = useAppDispatch();

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <div
      style={{
        height: "200px",
        width: "400px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: mode === "light" ? "#ffffffff" : "#111111ff",
        color: mode === "light" ? "#000" : "#fff",
      }}
    >
      <button onClick={handleToggle}>
        {mode === "light" ? "Light" : "Dark"}
      </button>
    </div>
  );
}
