
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "./store";
import { toggleMode } from "./modeReducer";

const DarkMode: React.FC = () => {
  const isDarkMode = useSelector((state: RootState) => state.darkMode);
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(toggleMode());
  };

  const containerStyle = {
    backgroundColor: isDarkMode ? "#000" : "#fff",
    color: isDarkMode ? "#fff" : "#000",
    padding: "40px",
    width: "300px",
    borderRadius: "5px",
  };

  return (
    <div style={containerStyle}>
      <label>
        <input
          type="checkbox"
          checked={isDarkMode}
          onChange={handleChange}
        />
        {isDarkMode ? " Tối" : " Sáng"}
      </label>
    </div>
  );
};

export default DarkMode;
