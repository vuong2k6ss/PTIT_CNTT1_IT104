import React, { Component } from 'react';

type State = {
  time: Date;
};

export default class Clock extends Component<object, State> {
  private timerID?: number;

  constructor(props: object) {
    super(props);
    this.state = {
      time: new Date()
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: new Date()
    });
  }

  render() {
    const { time } = this.state;
    const formattedTime = time.toLocaleTimeString('vi-VN', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });

    return (
      <div style={{ textAlign: 'center', fontSize: '20px', marginTop: '40px' }}>
        Thời gian hiện tại: {formattedTime}
      </div>
    );
  }
}
