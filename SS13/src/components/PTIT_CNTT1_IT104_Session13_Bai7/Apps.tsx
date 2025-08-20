import React, { Component } from "react";

type State = {
  theme: "light" | "dark";
  language: "english" | "vietnamese";
};

export default class Apps extends Component<object, State> {
  state: State = {
    theme: "light",
    language: "english",
  };

  toggleTheme = () => {
    this.setState({
      theme: this.state.theme === "light" ? "dark" : "light",
    });
  };

  toggleLanguage = () => {
    this.setState({
      language:
        this.state.language === "english" ? "vietnamese" : "english",
    });
  };

  render() {
    const { theme, language } = this.state;

    const containerStyle: React.CSSProperties = {
      backgroundColor: theme === "light" ? "white" : "black",
      color: theme === "light" ? "black" : "white",
      padding: "20px",
      margin: "20px",
      border: "1px solid gray",
    };

    return (
      <div>
        <div style={containerStyle}>
          <h3>Nền: {theme === "light" ? "Sáng" : "Tối"}</h3>
          <h3>
            Ngôn ngữ: {language === "english" ? "English" : "Tiếng Việt"}
          </h3>
        </div>

        <button onClick={this.toggleTheme}>Đổi theme</button>
        <button onClick={this.toggleLanguage}>Đổi ngôn ngữ</button>
      </div>
    );
  }
}
