import React, { Component } from 'react';

type State = {
  email: string;
  submittedEmail: string;
};

export default class EmailForm extends Component<unknown, State> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      email: '',
      submittedEmail: '',
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ email: e.target.value });
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.setState({ submittedEmail: this.state.email });
  };

  render() {
    const { email, submittedEmail } = this.state;

    return (
      <div>
        <h2>Form</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={this.handleChange}
            required
          />
          <button type="submit">Submit</button>
        </form>

        {submittedEmail && (
          <div
            style={{
              marginTop: '20px',
              fontFamily: 'monospace',
              color: 'darkred',
            }}
          >
            {`{ email: '${submittedEmail}' }`}
          </div>
        )}
      </div>
    );
  }
}
