import React, { Component } from 'react';
import type { ChangeEvent, FormEvent } from 'react';

type State = {
  birthday: string;
  submittedBirthday: string;
};

export default class FormBirthday extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      birthday: '',
      submittedBirthday: ''
    };
  }

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ birthday: event.target.value });
  };

  handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.setState({ submittedBirthday: this.state.birthday });
  };

  render() {
    return (
      <div>
        <h2>
          Ngày sinh: {this.state.submittedBirthday}
        </h2>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="birthdayInput">Ngày sinh:</label><br />
          <input
            type="date"
            id="birthdayInput"
            value={this.state.birthday}
            onChange={this.handleChange}
          /><br /><br />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
