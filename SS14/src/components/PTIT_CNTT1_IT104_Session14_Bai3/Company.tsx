import { Component } from "react";

type StateType = {
  company: string;
};

export default class Company extends Component<
  Record<string, never>,
  StateType
> {
  constructor(props: Record<string, never>) {
    super(props);

    // Khởi tạo state
    this.state = {
      company: "Rikkei Academy",
    };
  }

  // Hàm thay đổi state khi click
  handleChange = () => {
    this.setState({
      company:
        this.state.company === "Rikkei Academy"
          ? "RikkeiSoft"
          : "Rikkei Academy",
    });
  };

  render() {
    return (
      <div>
        <h2>Company: {this.state.company}</h2>
        <button onClick={this.handleChange}>Change state</button>
      </div>
    );
  }
}