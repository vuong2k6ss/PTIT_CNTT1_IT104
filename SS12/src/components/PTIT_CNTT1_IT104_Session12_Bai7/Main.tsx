import React from "react";
import Cart from "./Cart";

const Main: React.FC = () => {
  const items = Array.from({ length: 16 }, (_, i) => i + 1);
  return (
    <section className="ul-main">
      <div className="ul-main-title">Main</div>
      <div className="ul-grid">
        {items.map(i => (
          <Cart key={i} />
        ))}
      </div>
    </section>
  );
};
export default Main;
