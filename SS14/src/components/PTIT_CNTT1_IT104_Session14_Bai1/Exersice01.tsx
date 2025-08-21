import { Component } from "react";

type StateType = {
  userName: string;
};

export default class Exersice01 extends Component<
  Record<string, unknown>,
  StateType
> {
  constructor(props: Record<string, unknown>) {
    super(props);

    // Khởi tạo state trong vòng đời Mounting
    this.state = {
      userName: "Bùi Minh Vũ",
    };
  }

  render() {
    return (
      <div>
        <h2>Exercise 01 - Class Component Lifecycle</h2>
        <p>
          Xin chào, mình là: <strong>{this.state.userName}</strong>
        </p>
      </div>
    );
  }
}