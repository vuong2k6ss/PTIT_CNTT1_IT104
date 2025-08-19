import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Menu from "./Menu";
import Main from "./Main";
import Article from "./Article";
import "./Layout.css";

const UserLayout: React.FC = () => {
  return (
    <div className="ul-layout">
      <Header />
      <Navbar />

      <div className="ul-body">
        <Menu />
        <div className="ul-main-wrap">
          <Main />
        </div>
        <Article />
      </div>
    </div>
  );
};

export default UserLayout;
