import { useAppDispatch, useAppSelector } from "../hooks/useCustomeRedux";
import { toggleMode } from "../redux/slices/viewMode.slice";

export default function ViewMode() {
  const mode = useAppSelector((state) => state.viewMode.mode);
  const dispatch = useAppDispatch();

  const items = [1, 2, 3, 4];

  const handleToggle = () => {
    dispatch(toggleMode());
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <button onClick={handleToggle} style={{ marginBottom: "20px" }}>
        {mode === "list" ? "List mode" : "Grid mode"}
      </button>

      <div
        style={{
          display: mode === "list" ? "block" : "grid",
          gridTemplateColumns: mode === "grid" ? "repeat(4, 1fr)" : "none",
          gap: "10px",
          justifyContent: "center",
        }}
      >
        {items.map((item) => (
          <div
            key={item}
            style={{
              backgroundColor: "tomato",
              color: "#fff",
              padding: "20px",
              margin: mode === "list" ? "10px auto" : "0",
              width: mode === "list" ? "200px" : "80px",
              textAlign: "center",
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
