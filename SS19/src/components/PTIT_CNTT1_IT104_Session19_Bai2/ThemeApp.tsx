import React, { createContext, useState, useContext } from "react";

interface ThemeContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
}
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const style: React.CSSProperties =
    theme === "light"
      ? { backgroundColor: "white", color: "black", minHeight: "100vh" }
      : { backgroundColor: "#111", color: "white", minHeight: "100vh" };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={style}>{children}</div>
    </ThemeContext.Provider>
  );
};

const Header = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) return null;

  return (
    <header style={{ textAlign: "center", padding: "20px" }}>
      <h1>My Themed App</h1>
      <button
        onClick={ctx.toggleTheme}
        style={{
          padding: "10px 20px",
          marginTop: "10px",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          backgroundColor: "#333",
          color: "white",
        }}
      >
        Toggle Theme
      </button>
    </header>
  );
};

const Content = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) return null;

  return (
    <main style={{ padding: "20px", fontSize: "18px" }}>
      <p>Đây là phần nội dung chính của ứng dụng.</p>
      <p>
        Theme hiện tại: <b>{ctx.theme.toUpperCase()}</b>
      </p>
    </main>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <Header />
      <Content />
    </ThemeProvider>
  );
}