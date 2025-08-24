import React, { Component } from 'react';
import type { ChangeEvent, FormEvent } from 'react';

type State = {
  progress: number;
  submittedProgress: number | null;
};

export default class FormProgress extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      progress: 0,
      submittedProgress: null
    };
  }

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ progress: parseInt(event.target.value) });
  };

  handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.setState({ submittedProgress: this.state.progress });
  };

  render() {
    return (
      <div>
        <h2>
          Tiến độ hoàn thành:{' '}
          {this.state.submittedProgress !== null
            ? `${this.state.submittedProgress} %`
            : '%'}
        </h2>

        <form onSubmit={this.handleSubmit}>
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={this.state.progress}
            onChange={this.handleChange}
          /><br /><br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
