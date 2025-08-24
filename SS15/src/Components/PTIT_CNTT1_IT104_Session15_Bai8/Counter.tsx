import { Component } from "react";

interface CounterState {
  count: number;
}

export default class Counter extends Component<object, CounterState> {
  private timerID?: number;

  constructor(props: object) {
    super(props);
    // Khởi tạo state với count = 0
    this.state = { count: 0 };
  }

  // Sau khi component render lần đầu → thiết lập interval
  componentDidMount() {
    this.timerID = window.setInterval(() => {
      this.setState((prevState) => ({
        count: (prevState.count + 1) % 11, // quay lại 0 khi đạt 10
      }));
    }, 1000);
  }

  // Khi component bị hủy → clear interval tránh rò rỉ bộ nhớ
  componentWillUnmount() {
    if (this.timerID) {
      clearInterval(this.timerID);
    }
  }

  render() {
    return (
      <div>
        <h3>Giá trị bộ đếm: {this.state.count}</h3>
      </div>
    );
  }
}