import { Component } from "react";

type StateType = {
  slogan: string;
};

export default class Slogan extends Component<
  Record<string, never>,
  StateType
> {
  constructor(props: Record<string, never>) {
    super(props);

    this.state = {
      slogan: "Học code để đi làm",
    };
  }

  // Hàm thay đổi state khi click
  handleChange = () => {
    this.setState({
      slogan: "Học code sẽ thành công. Cố lên!!!",
    });
  };

  // Ngăn không cho render lại UI dù state đã thay đổi
  shouldComponentUpdate() {
    return false; // luôn chặn re-render
  }

  render() {
    return (
      <div>
        <h2>Slogan: "{this.state.slogan}"</h2>
        <button onClick={this.handleChange}>Change state</button>
      </div>
    );
  }
}