import { Component } from "react";

export default class Notification extends Component {
  componentDidMount() {
    console.log("Component đã được mount!");
  }

  render() {
    return (
      <div>
        <h2>Notification Component</h2>
        <p>Kiểm tra console để thấy thông báo khi component mount.</p>
      </div>
    );
  }
}