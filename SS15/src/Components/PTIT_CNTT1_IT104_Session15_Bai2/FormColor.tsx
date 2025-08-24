import React, { Component } from 'react';
import type { ChangeEvent, FormEvent } from 'react';

type State = {
  color: string;
  submittedColor: string;
};

export default class FormColor extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      color: '#000000',
      submittedColor: ''
    };
  }

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ color: event.target.value });
  };

  handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.setState({ submittedColor: this.state.color });
  };

  render() {
    return (
      <div>
        <h2>Color: {this.state.submittedColor}</h2>

        <form onSubmit={this.handleSubmit}>
          <h3>Form</h3>
          <label htmlFor="colorInput">Màu sắc</label><br />
          <input
            type="color"
            id="colorInput"
            value={this.state.color}
            onChange={this.handleChange}
          /><br /><br />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
