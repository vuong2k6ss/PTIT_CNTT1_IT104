import React from "react";
import Header from "./Header";
import Menu from "./Menu";
import Main from "./Main";
import Footer from "./Footer";
import "./Layout.css";

const AdminIndex: React.FC = () => {
  return (
    <div className="layout">
      <Header />
      <div className="content">
        <Menu />
        <Main />
      </div>
      <Footer />
    </div>
  );
};

export default AdminIndex;
